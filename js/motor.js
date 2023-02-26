function deshabilitarControl1(control1)
{
    control1.disabled = true;
}

function habilitarControl1(control1)
{
    control1.disabled = false;
}

function ajaxFileUpload1(form1, controlador1, div1){

    let ajax1 = new XMLHttpRequest();
    let formData1 = new FormData(form1);
    formData1.append("InformacionAdicional1", "Informacion Adicional");

    ajax1.onreadystatechange = function(){
        if(ajax1.status==200)
        // && ajax1.status==200
        {
            document.getElementById(div1.id).innerHTML = ajax1.responseText;
        }
        else
        {
            document.getElementById(div1.id).innerHTML = "Error: no se ha podido enviar el fichero(" + ajax1.status +")";
        }
    };

    ajax1.open('POST', controlador1, true);
    ajax1.send(formData1);

}


function subirFichero1(form1, boton1, controlador1, divResultado1)
{
    //alert("Mensaje 1");
    deshabilitarControl1(boton1);
    ajaxFileUpload1(form1, controlador1, divResultado1);
    //alert("Mensaje 2");
    habilitarControl1(boton1);
    form1.reset();
    // form1.
}

function dibujarImagenes(contador){
    //let contador = cont;
    for (let index = 1; index <= contador; index++) {
        //const element = array[index];
        let section1 = document.getElementById('sec-productos');
        let div1 = document.createElement('div');
        let a1 = document.createElement('a');
        let imagen1 = document.createElement('img');
        a1.href="detalle.html";
        //let p1 = document.createElement('p');
        section1.append(div1);
        div1.id = 'div_'+index;
        imagen1.id = 'img_'+index;
        div1.append(a1);
        a1.append(imagen1);
        //div1.append(p1);
        div1.classList.add('div_producto');
        imagen1.classList.add('img_producto');
        imagen1.src="images/galeria/"+index+".jpg";
        //p1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
    }
}

function peticionServidorCantidadFotos()
{
    let ajax1 = new XMLHttpRequest();

    // 1. Devolución del servidor
    ajax1.onreadystatechange = function(){
        if (ajax1.readyState==4 && ajax1.status==200)
        {
            let contador =  Number(ajax1.responseText);
            dibujarImagenes(contador);
            //document.getElementById(d01.id).innerHTML = test2;
        }
    };

    // 2. Envío de la petición al servidor
    ajax1.open('GET','controllers/hola.php', true);
    ajax1.send();

}


// Cuando todos los recursos se hayan cargado...
window.addEventListener("load", function(event){

    // Establecer una referencia de los elementos
    const form1 = document.getElementById("form1");

    // Asociar el elemento al evento y llamada a la función
    if(form1)
    {
        //mostrarImagen();
        
        const divResultado1 = document.getElementById("divResultado1");
        //const boton1 = document.getElementById("boton1");
        let controlador1 = "controllers/subir-fichero.php";
        
        form1.addEventListener("submit", function(event){
            event.preventDefault();
            subirFichero1(form1, boton1, controlador1, divResultado1);
        });
    } else {
        peticionServidorCantidadFotos();
    }



});