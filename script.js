const correctPassword = "2108";

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

    let mensaje = "Sí, lo vi";

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

            alert("ESTE ESTA EN PROCESO ES EL NUEVO DIFERENCIA EL NOMBRE DEL LINK");

        } else {

            alert("Error al enviar: " + datos.description);
        }

    } catch (error) {

        console.error("Error de conexión", error);

        alert("No se pudo enviar el mensaje");
    }
}