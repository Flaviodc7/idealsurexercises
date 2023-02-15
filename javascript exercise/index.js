function suma_y_paridad() {
    const a = document.getElementById('number_a').value;
    const b = document.getElementById('number_b').value;
    if (a.match(/[^0-9]/g)?.length >= 1){
        alert("El primer valor ingresado no es un número entero, intente nuevamente");
    } else if (b.match(/[^0-9]/g)?.length >= 1){
        alert("El segundo valor ingresado no es un número entero, intente nuevamente");
    } else {
        const resultado = parseInt(a) + parseInt(b);
        const paridad = (resultado % 2) == 0 ? "PAR" : "IMPAR";
        alert(`La suma de los números es: ${resultado}\nLa suma de los números resulta en un número de tipo ${paridad}`);
    }
  }