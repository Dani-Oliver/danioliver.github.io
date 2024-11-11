function armazenarValor(){

    //armazena valor que o usuário digitou
    var userInput = document.getElementById("userInput").value;

    //exibe o valor armazenado
    console.log("O valor da variavel é: " + userInput);

    //atualiza o conteúdo
    document.getElementById("valorInserido").innerText = "O valor inserido é: " + userInput;

}