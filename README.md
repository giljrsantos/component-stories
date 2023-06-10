# PRJETO COMPONENTE STORIES - Angular

O componente stories é amplamente utilizado por diversos sites e aplicativos. Na minha opinião ele tem algumas semelhanças com o carrossel, que inclusive utilizei bastante no passado em conjunto com a lib jQuery.

Neste texto gostaria de compartilhar como podemos construir um componente stories simples, utilizando Angular e um pouco de HTML e CSS. Ao longo do texto também vou abordar alguns assuntos pontuais que podem ser úteis no cotidiano do desenvolvedor.

# Configurando o prettier:
 Nesse projeto foi configurado o `prettier`. Esta lib, prettier, ajuda a padronizar a formatação do código, é um ótimo recurso para criar um padrão consistente de formatação. Para iniciar sua configuração basta adicioná-la ao projeto utilizando o npm:
    
    - npm i prettier --save-dev

O `--save-dev` instala pacotes que serão usados ao longo de desenvolvimento, mas que não são usados para executar o projeto.

Após a instalação criei o arquivo .prettierrc na raiz do projeto (no mesmo nível do arquivo package.json) para indicar alguns padrões de formatação como quantidade máxima de caracteres em uma linha, tamanho da tabulação, entre outros.

```javascript
{
  "bracketSameLine": false,
  "bracketSpacing": true,
  "printWidth": 60,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```
Aqui vale uma dica, podemos criar um script dentro do package.json para formatar todos os arquivos desejados. Criei o script format para executar esta tarefa:

```json
{
    "ng": "ng",
    "format": "npx prettier --write \"src/**/*.ts\" \"src/**/*.css\" \"src/**/*.html\"",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  }
```
Executando o script: 

    - $ npm run format

## Agora todos os arquivo estão formatados 
    



# 📱 ScreenShot

<p align="center">
<img src="src\assets\img\screen-1.png" width="300">
<img src="src\assets\img\screen-2.png" width="300">
</p>
<p align="center">
<img src="src\assets\img\screen-3.png" width="300">
<img src="src\assets\img\screen-4.png" width="300">
</p>
<p align="center">
<img src="src\assets\img\screen-5.png" width="300">
<img src="src\assets\img\screen-6.png" width="300">
</p>
<p align="center">
<img src="src\assets\img\screen-7.png" width="100%">
</p>

<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>