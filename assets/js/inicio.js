window.addEventListener("load", function () {

    function esconde() {
        let utilizador = document.getElementById("utilizador").value;
        if (utilizador != "") {
            document.getElementById('entrar').removeAttribute("disabled");
        } else {
            document.getElementById('entrar').setAttribute("disabled", null);
        }
    }

    function entrar() {
        let utilizador = document.getElementById("utilizador").value;
        sessionStorage.setItem("utilizador", utilizador);
        window.location.href = "index.html";
    }

    const input = document.getElementById("utilizador");
    input.addEventListener("keyup", function () { esconde(); })
    const entrarBtn = document.getElementById("entrar");
    entrarBtn.addEventListener("click", function () { entrar(); })


});
