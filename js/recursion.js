function convertToBinary (dec) {
    if (dec > 0) {
        return convertToBinary( parseInt(dec / 2) ) + (dec % 2)
    }
    if(dec == 0) return 0;
    
    return '';
}
console.log(convertToBinary(0));