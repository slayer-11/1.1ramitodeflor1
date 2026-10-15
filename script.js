const correctPassword = "2108";

const display = document.getElementById("inputDisplay");

let input = "";

function enterDigit(digit) {

  if (input.length <4 ) {
    input += digit;
  }

  display.textContent = input.padEnd(4, "•");

  if (input.length === 4) {

    if (input === correctPassword) {

      window.location.href = "princi.html";

    } else {

      alert("Contraseña incorrecta, intenta de nuevo");

      input = "";
      display.textContent = "••••";
    }
  }
}
async function enviarMensaje() {
    const token = "8949587131:AAHnPRgkjXg5vhq5NVj8uOkwXmgVm3-cKSI";
    const chatId = "6033739963";
    const mensaje = "INDEX INCIO";

    const boton = document.querySelector(".botones");
    boton.disabled = true;

    try {
        const respuesta = await fetch(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: mensaje
                })
            }
        );

        const datos = await respuesta.json();

        if (respuesta.ok && datos.ok) {
            window.location.href = "siguiente.html";
        } else {
            alert("No se pudo enviar el mensaje: " +
                  (datos.description || "Error desconocido"));
            boton.disabled = false;
        }
    } catch (error) {
        console.error(error);
        alert("Error de conexión. No se pudo confirmar el envío.");
        boton.disabled = false;
    }
}
/* REEMPLAZA TODO TU script.js POR ESTE */

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const lines = document.querySelectorAll(".line");

const lyricsContainer = document.getElementById("lyrics");

let playing = false;

/* BOTÓN */

playBtn.addEventListener("click", () => {

    if(!playing){

        audio.play();

        playBtn.innerHTML = "⏸ Pausar";

        playing = true;

    }else{

        audio.pause();

        playBtn.innerHTML = "▶ Reproducir";

        playing = false;
    }

});

/* SINCRONIZAR LETRAS + AUTO SCROLL */

audio.addEventListener("timeupdate", () => {

    const currentTime = audio.currentTime;

    lines.forEach(line => {

        const time = Number(line.getAttribute("data-time"));

        if(currentTime >= time){

            // quitar active
            lines.forEach(l => l.classList.remove("active"));

            // activar actual
            line.classList.add("active");

            // mover automáticamente hacia abajo
            line.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }

    });

});

