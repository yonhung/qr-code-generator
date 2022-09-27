const url = document.getElementById("qr-url");
const qrImage = document.querySelector(".qr-image");
const qrForm = document.querySelector(".qr-form");

qrForm.addEventListener("submit",submitHandler);

function submitHandler(evnet) {
  qrImage.innerHTML="";
  qrImage.style.display="block"; 
  event.preventDefault();
  new QRCode(qrImage,{
    text:url.value,
    width:172,
    height:172,
    colorDark:"#ffffff",
    colorLight:"rgba(0,0,0,0)"
  });
}
