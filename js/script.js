function mostrarAlerta(elemento_a) {
    console.log(elemento_a);

    var location = elemento_a.innerText;
    alert("Cargando informe meteorológico "+location);
}

function eliminarCookie(){
    var cookie_element = document.querySelector('.cookie');
    cookie_element.remove();
}

function cambiarTemp(elemento_select){
    var foc = elemento_select.value;
    console.log(foc);

    for(var i = 1; i<=8; i++){
        var elemento_temp = document.querySelector('#temp'+i);
        var temperatura = elemento_temp.innerText;

        temperatura = parseInt(temperatura); //transforma el texto en numero entero

        var new_temp = 0;

        if(foc === "C") {
            //F ---> C
            new_temp = Math.round((temperatura-32) * 5 / 9); 
        }
        else {
            new_temp = Math.round((temperatura * 9 / 5) + 32);
        }

        elemento_temp.innerText = new_temp;
    }
}