const url = document.getElementById('qr-url');
const qrImage = document.querySelector('.qr-image');
const qrForm = document.querySelector('.qr-form');
const descriptionText = document.getElementById('text');
const qrSaveButton = document.getElementById('qr-save-btn');
const state = {
  isGenerated: false,
  isReadyToSave: false,
};

qrForm.addEventListener('submit', submitHandler);
qrSaveButton.addEventListener('click', saveButtonHandler);
function submitHandler(e) {
  qrImage.innerHTML = '';
  qrImage.style.display = 'block';
  e.preventDefault();
  new QRCode(qrImage, {
    text: url.value,
    width: 172,
    height: 172,
    colorDark: '#ffffff',
    colorLight: 'rgba(0,0,0,0)',
  });
  if (!state.isGenerated) {
    descriptionText.textContent = 'Click save button to save your qr code';
    qrSaveButton.style.display = 'inline-block';
    setTimeout(saveQrCode, 50);
  }
}

function saveQrCode() {
  const url = qrImage.querySelector('img').src;
  if (url) {
    qrSaveButton.href = url;
    qrSaveButton.download = 'qrcode';
    state.isReadyToSave = true;
  } else {
    state.isReadyToSave = false;
  }
}

function saveButtonHandler(e) {
  if (!state.isReadyToSave) {
    e.preventDefault();
    console.log('fdsaf');
  }
}
