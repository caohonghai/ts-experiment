class Queue<T = any> {
    private tail: number;
    private head: number;
    private data: Map<number, T>;

    constructor(array?: T[]) {
        this.data = new Map();
        this.head = 0;
        this.tail = 0;
        if (array) {
            array.forEach(element => {
                this.push(element);
            });
        }
    }

    push(element: T): void {
        this.data.set(this.tail++, element);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result: T | undefined = this.data.get(this.head);
        this.data.delete(this.head);
        this.head++;
        return result;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.get(this.head);
    }

    isEmpty(): boolean {
        return this.data.size === 0;
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
