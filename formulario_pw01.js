function clean() {
    document.getElementById("cNome").innerHTML = null;
    document.getElementById("cUser").innerHTML = null;
    document.getElementById("cSenha").innerHTML = null;
    document.getElementById("cTelemóvel").innerHTML = null;
    document.getElementById("cMail").innerHTML = null;
    document.getElementById("cSexo").innerHTML = null;
    document.getElementById("cNasc").innerHTML = null;
    document.getElementById("cEmprego").innerHTML = null;
    document.getElementById("cJustificacao").innerHTML = null;

}

function callThinkingAPI(){

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://api.icndb.com/jokes/random",
        dataType: "json",
        success: function (msg) {
            $("#piada").html(msg.value.joke);
        },
        error: function (req, status, error) {
            alert(req + " " + status + " " + error);
        }
    });
});

}


function validarEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        return false;
    }
    else{
        document.getElementById("formFeedback").style.color="red";
        document.getElementById("formFeedback").innerHTML="Email inválido!";
        document.getElementById("cMail").focus();

    }

    return false;
}

