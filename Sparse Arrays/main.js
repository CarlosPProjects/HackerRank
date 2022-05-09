function matchingStrings(strings, queries) {
    
    let result = [];
    let count = 0;
    for(let i in queries) {
        for(let j in strings) {
            if(queries[i] == strings[j]) {
                count++;
            }
        }
        result.push(count);
        count = 0;
    }
    return result;
}