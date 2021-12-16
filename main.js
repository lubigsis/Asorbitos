let estadoLicuadora= "apagada";
let licuadora= document.getElementById("licuadoraJS");


function controlarLicuadora(){
    if (estadoLicuadora== "apagada"){
        estadoLicuadora= "encendida";
        licuadora.classList.add("active");
        console.log("me encendiste");
    }else{
        estadoLicuadora= "apagada";
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}