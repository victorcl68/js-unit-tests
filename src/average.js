const average = (array) => {
  let soma = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
    soma += array[index];
  }
  return Math.round(soma / (array.length));
};
// Não conseguia resolver a função mas ao ver a resolução no Github do Thiago Felipe, consegui corrigir os pequenos erros do meu código;

module.exports = average;
