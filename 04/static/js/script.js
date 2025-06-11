 //Usode strings Ejemplo


 function usarString(){
    let nombre = prompt("Ingrese su nombre: ");
    // Asignamos valor a primeraLetra conposición 0 de nombre
    let primeraLetra = nombre[0];
    let UltimaLetra = nombre[nombre.length -1];
    
    alert("Primera letra es: " + primeraLetra + "\nUltima letra es:" + UltimaLetra ); // Mostrar resultados 
    
 } 


 // tarea : imprimir segundo letra 
// y penultima del apellido


function manipularApellido() {
   let apellido = prompt("Ingrese su apellido: "); //Variabletipotexto
   let segundaLetra = apellido[1];
   let PenultimaLetra = apellido[apellido.length -2];
   alert("segundaLetra es: " + segundaLetra + "\nPenultima letra es:" + PenultimaLetra );
} 