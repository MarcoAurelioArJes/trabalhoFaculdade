function criarConta() {
    alert("Conta criada com sucesso!")
}

function EnviarEmail(){
    let nome = prompt("Informe seu nome")
    let email = prompt(`Agora ${nome}, nos informe seu e-mail`)
    let mensagem = prompt ("Escreva a mensagem que deseja enviar")
    
    let confirma = confirm(`Nome: ${nome}\n
                            Email: ${email}\n
                            Mensagem: ${mensagem}\n
                            As informações acima estão corretas ?`.replaceAll('    ', ''))
    
    if (confirma){
        alert("Email enviado com sucesso!!!")
    } else {
       alert("Tente enviar o e-mail novamente!!!")
    }   
}