function progressScrtip() {
  const progresso = document.querySelector(".progresso");
  const voltarBtn = document.querySelector("#voltar");
  const avancarBtn = document.querySelector("#avancar");

  let progress = 0;

  function update() {
    progresso.style.width = progress + "%";
  }

  function proximo() {
    progress += 10;
    if (progress > 100) progress = 100;
    update();
  }

  function voltar() {
    progress -= 10;
    if (progress <= 0) progress = 0;
    update();
  }

  avancarBtn.addEventListener("click", proximo);
  voltarBtn.addEventListener("click", voltar);
}
progressScrtip();
