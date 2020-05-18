function palin(word){
    let reverseword = "";
    for(let i = word.length-1; i>=0; i--){
        reverseword =reverseword + word[i];
    }
    if(word === reverseword){return true}
    else{return false}
}
console.log(palin("kayak"));