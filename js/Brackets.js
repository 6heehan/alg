// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    const arr = [];
    const len = S.length;

    for(let i=0; i<len; i++) {
        let prev;
        switch(S[i]) {
            case '(':
            case '{':
            case '[':
                arr.push(S[i]);
                break;
            case ')':
                if(arr.length === 0) return 0;
                prev = arr.pop();
                if(prev !== '(') {
                    return 0;
                }
                break;
            case '}':
                if(arr.length === 0) return 0;
                prev = arr.pop();
                if(prev !== '{') {
                    return 0;
                }
                break;
            case ']':
                if(arr.length === 0) return 0;
                prev = arr.pop();
                if(prev !== '[') {
                    return 0;
                }
                break;
        }
    }
    return arr.length === 0 ? 1:0;
}
