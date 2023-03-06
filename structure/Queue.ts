export class Queue<T = any> {
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

    /**
     * @description 向队列中尾部添加一个元素
     * @param element 需要插入的元素
     */
    push(element: T): void {
        this.data.set(this.tail++, element);
    }

    /**
     * @description 从队列头部取出一个元素
     * @returns 返回元素值
     */
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        const result: T | undefined = this.data.get(this.head);
        this.data.delete(this.head);
        this.head++;
        return result;
    }

    /**
     * @description 获取队首元素，不取出元素
     * @returns 队首元素
     */
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.get(this.head);
    }

    /**
     * @description 队列是否为空
     * @returns  true 为空，false 不为空
     */
    isEmpty(): boolean {
        return this.data.size === 0;
    }

    /**
     * @description 队列元素个数
     * @returns 队列元素个数
     */
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
