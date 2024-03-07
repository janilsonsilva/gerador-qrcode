const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        genQRCode();
    }
});
// Ao apertar a tecla enter a função é chamada

function genQRCode(){
    if(!input.value) return;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${input.value}`;
}
// Função para gerar o QR Code. O link é atribuído no src do campo img 
// Usa-se o valor do input como parâmetro neste link para gerar o QR Code dele

// document.getElementById('baixarQR').addEventListener('click',
//     function(){
//         var imagem = document.getElementById("qrcode");
//         var url = imagem.src.replace(/^data:image\/[^;]/,'data:application/octet-stream');
//         this.href = url;
//         this.download = 'imagem.jpg';
//     }
// );

function baixarImagem() {
    const img = document.getElementById("qrcode");
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "QRCode.png";
    link.click();
  }