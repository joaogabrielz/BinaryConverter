function convertToBinary(dec){
    let num = dec;
    let binary = (num % 2).toString();
    for(;num > 1;){
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    console.log(binary);
}
convertToBinary(10);