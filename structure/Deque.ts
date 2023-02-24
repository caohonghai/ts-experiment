class Deque<T = any> {
    private tail: number;
    private head: number;
    private data: Map<number, T>;

    constructor(array?: T[]) {
        this.tail = 0;
        this.head = 0;
        this.data = new Map();
        if (array) {
            array.forEach(element => {
                this.addLast(element);
            });
        }
    }

    addLast(element: T): void {
        this.data.set(this.tail++, element);
    }

    addFront(element: T): void {
        this.data.set(--this.head, element);
    }

    removeLast(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result: T | undefined = this.data.get(--this.tail);
        this.data.delete(this.tail);
        return result;
    }

    removeFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result: T | undefined = this.data.get(this.head);
        this.data.delete(this.head++);
        return result;
    }

    peekLast(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.get(this.tail - 1);
    }

    peekFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.get(this.head);
    }

    isEmpty(): boolean {
        return this.data.size === 0;
    }

    clear(): void {
        this.data = new Map();
        this.head = 0;
        this.tail = 0;
    }

    size(): number {
        return this.data.size;
    }

    toString(): string {
        if (this.isEmpty()) {
            return '';
        }
        let objString: string = `${this.data.get(this.head)}`;
        for (let i = this.head + 1; i < this.tail; i++) {
            objString = `${objString},${this.data.get(i)}`;
        }
        return objString;
    }
}
