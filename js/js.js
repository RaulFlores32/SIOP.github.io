function rectangular(){
    let alto = 0;
    let ancho = 0;
    let largo = 0;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    ancho = document.getElementById("txtAncho").value;
    largo = document.getElementById("txtLargo").value;
    res1 = parseInt(alto) * parseInt(ancho) * parseInt(largo);
    res1 = res1 * 0.001;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function cuadrada(){
    let alto = 0;
    let ancho = 0;
    let largo = 0;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    ancho = document.getElementById("txtAncho").value;
    largo = document.getElementById("txtLargo").value;
    res1 = parseInt(alto) * parseInt(ancho) * parseInt(largo);
    res1 = res1 * 0.001;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function cilindrico(){
    let alto = 0;
    let radio = 0;
    let pi = 3.1415;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("altura").value;
    radio = document.getElementById("radio").value;
    res1 = parseInt(alto) * pi * parseInt(Math.pow(radio, 2));
    res1 = res1 * 0.001;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function semicircular(){
    let alto = 0;
    let radio = 0;
    let pi = 3.1415;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    radio = document.getElementById("txtRadio").value;
    res1 = parseInt(alto) * pi * parseInt(Math.pow(radio, 2));
    res1 = (res1 * 0.001)/2;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function triangularPanoramica(){
    let alto = 0;
    let radio = 0;
    let pi = 3.1415;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    radio = document.getElementById("txtRadio").value;
    res1 = parseInt(alto) * pi * parseInt(Math.pow(radio, 2));
    res1 = (res1 * 0.001)/4;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function triangular(){
    let alto = 0;
    let ancho = 0;
    let largo = 0;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    ancho = document.getElementById("txtAncho").value;
    largo = document.getElementById("txtLargo").value;
    res1 = parseInt(alto) * parseInt(ancho) * parseInt(largo);
    res1 = (res1 * 0.001)/2;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function esferico(){
    let radio = 0;
    let res = 0;
    let res1 = 0;
    radio = document.getElementById("txtRadio").value;
    res1 = (67/16) * parseInt(Math.pow(radio, 3));
    res1 = res1 * 0.001;
    res = res1 - (res1*0.25);
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}
function panoramicaRectangular(){
    let alto = 0;
    let ancho = 0;
    let largo = 0;
    let pi = 3.1415;
    let resRectangulo = 0;
    let resRectanguloCompleto = 0;
    let resOtro = 0;
    let resOtroCompleto = 0;
    let res = 0;
    let res1 = 0;
    alto = document.getElementById("txtAlto").value;
    ancho = document.getElementById("txtAncho").value;
    largo = document.getElementById("txtLargo").value;
    let radio = largo/2;
    resRectangulo = parseInt(alto) * parseInt(ancho) * parseInt(largo);
    resRectangulo = resRectangulo * 0.001;
    resRectanguloCompleto = resRectangulo - (resRectangulo*0.25);
    resOtro = (parseInt(alto) * pi * parseInt(Math.pow(radio, 2)))/2;
    resOtro = resOtro * 0.001;
    resOtroCompleto = resOtro - (resOtro*0.25);
    res = resRectanguloCompleto + resOtroCompleto;
    res1 = resRectangulo + resOtro;
    window.alert("La cantidad de agua que contiene tu acuario es: \n" +res.toFixed(2)+ " litros\n" +res1.toFixed(2)+ " litros reales (sin nada dentro de la pecera)");
}