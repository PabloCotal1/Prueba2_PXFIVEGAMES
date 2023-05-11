$(document).ready(function () {
    $("form").submit(function (e) {
        // evita el envío del formulario por defecto
        e.preventDefault();
        // valida el campo Nombre Completo
        if ($("input[type='text']:eq(0)").val() == "") {
            alert("Por favor, ingrese su nombre completo.");
            return;
        }

        // valida el campo Email
        if ($("input[type='text']:eq(1)").val() == "") {
            alert("Por favor, ingrese su dirección de correo electrónico.");
            return;
        }

        // valida el campo Contraseña
        if ($("input[type='password']:eq(0)").val() == "") {
            alert("Por favor, ingrese una contraseña.");
            return;
        }

        // valida el campo Repetir Contraseña
        if ($("input[type='password']:eq(1)").val() == "") {
            alert("Por favor, repita la contraseña.");
            return;
        }

        // valida que las contraseñas coincidan
        if ($("input[type='password']:eq(0)").val() != $("input[type='password']:eq(1)").val()) {
            alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
            return;
        }

        // si todas las validaciones son exitosas, envía el formulario
        $("form").unbind("submit").submit();
    });
});