class ArrayStack<T = any> {
    private data: T[] = [];

    constructor(data?: T[]) {
        this.data = data || [];
    }

    push(element: T): void {
        this.data.push(element);
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    peek(): T | undefined {
        return this.data[this.data.length - 1];
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    size(): number {
        return this.data.length;
    }

    clear(): void {
        this.data = [];
    }
}

class Stack<T = any> {
    private data: Map<number, T>;

    constructor(array?: T[]) {
        this.data = new Map();
        if (array) {
            array.forEach(element => {
                this.push(element);
            });
        }
    }

    push(element: T): void {
        this.data.set(this.data.size, element);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.data.get(this.data.size - 1);
        this.data.delete(this.data.size - 1);
        return result;
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.get(this.data.size - 1);
    }

    isEmpty(): boolean {
        return this.data.size === 0;
    }

    size(): number {
        return this.data.size;
    }

    clear(): void {
        this.data.clear();
    }

    toString(): string {
        if (this.isEmpty()) {
            return '';
        }
        let result: string = '';
        this.data.forEach((value, key) => {
            result = `${result}${key === 0 ? '' : ', '}${value}`;
        });
        return result;
    }
}
