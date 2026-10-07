function solution(people, limit) {
    var answer = 0;
    const p = [...people].sort((a,b) => a -b)
    var left = 0;
    var right = p.length - 1;
    
    while(left <= right) {
        if(p[left] + p[right] <= limit) {
            left++;
        } 
        right--;
        answer++;
    }
    return answer;
}
