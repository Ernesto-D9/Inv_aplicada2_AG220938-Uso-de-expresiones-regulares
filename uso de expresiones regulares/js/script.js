const inputNombre = document.getElementById("idTxtNombre");
const inputMail = document.getElementById("idTxtMail");
const inputTelefono = document.getElementById("idTxtTelefono");
const btnEnviar = document.getElementById("idBtnEnviar");

const regExpNombre = /^[a-zA-Z]+(?:\s[A-Za-z]+)+$/;
const regExpMail = /^[\w.-]+@[\w.-]+\.\w+$/;
const regExpTelefono = /^\d{8}$/;

const valido = "is-valid";
const invalido = "is-invalid";

 inputNombre.addEventListener("input", function(){
        let nombre = (inputNombre.value);
        if(regExpNombre.test(inputNombre.value))
        {
             inputNombre.classList.add(valido);
             inputNombre.classList.remove(invalido); 
        }else{
            inputNombre.classList.add(invalido);
            inputNombre.classList.remove(valido); 
        }
    })

inputMail.addEventListener("input", function(){
    let correo = (inputMail.value);
    if(regExpMail.test(inputMail.value))
    {
            inputMail.classList.add(valido);
            inputMail.classList.remove(invalido); 
    }else{
        inputMail.classList.add(invalido);
        inputMail.classList.remove(valido); 
    }
})
inputTelefono.addEventListener("input", function(){
    let telefono = (inputTelefono.value);
    if(regExpTelefono.test(inputTelefono.value))
    {
            inputTelefono.classList.add(valido);
            inputTelefono.classList.remove(invalido); 
    }else{
        inputTelefono.classList.add(invalido);
        inputTelefono.classList.remove(valido); 
    }
})

function validarCampos()
{
    let nombre = inputNombre.value;
    let mail = inputMail.value;
    let telefono = inputTelefono.value;
    if(nombre === "" || mail === "" || telefono === "")
    {
        alert("Faltan campos por completar");
        return;
    }else{
        alert("Formulario enviado con exito!");
        limpiarCampos();
    }
}

function limpiarCampos()
{
    inputNombre.value = "";
    inputMail.value = "";
    inputTelefono.value = "";
}

btnEnviar.onclick = () => {
        validarCampos();
}