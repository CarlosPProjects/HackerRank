function plusMinus(arr) {
    
    if(!arr) return false;
    
    let array = arr;
    let pos = 0;
    let neg = 0;
    let zer = 0;
    let size = array.length;
    
    for(let i=0; i < size; i++) {
        if(array[i] > 0) {
            pos++;
        }else if(array[i] < 0) {
            neg++;
        }else{
            zer++;
        }
    }
    
    let r1 = pos/size;
    let r2 = neg/size;
    let r3 = zer/size;
    
    console.log(r1);
    console.log(r2);
    console.log(r3);
}