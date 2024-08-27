document.getElementById('encrypt-btn').addEventListener('click', encryptText);
document.getElementById('decrypt-btn').addEventListener('click', decryptText);
document.getElementById('copy-btn').addEventListener('click', copyText);


function encryptText() {
    let inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        displayOutput(encryptedText);
    } else {
        alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
    }
}

function decryptText() {
    let inputText = document.getElementById('input-text').value;
    if (validateInput(inputText)) {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        displayOutput(decryptedText);
    } else {
        alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
    }
}

function validateInput(text) {
    return /^[a-z\s]+$/.test(text);
}

function displayOutput(text) {
    document.querySelector('.imagen-de-espera').style.display = 'none';
    document.querySelector('.sin-mensaje').style.display = 'none'; 
    document.querySelector('.advertir-ingresar-texto').style.display = 'none'; 
    document.getElementById('output-text').textContent = text;
    document.getElementById('copy-btn').style.display = 'block';
}

function copyText() {
    let text = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado');
    });
}
