const botaoTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotao = document.querySelector(".imagem-botao");

botaoTema.addEventListener("click", () => {

    const modoEscurosAtivo = body.classList.contains("modo-escuro");

    if ((modoEscurosAtivo)) {
        body.classList.remove("modo-escuro");
        imagemBotao.setAttribute("src", "./src/img/sun.png");

    } else {
        body.classList.add("modo-escuro");
        imagemBotao.setAttribute("src", "./src/img/moon.png");
    }
});
