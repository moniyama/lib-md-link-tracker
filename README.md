# Markdown Link


## Índice
* [1. Sobre](#1-sobre)
* [2. Instalação e uso](#2-instalação)
* [3. Roadmap](#3-roadmap)


## 1. Sobre
Essa biblioteca lê arquivos com linguagem [Markdown](https://pt.wikipedia.org/wiki/Markdown) e retorna os links contidos no arquivo. 

### Funcionamento
Na linguagem Markdown, para criar um link, o texto linkado é escrito entre colchetes e a URL entre parenteses, logo em seguida, conforme exemplo:
```
Visite o [Google](www.google.com)
```
Sendo renderizado da seguinte forma: 

  Visite o [Google](www.google.com)

Assim, essa biblioteca lê o documento e busca elementos com a mesma sintaxe, através de [expressões regulares
(`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

### Backlog do produto
* Texto com limitação de 50 caracteres
*

#### Exemplos de Links Reconhecíveis

Link Padrão: 
`[(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)`

Com dois links na mesma linha: `
[fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html)`

Com quebra de linha:`
[JavaScript assíncrono: callbacks, promises e async
  functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)`

## 2. Instalação e Uso
### Instale pelo terminal
```sh
$ npm install -g moniyama/SAP003-md-links
```
### Uso
Através do terminal, é possivel executar através do comando:
```sh
$ md-links <caminho do arquivo>
```
Por exemplo:
```sh
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
Outro modo de utilizar este módulo é importando com `require`:
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












[Markdown](https://pt.wikipedia.org/wiki/Markdown) � uma linguagem de marca��o
muito popular entre os programadores. � usada em muitas plataformas que
manipulam texto (GitHub, f�rum, blogs e etc), e � muito comum encontrar arquivos
com este formato em qualquer reposit�rio (come�ando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente cont�m _links_ que muitas vezes est�o
quebrados, ou que j� n�o s�o v�lidos e isso prejudica muito o valor da
informa��o que est� ali.

Uma comunidade open source nos prop�s criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estat�sticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumo do projeto

[Node.js](https://nodejs.org/pt-br/) � um ambiente de execu��o para JavaScript
constru�do com o [motor de JavaScript V8 do
[Chrome](https://developers.google.com/v8/). Ele vai nos permitir executar o
JavaScript no nosso sistema operacional, seja no seu computador ou em um
servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
redes e etc.

Neste projeto vamos ficar um pouco longe do navegador para construir um programa
que seja executado com Node.js, onde iremos aprender sobre como interagir com
sistemas de arquivos e com o ambiente onde � executado o node (_process_, _env_,
_stdin/stdout/stderr_), ...

Este projeto voc� criar� uma ferramenta de linha de comando (CLI) assim como a
sua pr�pria biblioteca (library) em JavaScript.

## 3. Objetivos de aprendizagem

Desenvolver sua pr�pria biblioteca � uma experi�ncia fundamental para qualquer
desenvolvedora, pois te obriga a pensar na interface (API) dos seus _m�dulos_ e
como ela ser� usada por outras desenvolvedoras. Voc� deve levar em conta as
peculiaridades da linguagem, conven��es e boas pr�ticas.

A seguir voc� pode conferir os objetivos de aprendizagem deste projeto:

### Javascript

* [ ] Uso de callbacks
* [ ] Consumo de Promises
* [ ] Cria��o de uma Promise
* [ ] M�dulos de JS (CommonJS vs ES Modules)

### Node

* [ ] Sistema de arquivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] cria��o de m�dulos [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] Instalar e usar m�dulos ([npm](https://www.npmjs.com/))
* [ ] [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] CLI (Command Line Interface - Interface de Linha de Comando)
* [ ] [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)

### Testing

* [ ] Testar suas fun��es
* [ ] Teste ass�ncrono
* [ ] Usar biblioteca de mock
* [ ] Mock manual
* [ ] Teste para m�ltiplos sistemas operacionais

### Git e Github

* [ ] Organiza��o no Github

### Boas pr�ticas de desenvolvimento

* [ ] Modulariza��o
* [ ] Nomenclatura / Sem�ntica
* [ ] Linting

***

## 4. Considera��es gerais

* Este projeto deve ser feito individualmente.

* A biblioteca e script execut�vel (ferramenta de linha de comando - CLI) devem
  ser implementados em JavaScript para serem executadas com Node.JS. **� permitido
  usar bibliotecas externas**.

* O seu m�dulo deve ser instal�vel via `npm install <github-user>/md-links`. O
  m�dulo deve incluir um _execut�vel_ que pode ser chamado tanto por linha de
  comando, quanto importado com `require` para ser usado em seu c�digo.

* Os testes unit�rios devem cobrir no m�nimo 99,9% dos _statements_, _functions_,
  _lines_ e _branches_. Recomendamos que explore o [Jest](https://jestjs.io/)
  para as suas provas unit�rias.

* Neste projeto n�o � permitido utilizar `async/await`.

## 5. Crit�rios de aceita��o m�nimos do projeto

Para come�ar este projeto voc� dever� fazer um _fork_ e _clonar_ este
reposit�rio.


### Arquivos do projeto

* `README.md` com descri��o do m�dulo, instru��es de instala��o e uso,
  documenta��o da API e exemplos. Tudo que for relevante para qualquer
  desenvolvedora saber como utilizar a sua biblioteca sem inconvenientes.
* `package.json` deve possuir o nome, vers�o, descri��o, autor, licen�a,
  depend�ncias e scripts (eslint e test).
* `package-lock.json` arquivo gerado pelo npm, para controle dos pacotes
  instalados
* `.eslintrc` com a configura��o para o linter. Este arquivo n�o deve ser
  alterado.
* `.gitignore` para ignorar o `node_modules` e outras pastas que n�o deve ser
  inclu�das no controle de vers�o (`git`).
* `cli.js` este arquivo deve chamar a fun��o `mdLinks` que ser� executada pela
  linha de comando.
* `lib/index.js` cria��o e exporta��o da fun��o `mdLinks`.
* `lib/__test__/index.spec.js` deve conter os testes unit�rios para a fun��o
  `mdLinks`.

### JavaScript API

O m�dulo deve poder ser importado em outros scripts Node.js e deve oferecer a
seguinte interface:

#### `mdLinks(path)`

##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada �
  relativa, deve resolver como sendo relativa ao diret�rio onde foi chamada -
  _current working directory_

##### Valor de retorno

A fun��o deve retornar uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.

#### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interface de Linha de Comando)

O execut�vel da nossa aplica��o deve poder ser executado da seguinte maneira,
atrav�s do terminal:

`md-links <path-to-file> [options]`

Por exemplo:

```
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```

O comportamento padr�o n�o deve validar se as URLs responde ok ou n�o, somente
deve identificar o arquivo markdown (a partir da rota que recebeu como
argumento), analisar o arquivo Markdown e imprimir os links que v�o sendo
encontrados, junto com a rota do arquivo onde aparece e o texto que tem dentro
do link (truncado 50 caracteres).


#### Hacker Edition

##### Argumentos

Adicionar o argumento `option`, dentro da fun��o `mdLinks(path, option)`

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada �
  relativa, deve resolver como sendo relativa ao diret�rio onde foi chamada -
  _current working directory_
* `option`: Um objeto com a seguinte propriedade:
  - `validate`: Um booleano que determina se deseja validar os links
    encontrados.

##### Valor de retorno

Voc� deve adicionar o _status_ da requisi��o dentro do objeto da resposta de
cada url encontrada.

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.
* `status`: Status da requisi��o.

##### Exemplo

```js
const mdLinks = require("md-links");

mdLinks("/some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, status }]
  })
  .catch(console.error);
```

##### CLI `--validate`

Se passamos a op��o `--validate`, o m�dulo deve fazer uma requisi��o HTTP para
verificar se o link funciona ou n�o. Se o link resultar em um redirecionamento a
uma URL que responde ok, ent�o consideraremos o link como ok.

Por exemplo:

```sh
$ md-links ./some/example.md --validate
http://algo.com/2/3/ 200 Link de algo
https://outra-coisa-.net/algum-doc.html 404 algum doc
http://google.com/ 301 Google
```

## 6. Entreg�veis

O m�dulo deve ser instal�vel via `npm install <github-user>/md-links`. Este
m�dulo deve incluir um execut�vel que pode ser chamado tanto por linha de
comando, quanto importado com `require` para us�-lo no seu c�digo.

## 7. Guias, dicas e leituras complementares

### FAQs

#### Como fa�o para que o meu m�dulo seja instal�vel pelo GitHub?

Para que o m�dulo seja instal�vel pelo GitHub voc� tem que:

* Deixar o seu repo p�blico
* Ter um `package.json` v�lido

Com o comando `npm install <githubname>/<reponame>` podemos instalar diretamente
pelo GitHub. Ver [docs oficiais dp `npm install`
aqui](https://docs.npmjs.com/cli/install)

Por exemplo, o
[`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser) que �
usado para o curr�culo n�o est� publicado nos registros p�blicos do NPM, com
isso temos que instalar diretamente desde o GitHub com o commando `npm install
Laboratoria/curriculum-parser`.

### Sugest�es de implementa��o

A implementa��o deste projeto tem v�rias partes: ler do sistema de arquivos,
receber argumento atrav�s da linha de comando, analisar um teste, fazer
consultas HTTP, ... e tudo isso pode ser feito de muitas formas, tanto com
bibliotecas quanto com JS puro.

Para esse projeto recomendamos o uso de [express�es regulares
(`RegExp`)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

### Tutoriais / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Outros recursos

* [Sobre Node.js - Documenta��o oficial](https://nodejs.org/pt-br/about/)
* [Node.js file system - Documenta��o oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documenta��o
  oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://pt.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? -
  freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [Node.js � O que �, como funciona e quais as
  vantagens](https://www.opus-software.com.br/node-js/)
* [O que � npm](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
* [M�dulos, librer�as, paquetes, frameworks... �cu�l es la
  diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [JavaScript ass�ncrono: callbacks, promises e async
  functions](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar
  package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Criando um m�dulo
  Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Ler um
  arquivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Ler um
  diret�rio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Criando sua CLI com
  Node.js](https://medium.com/henriquekuwai/criando-sua-cli-com-node-js-d6dee7d03110)

## 8. Checklist

### General

* [ ] Poder instalar via `npm install -g <github-user>/md-links`

### `README.md`

* [ ] Um board com o backlog com as implementa��es da sua biblioteca
* [ ] Documenta��o t�cnica da sua biblioteca
* [ ] Guia de uso e instala��o da biblioteca

### API `mdLinks(path)`

* [ ] O m�dulo exporta uma fun��o com a interface (API) esperada
* [ ] Implementa suporte para arquivo individual

### CLI

* [ ] Possuir o execut�vel `md-links` no path (configurado no `package.json`)
* [ ] Executar sem erros e ter o resultado esperado

### Testes

* [ ] Os testes unit�rios devem cobrir no m�nimo 99,9% dos statements, functions,
  lines e branches.
* [ ] Rodar os tests e linter (`npm test`).