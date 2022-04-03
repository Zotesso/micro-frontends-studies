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

 A complexidade aumenta muito, se você não precisa, não faça;