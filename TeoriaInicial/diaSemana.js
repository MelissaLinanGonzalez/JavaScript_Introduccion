

for(let i = 1; i <= 7; i++){
    if(i == 1){
    console.log("Lunes")
    }else if(i == 2){
        console.log("Martes")
    }else if(i == 3){
        console.log("Miércoles")
    }else if(i == 4){
        console.log("Jueves")
    }else if(i == 5){
        console.log("Viernes")
    }else if(i == 6){
        console.log("Sábado")
    }else if(i == 7){
        console.log("Domingo")
    }
}

// Otra forma con switch
for(let i = 1; i <= 7; i++){
    switch(i){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default: // Aquí no entra porque en la iteración solo recoge los valores correctos de días
            console.log("Día no válido " + i); 
            break;
    }
}