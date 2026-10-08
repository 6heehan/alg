class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let smallest = i;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }

        return min;
    }

    get size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for (const s of scoville) heap.push(s);

    let answer = 0;

    while (heap.peek() < K) {
        if (heap.size < 2) return -1;

        const one = heap.pop();
        const two = heap.pop();
        heap.push(one + two * 2);
        answer++;
    }

    return answer;
}
