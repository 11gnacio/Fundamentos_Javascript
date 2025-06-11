// EJERCICIOS CONDICIONES IF - ELSE
console.log("Conexeción js establecida...");
/* Edad para votar
Solisicta la edad del usuario mediante promt().
Muestra con alert() si puede votar
(18 años o más) o no.
*/

function edadVotar(){
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Input conversión string a número
    //Condicion  IF- else if -else
    if (edad >= 18){
        alert("Su edad " + edad + " aprobada para votar.")   
    }else if(edad >= 0 && edad <18){ //&& compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar. ");
    } else {
        alert("Ingrese un valor")
    }     
}

 // Comprovarsila contraseña es Válida

function contraseñaValida(){
    let  contraseña = "1234";
    let Valida = prompt("Ingresesu Contraseña: ");

    if(contraseña == Valida){
        alert("Acceso permitido...");
    } else {
        alert("Accseso Denegado")
    }
}

// Números Pares e Impares

function ParImpar(){
    let número = parseInt(prompt("Ingrese un Valor"));
    if (número % 2 == 1){
        alert("El número " + número + " es Par")
    } else if (número % 2  == 0){
        alert("El número " + número + " es Impar") 
    }
    else {
        alert("Ingrese un número Valido. ")
    }

    function temperatura(){
        let temperatura = parseInt(prompt("Ingresar temperatura")); 
    }

    if (temperatura >= 30 && temperatura <= 30){
        alert("Hace calor")
    } else if (temperatura >= 15 && temperatura <= 30){
        alert ("")
    } else if (temperatura >= -5 && temperatura <= 15) {  
        alert("Hace frio")
    } else{
        alert("Ingrese un valo Válido");

    }
    

    
    
        
    

    

}


