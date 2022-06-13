console.log("Integrado");

document.getElementById("boton").addEventListener("click", Calcular);

function Calcular() {
    let cantidad, color, circulo, resultado;
    cantidad = document.getElementById("cantidad").value;
    color = document.getElementById("color").value;

    if ( isNaN(cantidad) || color == "none") {
        alert("Debe ingresar una cantidad y un color");
        resultado = '<h3>Debe ingresar una cantidad y un color</h3>';
    } else {
        let precio = cantidad * 400000;
        circulo = '<div class="circulo" style="background color></div>';
        resultado = 
        `<div class="container-md">
        <h3> Total: $${precio}  
        <br>
        Cantidad = ${cantidad}
        <br>
        </h3>
        Color: 
        <div class="circulo" style="background-color: ${color} ;"></div>
        </div>`;
    }
document.getElementById("resultado").innerHTML = resultado;
};
