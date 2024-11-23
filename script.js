
function calcularComissao() {

  const funcao = document.getElementById("funcao").value;
  const tipo = document.getElementById("tipo").value;


  const cubagem = parseFloat(document.getElementById("cubagem").value);
  const quantidadeCliente = parseFloat(document.getElementById("quantidadeCliente").value);

  let valorFixoCubo;
  let valorFixoCli;


  if (funcao === "motorista" && tipo === "padrao") {
    valorFixoCubo = 0.03348;
    valorFixoCli = 0.46332;  
  } else if (funcao === "motorista" && tipo === "alta") {
    valorFixoCubo = 0.05184;
    valorFixoCli = 0.70740; 
  } else if (funcao === "auxiliar" && tipo === "padrao") {
    valorFixoCubo = 0.01188;
    valorFixoCli = 0.16200; 
  } else if (funcao === "auxiliar" && tipo === "alta") {
    valorFixoCubo = 0.02268;
    valorFixoCli = 0.30672; 
  }

  
  if (isNaN(valorFixoCubo) || isNaN(valorFixoCli)) {
    document.getElementById("resultado").innerHTML = "Selecione uma função e um tipo válidos.";
    return;
  }

  
  const resultado = (cubagem * valorFixoCubo) + (quantidadeCliente * valorFixoCli);

  
  const resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  
  document.getElementById("resultado").innerHTML = `Resultado: ${resultadoFormatado}`;

}

