const btn = document.getElementById("btn-convert").addEventListener("click", convert);
const btnClean = document.getElementById("btn-clean").addEventListener("click", clean);

let decInput = document.getElementById("decimal");
let binInput = document.getElementById("binary");

let active = false;

function convert(){
    let dec = Number(document.getElementById("decimal").value);
    let binary = document.getElementById("binary").value;

    decInput.addEventListener("click", ()=>{active = false})
    binInput.addEventListener("click", ()=>{active = true})

    if(!active){
        decToBin(dec)
    }
    else{
        binToDec(binary)
    }       

}
function decToBin(dec){
    binInput.value = parseInt(dec.toString(2));
    //active = null;
}
function binToDec(bin){
    decInput.value = parseInt(bin.toString(2),2).toString(10);
   // active = null;
}
function clean(){
    decInput.value = "";
    binInput.value = ""
}
