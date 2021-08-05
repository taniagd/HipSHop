const divPrincipal = document.querySelector('.div-principal');
const imgVisa = document.querySelector('.img-visa');
const imgMaster = document.querySelector('.img-master');
const divImg = document.querySelector('.div-img');
const ccv = document.querySelector('.codigo-ccv');
const num = document.querySelector('.num-tarjeta');
const date = document.querySelector('.date');
const name = document.querySelector('.name');
const btnAceptar = document.querySelector('.btn-aceptar');


// Funcion para los eventos
evenListener();

function evenListener() {

    document.addEventListener('DOMContentLoaded', incial);

    num.addEventListener('keydown', numeroTarjeta);

    ccv.addEventListener('keydown', desabilitarCcv);

    name.addEventListener('keydown', nombre);

    btnAceptar.addEventListener('click', abrirMetodoPago);


    // date.addEventListener('keydown', fecha);

}
// Esta funcion es la primera que se ejecuta al cargar toda la pagina
function incial() {

    console.log("Que onda")
    name.disabled = true;
    date.disabled = true;
    ccv.disabled = true;
}

// Funcion para agregar tarjeta de credito
function abrirMetodoPago() {

    try {
        const divTarjeta = document.getElementById('b')
        const radioTdc = document.getElementById('tdc-checked');

        if(radioTdc.checked == true){

            
            divPrincipal.style.height = "650px";
            divTarjeta.style.visibility = "visible";
            
        }else{
            alert("Su pago será por Depósito")
        }


    } catch (error) {
        console.log(error)
    }


}

function numeroTarjeta() {

        
    if (num.value[0] == 4) {

        divImg.style.visibility = 'visible';
        imgVisa.style.visibility = 'visible';

    } else if (num.value[0] == 5) {
        divImg.style.visibility = 'visible';
        imgMaster.style.visibility = 'visible';

    }

    if (num.value == "") {

        divImg.style.visibility = 'hidden';
        imgVisa.style.visibility = 'hidden';
        divImg.style.visibility = 'hidden';
        imgMaster.style.visibility = 'hidden';

    }

    if (num.value.length == 15) {
        
        if(num.value[0] < 4 || num.value[0] > 5 ){
            alert("Tarjeta no valida, solo se aceptan las tarjetas Visa y MasterCard")
            num.value = ""
        }

        name.disabled = false;

    } else {

        name.disabled = true;
    }

    if (num.value.length > 15) {

        num.value = ""
    }



}

function desabilitarCcv() {

    if (ccv.value.length == 3) {

        ccv.setAttribute('disabled', 'disabled');
    }

}

function nombre() {

    if (name.value.length != "") {

        date.disabled = false;
        ccv.disabled = false;
    }

}