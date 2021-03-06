// Funciones Helpers 

function esPar(numerito){
    return(numerito % 2 === 0);
}


function calcularMediaAritmetica(lista){
 
   
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
          return valorAcumulado + nuevoElemento;
   
        }
    );
   
    const promedioLista = sumaLista / lista.length;
   
    return promedioLista;
};

// Mediana general

const salariosDeCol = colombia.map(function(personita){
    return personita.salary;
});

const salariosColSorted = salariosDeCol.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
});


// Calculadora Mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    
    if  (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1 ];
        const personitaMitad2 = lista[mitad];
    
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana; 
    }else{
    
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
    }



const medianaGeneralCol = medianaSalarios(salariosColSorted)

//mediana top 10%



const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCout =salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCout,
);


const medianaTop10Col = medianaSalarios(salariosColTop10);



console.log({
medianaGeneralCol,
medianaTop10Col,
});