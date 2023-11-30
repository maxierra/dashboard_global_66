document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var correo = document.getElementById("correo").value;
        var contrasena = document.getElementById("contrasena").value;

        var nombreUsuario;
        if (correo === "maximiliano.erramouspe@bizland.tech") {
            nombreUsuario = "Maximiliano Erramouspe";
        } else if (correo === "tomas.acosta@bizland.tech") {
            nombreUsuario = "Tomas Acosta";
        } else if (correo === "claudio.nahoum@bizland.tech") {
            nombreUsuario = "Claudio Nahoum";
        } else {
            nombreUsuario = "Usuario Desconocido";
        }

        if (correo === "maximiliano.erramouspe@bizland.tech" && contrasena === "Q1jPGIPttGgyiBZc") {
            window.location.href = "principal.html";
        } else if (correo === "tomas.acosta@bizland.tech" && contrasena === "356kuljGk2vA60g8") {
            window.location.href = "principal.html";
        } else if (correo === "claudio.nahoum@bizland.tech" && contrasena === "Ffkt7FNX4v8u6Sld") {
            window.location.href = "principal.html";
        } else {
            document.getElementById("mensaje-error").textContent = "Disculpa, pero no tienes acceso al sitio.";
        }
    });
});
