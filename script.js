function validacao () {
  return alert("Teste")
}

let btn = document.querySelector('button[type="button"]');
btn.addEventListener('click', event => {
  validacao();
});