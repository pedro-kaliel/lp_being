window.addEventListener("scroll", function(){
    var header= document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function cadastro(){
    var nome= form.nome;
    var email= form.email;
    var empresa= form.emp;

    if((nome.value=="")||(email.value)(empresa.value)){
        alert("preencha os campos obrigatórios"); 
    }else{
        alert("cadastro bem sucedido")
    }
}


