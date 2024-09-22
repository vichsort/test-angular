# A Aplicação
Isso é um aplicativo desenvolvido para teste do framework 'angular' e usa os pacotes da CLI do Angular (você pode ver mais [aqui](https://angular.dev/tools/cli)). Eu estou usando este framework por tres principais motivos:
- Web Components
- Typescript nativo 
- Sass nativo
São compilados automaticamente pelo framework e podem ser usados para desenvolver os componentes de forma que formem uma árvore na aplicação. Volto a dizer que é apenas um teste simples que não pretende ser muito grande --- apenas uma página estática com componentes no DOM. 

# Instalação
Primeiramente, eu inicio com o node e usando o comando
```bash
npm init -y
```
para criar um arquivo vazio de 'package.json'. Logo em seguida, usamos 
```bash
npm install -g @angular/cli
```
para baixar o angular globalmente. Isso faz com que os pacotes estejam inclusos dentro do projeto que iremos criar agora:
```bash
ng new test-app
```
que criará uma aplicação. Essa será a qual iremos manipular. Depois de um tempo, se espera que uma árvore seja criada contendo muitas pastas e arquivos. Nela, eu seleciono que gostaria de usar SCSS como ferramenta de estilo --- mas isso é algo opcional, de minha preferência.

## Organização
Depois desta instalação, iremos organizar os componentes (que estão disponíveis em src/app). Para deixar os componentes que irão compor o aplicativo, deixamos todos eles inseridos dentro de 'app/components/*' (onde * representa a pasta com o nome do componente). O componente externo representará o arquivo pai que chamará os outros. Ou seja, 'app.components' é o pai e 'app.footer' é o filho.<br>
Vale lembrar que precisamos importar todos os arquivos que serão usados, o que significa que precisamos adaptar todos os arquivos para suportar a vinda dos arquivos filho. Supondo que teremos dois componentes em 'src/app/components' sendo 'footer' e 'nav'. 

### O componente pai
O componente pai é aquele que agrupa todos os outros componentes. Acima deste, nenhum outro pode ser definido. Seu papel é ser a renderização global de estilos, hipermarcação e interatividade. Definiremos o componente e o router - além de chamar os outros componentes.
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppFooter } from './components/footer/app.footer';
import { AppNav } from './components/nav/app.nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppFooter,
    AppNav
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
```
Como podemos ver, importamos 'AppFooter' e 'AppNav' que são os componentes filho logo abaixo na árvore genealógica da aplicação. Depois de inserirmos o nome que ele possuirá (para a chamada no HTML), chamamos uma Array com todas as importações. Nesse caso, contendo o router que permite navegação de um viewport para outro e os elementos filho. Também definimos o arquivo HTML e SCSS.


### Os componentes filho
Dentro desses componentes, precisamos inserir um arquivo de extensão typescript. O exemplo aqui é de 'footer'.
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './app.footer.html',
  styleUrl: './app.footer.scss'
})
export class AppFooter {
    
}
```
Veja que importamos somente o componente que permitirá usarmos esse recurso, porém, o 'router' não é necessário. Em seguida definimos o componente, que terá seu nome, standalone e imports próprios. Vale lembrar que esse componente também pode ter um componente filho e assim por diante apenas inserindo-os no Array de imports. Em seguida, define-se o HTML e SCSS base (eu aqui selecionei scss na produção do projeto, mas a extensão pode ser .css ou até outras extensões de estilo).