function ocultarTodo(){
    const pasos = document.querySelectorAll('.paso');
    pasos.forEach(p => p.classList.add('oculto'));
}

function avanzar(actual, siguiente, porcentaje){
    document.getElementById(actual).classList.add('oculto');
    document.getElementById(siguiente).classList.remove('oculto');
    actualizarBarra(porcentaje);
}

function actualizarBarra(p){
    const barra = document.getElementById("barra-progreso");

    barra.style.flexGrow = p / 100;
}


// Flujo de AUTO
function mostrarSiAuto(){
    window.tieneAuto = "Sí";
    ocultarTodo();
    document.getElementById("p5").classList.remove("oculto");
    actualizarBarra(40);
}

function mostrarNoAuto(){
    window.tieneAuto = "No";
    ocultarTodo();
    document.getElementById("p5b").classList.remove("oculto");
    actualizarBarra(40);
}

function mostrarSiAhorro(){
    window.intentoAhorro = "Sí";
    ocultarTodo();
    document.getElementById("p10").classList.remove("oculto");
    actualizarBarra(85);
}

function mostrarNoAhorro(){
    window.intentoAhorro = "No";
    ocultarTodo();
    document.getElementById("p10b").classList.remove("oculto");
    actualizarBarra(85);
}


function mostrarFinal(){
    ocultarTodo();
    document.getElementById("final").classList.remove("oculto");
    actualizarBarra(100);
}
const URL_SHEETS = "https://script.google.com/macros/s/AKfycbxK8ao-nX4qieMr5GL1qWWcyKR3iCnir_WhHr6DgWnepdKwar96RCyM-a0tq2_h0LGk/exec";

function enviarRespuestas(){

    const payload = {
        r1: document.getElementById("r1").value,
        r2: "respondido",
        r3: document.getElementById("r3").value,
        tieneAuto: window.tieneAuto || "No",
        si1: document.getElementById("r_si1")?.value || "",
        si2: document.getElementById("r_si2")?.value || "",
        si3: document.getElementById("r_si3")?.value || "",
        no1: document.getElementById("r_no1")?.value || "",
        no2: document.getElementById("r_no2")?.value || "",
        no3: document.getElementById("r_no3")?.value || "",
        r8: document.getElementById("r8").value,
        intentoAhorro: window.intentoAhorro || "No",
        ahorro1: document.getElementById("r_ahorro1")?.value || "",
        ahorro2: document.getElementById("r_ahorro2")?.value || "",
        r11: document.getElementById("r11").value,
        r12: document.getElementById("r12").value,
        r13: document.getElementById("r13").value
    };

    fetch(URL_SHEETS, {
        method: "POST",
        mode: "no-cors",               
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(() => {
        console.log("Solicitud enviada a Sheets");
    })
    .catch(err => console.error("Error:", err));
}


