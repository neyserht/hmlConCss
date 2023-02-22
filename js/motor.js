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

function mostrarImagen(){
    let contador = 10;
    for (let index = 1; index < contador; index++) {
        //const element = array[index];
        let section1 = document.getElementById('sec-productos');
        let div1 = document.createElement('div');
        let imagen1 = document.createElement('img');
        let p1 = document.createElement('p');
        section1.append(div1);
        div1.append(imagen1);
        div1.append(p1);
        div1.classList.add('col-3');
        imagen1.src="images/galeria/"+index+".jpg";
        p1.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsum veritatis quas soluta molestiae amet suscipit ullam.";
    }
    
}


// Cuando todos los recursos se hayan cargado...
window.addEventListener("load", function(event){

    // Establecer una referencia de los elementos
    const form1 = document.getElementById("form1");
    const b01 = document.getElementById("b01");

    // Asociar el elemento al evento y llamada a la función
    if(form1)
    {
        
        const divResultado1 = document.getElementById("divResultado1");
        const boton1 = document.getElementById("boton1");
        let controlador1 = "controllers/subir-fichero.php";

        form1.addEventListener("submit", function(event){
            event.preventDefault();
            subirFichero1(form1, boton1, controlador1, divResultado1);
        });
    }

    if(b01)
    {
        b01.addEventListener("click", function(event){
            event.preventDefault();
            mostrarImagen();
        });
    }

    /*
    {
        b01.addEventListener("click", function(event){
            event.preventDefault();
            let caja1 = document.getElementById('caja1');
            let imagen = document.createElement('img');
            caja1.append(imagen);
            caja1.classList.add('col-3');
            imagen.src="images/foto4.jpg";
        });
    }*/

});