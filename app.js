document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmSaludo");
    form.addEventListener("submit", event=>{
        event.preventDefault();

        let nombre = document.querySelector("#txtNombre").Value;
        fetch(`localhost:8080/Programacion_4/saludo.php?nombre=${nombre}`)
        .then(resp=>resp.text())
        .then(respuesta=>{
          document.querySelector("#lblSaludo").innerHTML = respuesta;
        });
    });
   });