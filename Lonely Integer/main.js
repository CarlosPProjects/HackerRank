function lonelyinteger(a) {
    
    a = a.sort();

    for (let i = 0; i < a.length; i++) {
        if(a[i] !== a[i-1] && a[i] !== a[i+1]) {
            return a[i];
        }
    }

}