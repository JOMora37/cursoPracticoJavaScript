//Codigo Cuadrado
console.group("Cuadrados")

const lado = 5;
//console.log("Los lado del cuadrdado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
 return lado * 4;
} 

//console.log("EL perimetro del cuadrado es " + perimetroCuadrado + "cm");


function areaCuadrado (lado){
    return lado * lado;
   } 
//console.log("EL area del cuadrado es " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo Triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lado del Triangulo miden: "
 //+ ladoTriangulo1 
 //+ "cm, " 
 //+ ladoTriangulo2 
 //+ "cm, "
 //+ baseTriangulo
 //+ "cm, "
 //);
 //const alturaTriangulo = 5.5;
 //console.log("La Altura del Triangulo mide: " + alturaTriangulo);

 function perimetroTriangulo (lado1, lado2, base) {
   return lado1, lado2, base;
 }
 //console.log("El perimetro del triangulo es: " + perimetroTriangulo);
 
 function areaTriangulo (base, altura){
     return (base * altura) / 2;
 }
 //console.log("El rea del trianguo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Codigo Circulo
console.group("Circulos");

//Radio 
//const radioCirculo = 4;
//console.log("Radio del Circulo mide: " + radioCirculo + "cm");
// Diámetro 
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El Diametro del Circulo mide: " + diametroCirculo +  "cm");
//PI
const PI = Math.PI;


// Circunferencia 
function perimetroCirculo(diametro){
     return diametro * PI ;
} 
//console.log("El Perimetro del Circulo mide: " + perimetroCirculo +  "cm");
// Area
function areaCirculo(radio){
   return radio * radio * PI;
} 
//console.log("El Área del circulo es: " + areaCirculo +  "cm2")

console.groupEnd();

// Para eL HTML para Cuadrado 

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const area = areaCuadrado(value);
 alert(area);
}

// Para el HTML para Triangulo

function calcularPerimetroTriangulo (){
   const input1 = document.getElementById("InputTriangulo1");
   const lado1 = input1.value;
   const input2 = document.getElementById("InputTriangulo2");
   const lado2 = input2.value;
   const input3 = document.getElementById("InputTriangulo3");
   const base = input3.value;


   const perimetro = perimetroTriangulo(lado1, lado2, base);
   alert(perimetro);

}
  
function calcularAreaTriangulo(){

    const input3 = document.getElementById("InputTriangulo3");
    const base = input3.value;
    const input4 = document.getElementById("InputTriangulo4");
    const altura = input4.value;
    
    const area = areaTriangulo(base, altura);
    
    alert(area);
}
      
  //HTML para circulo 

  function calcularPerimetroCirculo(){
      const input1 = document.getElementById("input1Circulo");
      const diametro = input1.value;

      const perimetro = perimetroCirculo(diametro);

      alert(perimetro);
  }


  function calcularAreaCirculo(){
      const input2 = document.getElementById("input2circulo");
      const radio = input2.value;

      const area = areaCirculo(radio);

      alert(area);
  }