// criou a instância do controller
let controller = new NegociacaoController();

// associa o evento de submissao do formulario a chamada de metodo adicionar
document
    .querySelector('.form')
    .addEventListener('submit' , controller.adiciona.bind(controller));
