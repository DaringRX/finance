let btn = document.querySelector('.fa-eye')
let nome = document.querySelector('#nome')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let confirmasenha = document.querySelector('#confirmasenha')
let labelNome = document.querySelector('#labelNome')
let labelUsuario = document.querySelector('#labelUsuario')
let labelSenha = document.querySelector('#labelSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let vfnome = false
let vfusuario = false
let vfsenha = false
let vfcsenha = false

//Funções

/*function cadastrar() {
    if(nome.value == '' || usuario.value == '' || senha.value == '' || confirmasenha.value == ''){
        alert('Preencha todos os campos');
        nome.focus();
        return false;
    }
}"" */

//Validações

nome.addEventListener('keyup', ()=>{
    if (nome.value.length <=7)
    {
        nome.setAttribute('style', 'border-color: red')
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Insira seu Nome e Sobrenome válido'
        vfnome = false

    } else {
        nome.setAttribute('style', 'border-color: green')
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome válido'
        vfnome = true

    }
})

usuario.addEventListener('keyup', ()=>{
    if (usuario.value.length <=4 || usuario.value.length >=13){
        usuario.setAttribute('style', 'border-color: red')
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Insira um usuario válido. "max 12 caracteres"'
        vfusuario = false

    } else {
        usuario.setAttribute('style', 'border-color: green')
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário válido.'
        vfusuario = true

    }
})

senha.addEventListener('keyup', ()=>{
    if (senha.value.length <=5 || senha.value.length >=17)
    {
        senha.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Insira uma senha válida.'
        vfsenha = false

    } else {
        senha.setAttribute('style', 'border-color: green')
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha válida.'
        vfsenha = true

    }
})

confirmasenha.addEventListener('keyup', ()=>{
    if (confirmasenha.value != senha.value)
    {
        confirmasenha.setAttribute('style', 'border-color: red')
        labelConfirmaSenha.setAttribute('style', 'color: red')
        labelConfirmaSenha.innerHTML = 'Insira seu Nome e Sobrenome'
        vfcsenha = false

    } else {
        confirmasenha.setAttribute('style', 'border-color: green')
        labelConfirmaSenha.setAttribute('style', 'color: green')
        labelConfirmaSenha.innerHTML = 'Nome'
        vfcsenha = true

    }
})

//Funções

function cadastrar(){
    if(vfnome && vfusuario && vfsenha && vfcsenha){
        let cadastros = JSON.parse(localStorage.getItem('cadastros') || '[]')

        cadastros.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('cadastros', JSON.stringify(cadastros))

        alert('Cadastrado com sucesso!')
        window.location.href = './index.html'


    } else{
        alert('Preencha todos os campos corretamente !')
    }
}


function entrar(){
    let cadastros = []
    let usuarioValidado = {
        nome: '',
        usuario: '',
        senha: ''
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
        
        usuario.setAttribute('style', 'border-color: green')
        labelUsuario.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        labelSenha.setAttribute('style', 'color: green')
        window.location.href = './index.html'

    } else{
        usuario.setAttribute('style', 'border-color: red')
        labelUsuario.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')

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

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confirmasenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }
})

