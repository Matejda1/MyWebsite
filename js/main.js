// Navbavr
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-links");
let menuOpen = false;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change")
    if (menuOpen == false) {
        navbar.style.display = "block"
        menuOpen = true
    } else if (menuOpen == true) {
        navbar.style.display = "none"
        menuOpen = false
    }
})

// Form validation
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });
});

const submitBtn = document.querySelector("#submitBtn")

document.addEventListener("DOMContentLoaded", function () {
    const formular = document.getElementById("contact-form");
    const inputN = document.getElementById("name-input");
    const inputE = document.getElementById("email-input");
    const inputM = document.getElementById("message-input");

    if (formular) {
        formular.addEventListener("submit", function (e) {
            e.preventDefault();
            submitBtn.style.background = "#D3D3D3"
            submitBtn.disabled = true;

            const honeypot = document.getElementById("honeypot").value;
            if (honeypot !== "") {
                console.log("Robot odhalen!")
                showAlert("Zpráva uspěšně odeslána!", "Vaše zpráva se uspěšně odeslala. Zachvilku se na ni podívam.", "Zavřít");
                return;
            }

            const scriptURL = "https://script.google.com/macros/s/AKfycbztQ-FtQQVU8nVSFW3nw4bWiUqEK07-Dh3P06Pc-l7htxsN2pTFbWl1QO2HwCTyJEe8/exec";

            const formData = new FormData(formular);
            fetch(scriptURL, { method: "POST", body: formData })
                .then(response => {
                    if (response.ok) {
                        showAlert("Zpráva uspěšně odeslána!", "Vaše zpráva se uspěšně odeslala. Zachvilku se na ni podívam.", "Zavřít");
                        formular.reset();
                        inputN.classList.remove("touched");
                        inputE.classList.remove("touched")
                        inputM.classList.remove("touched")
                    } else {
                        showAlert("Něco se nepovedlo!", "Zkuste prosím zprávu poslat znovu.", "Zavřít");
                    }
                })
                .catch(error => {
                    console.error("Chyba při odesílání:", error);
                    showAlert("Chyba sítě!", "Zprávu nebylo možné odeslat. Zkontrolujte připojení.", "Zavřít");
                })
                .finally(() => {
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                });
        });
    }
});

const alertBox = document.querySelector(".alert");
const titleA = document.querySelector(".titleA");
const textA = document.querySelector(".text");
const confirmABtn = document.querySelector(".confirmABtn");

function showAlert(title, text, btnText) {
    titleA.innerHTML = title
    textA.innerHTML = text;
    confirmABtn.innerHTML = btnText;

    alertBox.style.display = "flex";
}

confirmABtn.addEventListener("click", () => {
    alertBox.style.display = "none";
    titleA.innerHTML = "";
    textA.innerHTML = "";
    confirmABtn.innerHTML = "";
});

// Footer
let year = new Date().getFullYear();
const footerYear = document.querySelector(".footer-year");
footerYear.innerHTML = year;