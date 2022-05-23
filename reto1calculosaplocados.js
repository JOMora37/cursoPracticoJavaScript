var listaSalarios = [];

    listaSalarios.push({
        name: "Omar",
        salary: 500,
    }); 
    
    listaSalarios.push({
        name: "Edgar",
        salary: 700,
    });
    
    listaSalarios.push({
        name: "Victor",
        salary: 945,
    });
    
    listaSalarios.push({
        name: "Ernesto",
        salary: 467,
    });
    
    listaSalarios.push({
        name: "Sergio",
        salary: 350,
    });
    
    listaSalarios.push({
        name: "Oscar",
        salary: 1789,
    });
    
    listaSalarios.push({
        name: "Gabriel",
        salary: 678,
    });
    
    listaSalarios.push({
        name: "Paco",
        salary: 550,
    });
    
    listaSalarios.push({
        name: "Francisco",
        salary: 500,
    });
    
    listaSalarios.push({
        name: "Angeles",
        salary: 789,
    });
    
    listaSalarios.push({
        name: "Julia",
        salary: 890,
    });
    
    listaSalarios.push({
        name: "Julieta",
        salary: 950,
    });
    
    listaSalarios.push({
        name: "Maria",
        salary: 1550,
    });
    
    listaSalarios.push({
        name: "Luz",
        salary: 1290,
    });
    
    listaSalarios.push({
        name: "Isabel",
        salary: 1560,
    });
    
    listaSalarios.push({
        name: "Maritina",
        salary: 1110,
    });
    
    listaSalarios.push({
        name: "Irma",
        salary: 670,
    });
    
    listaSalarios.push({
        name: "Tere",
        salary: 890,
    });
    
    listaSalarios.push({
        name: "Daniel",
        salary: 350,
    });
    
    listaSalarios.push({
        name: "Luis",
        salary: 750,
    });
    
    listaSalarios.push({
        name: "Marce",
        salary: 350,
    });
    
    listaSalarios.push({
        name: "Juan",
        salary: 1140,
    });
    
    listaSalarios.push({
        name: "David",
        salary: 650,
    });


    const sumaLista = listaSalarios.reduce((acc, item) => {
        return acc += item.salary;
    }, 0);


 var totalPersonas = listaSalarios.length; 

var promedioDeSalarios = ( sumaLista / totalPersonas);


var medianaSalarios = (totalPersonas + 1) / 2;


