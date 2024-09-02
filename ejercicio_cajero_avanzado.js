let fechaActual = new Date();
let year = fechaActual.getFullYear();
let month = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Asegura que siempre tenga 2 dígitos
let day = String(fechaActual.getDate()).padStart(2, '0');
let hours = String(fechaActual.getHours()).padStart(2, '0');
let minutes = String(fechaActual.getMinutes()).padStart(2, '0');
let seconds = String(fechaActual.getSeconds()).padStart(2, '0');
let fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(fechaFormateada);

let cuentasPersonas =[
    {
        nombre:"Arturo",
        usuario:'at',
        contrasena:123,
        saldo:100.00,
        transacciones:[]
    },
    {
        nombre:"Pedro",
        usuario:'pe',
        contrasena:1234,
        saldo:50.00,
        transacciones:[]
    },
    {
        nombre:"Juan",
        usuario:'ju',
        contrasena:12345,
        saldo:100.00,
        transacciones:[]
    }

];


function retirar(cuenta){
    monto = usuario = document.getElementById("retirar").value;
    if(monto > 10 && monto < 990){
        let saldoAnterior = consultar(cuenta)
        let nuevoSaldo = parseInt(saldoAnterior) - parseInt(monto);

        cuentaPosicion = cuentasPersonas.findIndex(usuario => usuario.usuario === cuenta);
        cuentasPersonas[cuentaPosicion].transacciones.push("Retiro: $" + monto + "| El " + fechaFormateada);
        document.getElementById("saldo").value = nuevoSaldo;
        document.getElementById("retirar").value = "";
        cuentasPersonas[cuentaPosicion].saldo = nuevoSaldo;
        consultar(cuenta);
    }else{
        alert("No se puede procesar ese monto!");
        document.getElementById("retirar").value = "";
    }
};


function depositar(cuenta){
    monto = parseInt(document.getElementById("deposito").value);
    if(monto > 10 && monto < 990){
        let saldoAnterior = consultar(cuenta)
        let nuevoSaldo = parseInt(saldoAnterior) + parseInt(monto);

        cuentaPosicion = cuentasPersonas.findIndex(usuario => usuario.usuario === cuenta);
        cuentasPersonas[cuentaPosicion].transacciones.push("Deposito: $" + monto + " | El " + fechaFormateada);
        document.getElementById("saldo").value = parseInt(nuevoSaldo);
        document.getElementById("deposito").value = "";
        cuentasPersonas[cuentaPosicion].saldo = nuevoSaldo;
        consultar(cuenta);
    }else{
        alert("No se puede procesar ese monto!");
        document.getElementById("deposito").value = "";
    }
};

function consultar(cuenta){
    cuentaC = cuentasPersonas.find(usuario => usuario.usuario === cuenta);
    saldo = cuentaC.saldo;

    cuentaPosicion = cuentasPersonas.findIndex(usuario => usuario.usuario === cuenta);
    //cuentasPersonas[cuentaPosicion].transacciones.push("Consulta El " + fechaFormateada);
    document.getElementById("saldo").value = saldo;
    //console.log(cuentaC.transacciones);


    let lista = document.getElementById("listaTransacciones");

    const parrafos2 = lista.querySelectorAll("li");
    parrafos2.forEach(function(parrafo) {
        parrafo.remove();
    });

    

    for(i=0;i < cuentaC.transacciones.length; i++){

        var nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = cuentaC.transacciones[i];
        lista.appendChild(nuevoElemento);       
    }



    

    return saldo;

};

function buscarCuenta(usuarioBuscar,pwd){

    let cuentaBuscada = cuentasPersonas.find(usuario => usuario.usuario === usuarioBuscar);

    if(cuentaBuscada !== undefined && cuentaBuscada.contrasena == pwd){
        let cuentaActiva = cuentaBuscada.usuario;
        sessionStorage.setItem('cuentaAct', cuentaActiva);
        window.location.href = "cajero.html";
    }else{
        let mensaje = document.getElementById("errorlogin");
        mensaje.style.color = "red";
        mensaje.innerText = "Usuario o Contraseña incorrecta";
        usuario = document.getElementById("user").value = "";
        password = document.getElementById("pwd").value ="";
        //alert("Usuario o contraseña inválida");
    }
    
    
}
function enviarLogin(){
    usuario = document.getElementById("user").value;
    password = document.getElementById("pwd").value;

    buscarCuenta(usuario,password);

}


//let usuarioBuscar = prompt("Nombre de Usuario").toLowerCase();


/*

    let repetir = true
    
    while (repetir) {
    
        if(accion == 'consultar'){
            accion = prompt("Tu saldo es de :$" + consultar(cuentaActiva) + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();
    
            if(accion == "salir"){
                repetir = false;
            }
            
        }else if(accion == 'depositar'){
            let montoDeposito = prompt("Tu saldo es de :$" + consultar(cuentaActiva) + "\n Cuanto deseas Depositar?");
            depositar(montoDeposito,cuentaActiva);
            accion = prompt("Tu saldo es de :$" + consultar(cuentaActiva) + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();
    
            if(accion == "salir"){
                repetir = false;
            }
            
        }else if(accion == 'retirar'){
            let montoRetiro = prompt("Tu saldo es de :$" + consultar(cuentaActiva) + "\n Cuanto deseas Retirar?");
            retirar(montoRetiro,cuentaActiva);
            accion = prompt("Tu saldo es de :$" + consultar(cuentaActiva) + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();
    
            if(accion == "salir"){
                repetir = false;
            }
            
        }else{
            accion = prompt("No entendí la instrucción pero ... \n Tu saldo es de :$" + consultar(cuentaActiva) + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();
    
            if(accion == "salir"){
                repetir = false;
            }
        }
    }


*/


/*
for (let clave in personas) {
    if (personas[clave] == usuario2) {
        encontrado = true;
        console.log(encontrado);
        break;
    }
}
*/



/*

let accion = prompt("Que deseas hacer consultar|depositar|retirar").toLowerCase();



let repetir = true

while (repetir) {

    if(accion == 'consultar'){
        accion = prompt("Tu saldo es de :$" + cuenta.consultar() + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();

        if(accion == "salir"){
            repetir = false;
        }
        
    }else if(accion == 'depositar'){
        let montoDeposito = prompt("Tu saldo es de :$" + cuenta.consultar() + "\n Cuanto deseas Depositar?");
        cuenta.depositar(montoDeposito);
        accion = prompt("Tu saldo es de :$" + cuenta.consultar() + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();

        if(accion == "salir"){
            repetir = false;
        }
        
    }else if(accion == 'retirar'){
        let montoRetiro = prompt("Tu saldo es de :$" + cuenta.consultar() + "\n Cuanto deseas Retirar?");
        cuenta.retirar(montoRetiro);
        accion = prompt("Tu saldo es de :$" + cuenta.consultar() + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();

        if(accion == "salir"){
            repetir = false;
        }
        
    }else{
        accion = prompt("No entendí la instrucción pero ... \n Tu saldo es de :$" + cuenta.consultar() + "\n Que deseas hacer consultar|depositar|retirar|salir").toLowerCase();

        if(accion == "salir"){
            repetir = false;
        }
    }
}

*/