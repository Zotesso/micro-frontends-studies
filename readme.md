O mais comum para nós é ter um sistema monolitico.
Antes o front era gerado pelo backend.
Hoje estamos no modelo onde backend separado frontend.
Os backends começaram a passar seu formato para microservices.
Segundo martin flower a maioria dos casos de sucesso de uso de microserviços vem de monolitos que se toranaram tão grandes para manter.
E no frontend também, temos fronts que são grandes demais, ai que entra o micro-front.

Alternativas pra microfronts (para separar responsabilidades):
 - Utilizar Links (pagseguro/paypal te redireciona);
 - Para casos em que os negócios tem que se conversar como financeiro pra um lado, biblioteca com outro, mas quando bilioteca e financeiro se entrelaçam é possíve utilizar iframes;
 - Encapsular as coisas com web components;
 - Server Side Rendering (Renderizar multiplos templates juntando tudo junto);

 ~ github.com/neuland/micro-frontends ~

 > Frameworks:
  - Single SPA
  - Frint Js
Ambos te trazem uma camada para criar aplicações
Não existe bala de prata.

 > Prós:
  Você abaixa o risco de se amarrar a uma tecnologia (E de quebra evita a sensação de que poxa, aqui a gente só trabalha com coisa velhas ~não é o caso da token~) e pode reescrever eles de formas independentes
  Liberdade para utilizar qual tecnologia faz mais sentido para tal parte especifica do sistema: por exemplo tal tela trabalha com machine learning posso utilizar python nela, javascript em outra porque faz mais sentido.
  Com menos código no mesmo lugar, menor a complexidade, mais facil é manter a qualidade.
  Deploys completamente independentes.

 > Contra:
 é necessario ter um styleguide, um design pro projeto todo, pra que não parecam coisas absurdamentes diferentes.
 O processo de segurança acaba ficando mais complicado
 Acaba tendo muita duplicação na estrutura dos projetos (tem que dar o jeito de arrumar isso)
 O ambiente de desenvolvimento acaba ficando mais complexo (ter que levantar 6 projetos diferentes pra utilizar algo)
 Logs ficam mais dificeis de ser trackeados
 Tem que começar a combor regra de negócio
 Testes E2E ficam bem complicados.

 A complexidade aumenta muito, se você não precisa, não faça;

 ----------------------------------------------------------------

 Fluxo da apresentação

 - Apresentação de Slides e introdução sobre o tópico
    - Prós e Contras
 - Pontos técnicos teóricos
 - Aplicação hands-on
 - Conclusão


 Martin Flower diz que: São fronts que tem de crescer de forma independente e tem de se integrar ao todo, para o cliente é 1 front só.
 Botar foto de um megazord.

 4 Abordagems possiveis:
 - iframes (um pouco antigo)
 - SSR (chaveando rotas usando o msm template)
 - javascript (tudo no mesmo dom)
 - webcomponents

 a unica coisa que eles expõe é o entryPoint um js, que tem todo o manifesto daquele modulo javascript.

 Outro pro: O sistema se bem feito se torna mais tolerante a falhas, e é mais fácil identificar e resolver os problemas, todo mundo sabe que sistemas monoliticos, que são aqueles que temos aqui gostam muito de dar pipoco sexta feira 5 da tarde, e quando isso ocorre geralmente o sistema inteiro sai do ar.
 Com microfronts apenas uma parte especifica vai sair do ar e o resto do sistema vai continuar funcionando se for bem feito e desacoplado.
 Claro que mesmo usando microfront se vc fizer um sistema ficar logicamente acoplado no outro, esse ponto positivo não vai contar.
 Exemplo:

Microfronts podem sim ser criados do 0, mas geralmente um front não é legal começar micro.
Ele padece do mesmo problema dos microserviços, é muito mais solido e confiavel pegar um monolito que cresceu demais, e passar ele pra um microserviço parte a parte, por que você já tem a arquitetura feita, você conhece o escopo do projeto, cada coisa que ele abranje.
Com um front monolitico também, você conhece o sistema sabe onde você pode começar decompondo-o, já começar o projeto como micro-front é bem facil você se perder na estrutura dos micro projetinhos.
-------------------------------------------------------------
 Usando o framework Single-SPA

> Baixar o single spa obvio 
npm install --global create-single-spa

> Rodar o create single-spa
npm create single-spa

Dentro do webpackconfig, ele faz dentro de defaultConfigs um reges dizendo que tudo que tem o organization Name, é exportavel para outros frontends.
