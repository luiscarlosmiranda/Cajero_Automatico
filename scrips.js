let cuentas = [
    {usuario: "Julieth", saldo: 890, password: "1234"},
    {usuario: "Carlos", saldo: 500, password: "5678"},
    {usuario: "Juan", saldo: 80, password: "9012"},
];

let cuentaSeleccionada;
function seleccionarCuenta(nombre){
    let cuenta = cuentas.find(cuenta => cuenta.usuario === nombre);
    if (cuenta) {
        let password = prompt("Ingrese tu contraseña:");
        if (password === cuenta.password) {
            cuentaSeleccionada = cuenta;
            alert(`Bienvenido ${cuenta.usuario}`);
            mostrarOpciones();
        }
        else {
            alert("contraseña incorrecta");
        }
     } else {
        alert("Cuenta no encontrada");
    }
}

function mostrarOpciones() {
    let opcion = prompt("Seleccionar una opcion:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto");
    switch (opcion) {
        case "1":
        consultarSaldo();
        break;
        case "2":
        ingresarMonto();
        break;
        case "3":
        retirarMonto();
        break;
        default:
        alert("Opcion invalida");
        mostrarOpciones();
        break
    }
}

function consultarSaldo(){
    alert(`Tu saldo actual es de $${cuentaSeleccionada.saldo}`);
}

function ingresarMonto() {
    let monto = parseInt(prompt("Ingresa el monto a depositar:"));
    if (monto > 0) {
      if (cuentaSeleccionada.saldo + monto > 990) {
        alert("No puedes tener mas de $990 en tu cuenta");
      } else {
          cuentaSeleccionada.saldo += monto;
          alert(`Has depositado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}`);
      }
    } else {
        alert("El monto debe ser mayor a cero");
    }
}

function retirarMonto() {
    let monto = parseInt(prompt("Ingresa el monto a retirar:"));
    if (monto > 0) {
      if (cuentaSeleccionada.saldo - monto < 10) {
        alert("No puedes tener menos de $10 en tu cuenta");
      } else {
          cuentaSeleccionada.saldo -= monto;
          alert(`Has retirado $${monto}. Tu nuevo saldo es de $${cuentaSeleccionada.saldo}`);
      }
    } else {
        alert("El monto debe ser mayor a cero");
    }
}