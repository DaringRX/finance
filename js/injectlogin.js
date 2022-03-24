let btn = document.querySelector('.fa-eye')




//Funções



function entrar(){
    let labelUsuario = document.querySelector('#labelUsuario')
    let labelSenha = document.querySelector('#labelSenha')
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha')
    let cadastros = []
    let usuarioValidado = {
        nome: '',
        usuario: '',
        senha: ''
    }

    if(usuario.value == '' || senha.value == ''){
        alert('Preencha todos os campos');
        usuario.focus();
        return false;
    }


    cadastros = JSON.parse(localStorage.getItem('cadastros'))

    cadastros.forEach(item => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            usuarioValidado = {
                nome: item.nomeCad,
                usuario: item.userCad,
                senha: item.senhaCad
            }
        }
    })
    if(usuario.value == usuarioValidado.usuario && senha.value == usuarioValidado.senha){
        
        /*if(usuario.value == '' || senha.value == ''){
            alert('Preencha todos os campos');
            usuario.focus();
            return false;
        }*/

        usuario.setAttribute('style', 'border-color: green')
        labelUsuario.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        labelSenha.setAttribute('style', 'color: green')

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        window.location.href = './logado.html'

    } else{
        usuario.setAttribute('style', 'border-color: red')
        labelUsuario.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        alert('Usuário ou Senha inválido !')

    }
    
}





//Visualizar senha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }
})