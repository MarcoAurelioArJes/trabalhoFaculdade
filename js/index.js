function criarConta() {
    alert("Conta criada com sucesso!")
}


// Alert Login
{
    function alertaLogin(e) 
    {
        let email = document.getElementById('inputEmailEntrar');
        alert("Fazer Login com o E-mail: " + email.value + " ?");
        e.preventDefault();
    };  
};