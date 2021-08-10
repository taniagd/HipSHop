$(document).ready(function () {

    $("#guardarinformacion").click(function () {
        let nombreperfil = $("#nombreperfil").val();
        let apellidos = $("#apellidos").value();
        let dia = $("#dia").value();
        let mes = $("#mes").val();
        let anio = $("#anio").val();
        let telefono = $("#telefono").val();
        let correo = $("#correo").val();
        let direccion = $("#direccion").val();
        let contrasena = $("#contrasena").val();

        let request = $.ajax({
            url: "http://localhost:8080/workshop",
            method: "POST",
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem("token"));
            },
            data: JSON.stringify({

                "firstName": nombreperfil,
                "lastName": apellidos,
                "address": direccion,
                "email": correo,
                "password": contrasena,
                "phoneNumber": telefono

            })
        });

        request.done(function (data) {
            swal("Genial", "Se actualizo tu informacion", "success");
        });
        request.fail(function (jqXHR, textStatus) {
                swal("No se ha guardado", "Rellena los campos obligatorios", "error");
            
        });

    })

});