
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
    })
  });
})();

function calcular() {
  const salarioTotal = document.getElementById("idquestion1");
  const jornadaDeTrabalho = document.getElementById("idquestion2");
  const horasExtrasTotais = document.getElementById("idquestion3");
  const domingosEFeriados = document.getElementById("idquestion4");
  const resultadoFinal = document.getElementById("resultado");
  const resultadoFinalExtra = document.getElementById("resultadoextra");

  if (!dadosValidos(salarioTotal, jornadaDeTrabalho, horasExtrasTotais, domingosEFeriados)) {
    alert("Erro, verifique as informações ingressadas");
    return;
  }


  var precoHora = calcularPrecoHora(salarioTotal.value, jornadaDeTrabalho.value);
  var horasExtra = calcularHorasExtras(horasExtrasTotais.value, domingosEFeriados.value, precoHora);
  var horasExtraCem = calcularExtrasCem(domingosEFeriados.value, precoHora);

  var resultado = parseFloat(salarioTotal.value) + horasExtra + horasExtraCem;

  var resultadoExtra = parseFloat(resultado - salarioTotal.value);

  console.log(resultado);

  resultadoFinal.innerHTML = "R$" + resultado.toFixed(2);
  resultadoFinalExtra.innerHTML = "R$" + resultadoExtra.toFixed(2);
}

function calcularPrecoHora(salarioTotal, jornadaDeTrabalho) {
  return salarioTotal / jornadaDeTrabalho; 
}


/*Preço da hora extra 50% total trabalhada*/

function calcularHorasExtras(horasExtrasTotais, domingosEFeriados, precoHora) {
  return (horasExtrasTotais - domingosEFeriados) * 1.5 * precoHora;
}

/* Preço da hora domingo e feriado total */

function calcularExtrasCem(domingosEFeriados, precoHora) {
  return domingosEFeriados * 2 * precoHora;
}

function dadosValidos(salarioTotal, jornadaDeTrabalho, horasExtrasTotais, domingosEFeriados) {
  if (jornadaDeTrabalho.value == 0) {
    return false;
  }

  return true;

}

