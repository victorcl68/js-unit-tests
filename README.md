# Boas vindas ao repositório do projeto ES6 Testes Unitários!

# Habilidades

- Escrever testes unitários para funções utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções;
- A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
- Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes (TDD).

---

## O que foi desenvolvido

Funções para atender aos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas.

---

## Como iniciar o projeto

Para se utilizar do projeto é necessário executar as funções e testes contidos nas  respectivas pastas `src` e/ou `tests` em um ambiente de desenvolvimento de sua preferência que rode códigos em Javascript.

---

 # Funções e Testes (functions and tests):

  - 1 - Função `average`

  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes previamente implemetados para `average`.

  - 2 - Casos de teste para a função `numbers`

  A função previamente implementada `numbers` recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário, no arquivo `src/numbers.js`. Há testes que garantem que essa função tem um comportamento correto está correta.

  - 3 - Função `vqv`

  Há um função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

```javascript
`'Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`
```

  E Caso a função seja chamada sem nenhum parâmetro, o valor undefined será retornado. O arquivo `vqv.spec.js` já contém os testes previamente escritos para `vqv`.
  
  - 4 - Casos de teste para a função `circle`

  A função pré-estabelecida `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna `undefined`. Há os testes para essa função para garantir que a implementação de `circle` está correta.

  - 5 - Função `createStudent`

  A função `createStudent` recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
O arquivo `createStudent.spec.js` contém os testes para `createStudent` previamente implementados.

  - 6 - Casos de teste para a função `productDetails`

  A função pré-estabelecida `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

```javascript
productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
```

Há testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

  - 7 - Implemente a função `objCalculator`
  Há um objeto calculator que possui quatro chaves:
  - add;
  - mult;
  - div;
  - sub.

  Para cada uma delas há uma função que realiza a respectiva operação. A função recebe dois inteiros e retornar um inteiro. Os resultados das divisões devem sempre ser arredondados para baixo. O arquivo `objCalculator.spec.js` já contém os testes para `objCalculator` previamente implementados.

  - 8 - Função `myCounter`
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como se pode perceber, eles vão adicionando valores ao array até sua condição de parada. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados previamente.

  - 9 - Casos de teste e função `createMenu` _(Feito em TDD)_

  Há um código do sistema de pedidos de um restaurante. É possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema irá disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi previamente definida.

---
