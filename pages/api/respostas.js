// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const data = [

     {
       pergunta: 'Marque a afirmativa correta.',
       resposta: 'Se um método estático tentar acessar um outro método não estático da classe usando somente o nome do método, ocorrerá um erro de compilação.'
     },
     
     {
      pergunta: 'Analise o seguinte código de uma classe em java: public class Agua extends Bebida  ... private String ph;...  ',
      resposta: ' A palavra-chave "extends" informa que a classe "Agua” é uma extensão da classe "Bebida". '
    },
    
    {
      pergunta: 'São implementados para realizarem algum tipo de tarefa:',
      resposta: 'Métodos'
    },
    
    {
      pergunta: 'Marque a alternativa correta.',
      resposta: 'Uma variável estática representa informações em nível de classe.      '
    },
    {
      pergunta: 'Na orientação a objetos temos um importante conceito, que é a herança. Marque a alternativa que melhor define herança em orientação a objetos',
      resposta: 'A herança é um mecanismo para aprimorar as classes existentes'
    },
    {
      pergunta: "Membros declarados com esse modificador de acesso são acessíveis em subclasses da classe, em subclasses do mesmo pacote e na própria classe:",
      resposta: 'Protected'
    },
    {
      pergunta: 'Analise o seguinte código: [ public class Veiculo .... ]',
      resposta: 'As palavras-chave this em this.cor, this.placa e this.anoFrabricacao informam ao método que estamos nos referindo à variável de instância'
    },
    {
      pergunta: 'Analise o seguinte código e aponte a afirmativa INCORRETA : [ public class Aluno  , private String nome ]',
      resposta: 'Todos os atributos desta classe poderão ser acessados apenas por seus respectivos métodos'
    },
    {
      pergunta: 'Em relação ao encapsulamento, marque a afirmativa INCORRETA',
      resposta: 'Encapsular é deixar os métodos inacessíveis para os usuários da classe'
    },
    {
      pergunta: 'Em programação orientada a objetos, qual o papel da classe?',
      resposta: 'As classes são a fundação, na qual linguagens orientadas a objetos se estruturam'
    },
    {
      pergunta: 'Para encapsular um atributo, deixando-o visível apenas para a classe que o contém, utilizamos qual palavra-chave?',
      resposta: 'Private'
    },
    {
      pergunta: 'Sobre objetos, podemos afirmar que:',
      resposta: 'Um objeto é composto por estado e comportamento'
    },
    {
      pergunta: 'A declaração de uma variável de classe começa com qual palavra-chave ?',
      resposta: 'static'
    },
    {
      pergunta: 'Para um método de classe acessar membros de classe não estáticos, devemos:',
      resposta: 'Um método estático não pode acessar membros de classe não estáticos'
    },
    {
      pergunta: 'Em relação à herança podemos afirmar que:',
      resposta: 'Em herança possuímos classes genéricas e especializadas'
    },
    {
      pergunta: 'Quando identificamos a possibilidade de usar herança em nosso projeto?',
      resposta: 'Quando temos uma relação e um ou vários atributos em comum entre duas ou mais classes'
    },
    {
      pergunta: 'Em relação aos métodos estáticos ou de classes, marque a afirmativa correta.',
      resposta: 'Métodos estáticos são declarados colocando-se a palavra-chave static antes do tipo de retorno.'
    },
    {
      pergunta: 'Analise o código abaixo: [ public class Animal  ,  private int idAnima ,  private String nome]',
      resposta: 'Na estrutura implementada podemos afirmar que a classe "Homem" é subclasse; a classe "Mamifero" é subclasse e superclasse e a classe "Animal" é superclasse.'
    },
    {
      pergunta: 'Em relação à forma geral de uma classe, podemos afirmar:',
      resposta: 'Uma classe é criada com a palavra-chave class.      '
    },
    {
      pergunta: 'A unidade básica de encapsulamento, em Java, é:',
      resposta: 'Classe'
    }
  ]
const jsonDATA = JSON.stringify(data);  
  res.status(200).json(jsonDATA);
}
 
   // fetch('https://teste-eniac-2.vercel.app/api/respostas').then(response => response.json())
    // .then(data => console.log(data));