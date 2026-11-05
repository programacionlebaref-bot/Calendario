const inputFoto = document.getElementById('foto-evidencia');
const preview = document.getElementById('preview-foto');
const imgPreview = document.getElementById('img-preview');
const nombreFoto = document.getElementById('nombre-foto');

inputFoto.addEventListener('change', function() {
  const archivo = this.files[0];
  if (!archivo) return;
  nombreFoto.textContent = archivo.name;
  imgPreview.src = URL.createObjectURL(archivo);
  preview.hidden = false;
});

document.getElementById('quitar-foto').addEventListener('click', function() {
  inputFoto.value = '';
  preview.hidden = true;
});