const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');


document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});
const correctPassword = "11092108";

const display = document.getElementById("inputDisplay");

let input = "";

function enterDigit(digit) {

  if (input.length < 4) {
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

    let token = "8949587131:AAHnPRgkjXg5vhq5NVj8uOkwXmgVm3-cKSI";
    let chatId = "6033739963";

    let mensaje = "Sí,VENDRA YHOEL";

    let url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {

        let respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                chat_id: chatId,
                text: mensaje,
            }),
        });

        let datos = await respuesta.json();

        if (datos.ok) {

            alert("GRACIAS POR TU RESPUESTA :)");

        } else {

            alert("Error al enviar: " + datos.description);
        }

    } catch (error) {

        console.error("Error de conexión", error);

        alert("No se pudo enviar el mensaje");
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



