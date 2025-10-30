function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const entrada = document.getElementById('entrada').value;
  const saida = document.getElementById('saida').value;
  let resultado;

  if (entrada === saida) {
    resultado = valor;
  } else if (entrada === 'celsius' && saida === 'fahrenheit') {
    resultado = (valor * 9/5) + 32;
  } else if (entrada === 'fahrenheit' && saida === 'celsius') {
    resultado = (valor - 32) * 5/9;
  } else if (entrada === 'celsius' && saida === 'kelvin') {
    resultado = valor + 273.15;
  } else if (entrada === 'kelvin' && saida === 'celsius') {
    resultado = valor - 273.15;
  } else if (entrada === 'fahrenheit' && saida === 'kelvin') {
    resultado = ((valor - 32) * 5/9) + 273.15;
  } else if (entrada === 'kelvin' && saida === 'fahrenheit') {
    resultado = ((valor - 273.15) * 9/5) + 32;
  }

  document.getElementById('resultado').innerText =
    `Resultado: ${resultado.toFixed(2)} ${saida}`;
}