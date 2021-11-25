document.querySelector("#botaoEnviar").addEventListener("click", validarFormulario)
function validarFormulario() {

    if (
        document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" && 
        document.getElementById("validationTextara").valeu != ""
    ) {
        const nome = document.getElementById("nome")
         email = document.getElementById("email")
        var text = document.getElementById("validationTextara")

        alert("Prontinho! Você receberá um e-mail com os próximos passos.")
    } else {

        alert("Por favor, preencha os campos!")
    }
};