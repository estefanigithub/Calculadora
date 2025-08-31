function inserir(valor) {
  const display = document.getElementById("display");
  // Troca 'x' por '*' para multiplicação
  if (valor === "x") {
    display.value += "*";
  } else {
    display.value += valor;
  }
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  const display = document.getElementById("display");
  try {
    // Avalia a expressão do display
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Erro";
  }
}

function apagar() {
  const display = document.getElementById("display");
  const valorAnterior = display.value;
  const novoValor = display.value.slice(0, -1);
  display.value = novoValor;
}

function alternarCientifica() {
  const linha = document.getElementById("linha-cientifica");
  if (linha.style.display === "none") {
    linha.style.display = "";
  } else {
    linha.style.display = "none";
  }
}
function alternarCientifica() {
  const modal = document.getElementById("modalCientifico");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function fecharModal() {
  document.getElementById("modalCientifico").style.display = "none";
}
