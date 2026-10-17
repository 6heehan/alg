function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i<n; i++) {
        let temp = ((arr1[i] | arr2[i]).toString(2).padStart(n,"0"))
        let tempArr = []
        for(let j=0; j<n; j++) {
            
            if(temp[j] === '1') {
                tempArr.push("#")
            }
            else {
                tempArr.push(" ");   
            }
        }
        answer.push([...tempArr].join(''))
    }
    return answer;
}
