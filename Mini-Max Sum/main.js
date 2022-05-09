function miniMaxSum(arr) {
    
    if(!arr) return false;
    
    
    arr = arr.sort();
    let min = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length - 1 ; i++){
        
        min += arr[i];
    }
    
    for(let i = 1; i < arr.length; i++) {
        max += arr[i];
    }
    
    let str = min + ' ' + max;
    
    console.log(str);
    
}