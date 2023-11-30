function guardarInformacion() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var género = document.getElementById("género").value;

    // Guardar la información en el localStorage
    localStorage.setItem("nombres", nombres);
    localStorage.setItem("apellidos", apellidos);
    localStorage.setItem("correo", correo);
    localStorage.setItem("contraseña", contraseña);
    localStorage.setItem("género", género);

    alert("¡Registro exitoso!");
  }