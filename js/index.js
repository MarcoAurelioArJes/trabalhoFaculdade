/**
 * Camilla JS
 */

function criarConta() {
    alert("Conta criada com sucesso!")
}

function tipoMeta() {
    var tipoMeta = document.getElementById('tipoMetas').value;
    if(tipoMeta == 'despesasGerais') {
        document.getElementById("campoCategoria").style.display = 'none';
    } else {
        document.getElementById("campoCategoria").style.display = 'block';
    }
}

function enviarFormulario(event) {
    // Prevenir o comportamento padrão do navegador
    event.preventDefault();
    alert('Meta cadastrada com sucesso!')
    
    return false;
  }

/**
 * Fim Camilla JS
 */
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

function alertaLogin(e) 
{
    let email = document.getElementById('inputEmailEntrar');
    alert("Fazer Login com o E-mail: " + email.value + " ?");
    e.preventDefault();
};  

