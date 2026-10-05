// ==============================
// MOSTRAR INFORMACIÓN DEL SERVICIO
// ==============================
function mostrarServicio(nombreServicio) {
    alert(
        "Has seleccionado: " +
        nombreServicio +
        "\n\nPara recibir más información, completa nuestro formulario de registro."
    );
}
// ==============================
// VALIDACIÓN DEL FORMULARIO
// ==============================
document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe directamente
    event.preventDefault();
    // Obtener los valores
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let servicio = document.getElementById("servicio").value;
    let mensaje = document.getElementById("mensaje");
    // ==============================
    // VALIDAR CAMPOS
    // ==============================
    if (nombre === "") {
        mensaje.innerHTML = "Por favor, ingrese sus nombres y apellidos.";
        mensaje.style.color = "red";
        return;
    }
    if (correo === "") {
        mensaje.innerHTML = "Por favor, ingrese su correo electrónico.";
        mensaje.style.color = "red";
        return;
    }
    if (telefono === "") {
        mensaje.innerHTML = "Por favor, ingrese su número de teléfono.";
        mensaje.style.color = "red";
        return;
    }
    if (servicio === "") {
        mensaje.innerHTML = "Por favor, seleccione un programa de interés.";
        mensaje.style.color = "red";
        return;
    }
    // ==============================
    // REGISTRO CORRECTO
    // ==============================
    mensaje.innerHTML =
        "¡Registro realizado correctamente! Gracias por completar el formulario.";

    mensaje.style.color = "green";
    // Limpiar formulario
    document.getElementById("formularioRegistro").reset();
})