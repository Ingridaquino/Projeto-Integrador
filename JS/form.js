document.querySelector("#botaoEnviar").addEventListener("click", validarFormulario)
function validarFormulario() {
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const text = document.getElementById("validationTextarea")
    
    if (
        document.getElementById("nome").value != "" &&
        document.getElementById("email").value != "" && 
        document.getElementById("validationTextarea").valeu != ""
    ) {
        // const nome = document.getElementById("nome")
        // const email = document.getElementById("email")
        // const text = document.getElementById("validationTextara")
        alert("Prontinho! Você receberá um e-mail com os próximos passos.")
        
        return;
    } else {

        alert("Por favor, preencha os campos!")

        return;
    }
};


// ///
// let swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
