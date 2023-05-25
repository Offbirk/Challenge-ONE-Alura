const $ = (s) => document.querySelector(s);

const $ta = $("#contenedor");
const $a = $(".encriptar");
const $h = $(".desencriptar");
const $e = $(".resultado");
const $w = $(".anuncio");
let buttonClicked = false;

let value;

const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function convertir() {
    $ta.value = $ta.value.toLowerCase();
}

function encriptar(t) {
    return t.replace(/[eiaou]/g, (k) => llaves[k]);
}

function desencriptar(t) {
    return t.replace(/(enter|imes|ai|ober|ufat)/g, (k) => {
        for (let c in llaves) {
            if (llaves[c] === k) return c;
        }
    });
}

const imagen = document.querySelector(".mensaje");

$ta.addEventListener("input", (a) => {
    value = $ta.value;
    if (value === '') {
        imagen.style.display = 'block';
    } else {
        imagen.style.display = 'none';
    }
});

$ta.addEventListener("blur", () => {
    if (!buttonClicked) {
        const value = $ta.value;
        const patron = /^[a-zñ\s]+$/;
        if (!patron.test(value)) {
            Swal.fire({
                title: 'Escribe solo letras minusculas y sin acentos',
                icon: 'warning',
                showConfirmButton: false
            });
        }
    }
    buttonClicked = false;
});

$a.addEventListener("click", () => {
    const value = $ta.value;
    $e.innerText = encriptar(value);
    if (!value) return;
    if (validarTexto(value)) return

    $ta.focus();
    Swal.fire({
        title: 'Escribe solo letra minusculas y sin acentos',
        icon: 'warning',
        showConfirmButton: false
    })
});

$h.addEventListener("click", () => {
    $e.innerText = desencriptar(value);
});

//función que permite copiar
document.querySelector(".copiar").addEventListener('click', () => {
    let copyText = $e.innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
        Swal.fire({
            title: "Mensaje copiado!!",
            icon: "success"
        });
    });
    $e.innerHTML = "";
    $ta.value = "";
    imagen.style.display = 'block';
});

//Este código permite escribir en tiempo real sobre el textarea
var contenedor = document.getElementById('contenedor');
contenedor.addEventListener("input", textModified);

function textModified() {
    var resultado = document.getElementsByClassName('resultado')[0];
    resultado.innerHTML = contenedor.value;
}