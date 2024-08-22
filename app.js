function encriptarTexto() {
    const textoOriginal = document.getElementById('inputTexto').value.toLowerCase();
    let textoEncriptado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        switch (letra) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += letra;
        }
    }

    document.getElementById('resultado').textContent = `Texto encriptado: ${textoEncriptado}`;
}


function desencriptarTexto() {
    const textoParaDesencriptar = document.getElementById('inputTexto').value.toLowerCase();
    let textoDesencriptado = '';

    // Realiza las conversiones inversas
    textoDesencriptado = textoParaDesencriptar
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        document.getElementById('resultado').textContent = `Texto desencriptado: ${textoDesencriptado}`;
    }
/*function desencriptarTexto() {
    const textoParaDesencriptar = document.getElementById('inputTexto').value.toLowerCase();
    let textoDesencriptado = '';

    for (let i = 0; i < textoParaDesencriptar.length; i++) {
        const palabra = textoParaDesencriptar.substring(i, i + 5);
        switch (palabra) {
            case 'enter':
                textoDesencriptado += 'e';
                break;
            case 'imes':
                textoDesencriptado += 'i';
                break;
            case 'ai':
                textoDesencriptado += 'a';
                break;
            case 'ober':
                textoDesencriptado += 'o';
                break;
            case 'ufat':
                textoDesencriptado += 'u';
                break;
            default:
                textoDesencriptado += textoParaDesencriptar[i];
        }
    }

    document.getElementById('resultado').textContent = `Texto desencriptado: ${textoDesencriptado}`;
}*/
function copiarResultado() {
    const resultado = document.getElementById('resultado').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = resultado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles: ' + resultado);
}