document.getElementById("botaoenviar").addEventListener("click", validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){

    alert("Pronto! você receberá as novidades por email!")
  
  }else{
    alert("Por favor, preencha os campos Nome, Email e Telefone!") 
  }
}