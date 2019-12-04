# Markdown Link
## Índice
* [1. Sobre](#1-sobre)
* [2. Instalação e uso](#2-instalação)
* [3. Roadmap](#3-roadmap)

## 1. Sobre
Essa biblioteca lê arquivos em linguagem de marcação *Markdown* e retorna as URLs dos links e seus respectivos textos.

- É instalavel pelo terminal;
- É executável na linha de comando;
- Pode ser importada e utilizado no código;
- Contém testes Jest 

### Funcionamento
Essa biblioteca utiliza o módulo [File System do Node.js](https://nodejs.org/api/fs.html) para ler o documento de interesse. Ao ler o arquivo, ela buscará [expressões regulares
(`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) para identificar e retornar as URLs e os respectivos textos em linguagem de marcação *Markdown*. 

As expressões regulares podem ser definidas a partir da sintaxe  do *Markdown*, que são brevemente descritas abaixo:

Há algumas maneiras para se criar um link nessa linguagem de marcação. Aqui, adotou-se o meio, no qual o texto linkado é escrito entre colchetes, seguida pela URL entre parenteses, conforme exemplo:
```
[Texto qualquer](URL)
```
Por exemplo:

`Acesse o [Google](www.google.com)`

é renderizado da seguinte forma: 

Acesse o [Google](www.google.com)

Assim, segue alguns exemplos que essa biblioteca identifica:
#### Exemplos de Links Reconhecíveis

Link Padrão: 
`[(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)`

Com dois links na mesma linha: `
[fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html)`

Com quebra de linha:`
[JavaScript assíncrono: callbacks, promises e async
  functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)`

Imagens, Links com títulos e alguns padrões similares **não** são incluídos:
```
[ ]

[1. Prefácio](#1-prefácio)

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")
```
## 2. Uso e instalação
### Instale pelo terminal
```sh
$ npm install -g moniyama/SAP003-md-links
```
### Uso
Essa biblioteca pode ser executada diretamente do terminal ou pode ser importada para o seu código.

**NO TERMINAL**

É possivel executar através do comando:
```sh
$ md-links <caminho-do-arquivo>
```
Por exemplo:
```sh
$ md-links ./some/example.md
```
E os resultados serão exibidos no próprio terminal

```
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
Se o texto linkado for longo, este será reduzido para 50 caracteres no máximo, para melhor visualização.

**NO CÓDIGO**

Outro modo de utilizar este módulo é importando com `require`, no qual o resultado será uma array contendo objetos com duas propriedades:

* `href`: URL
* `text`: Texto 

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```
## 3. Roadmap
Atualmente, essa biblioteca apenas identifica os links presentes no documento Markdown. Para versões futuras, deseja-se implementar a validação dos links.

