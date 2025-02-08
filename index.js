// template_dwduubk
// service_2pfsocm
// RX7a4vShMLDa1Bp-8
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        "service_2pfsocm",
        "template_dwduubk",
        event.target,
        "RX7a4vShMLDa1Bp-8",
    ).then(()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on maggie.a.hong@gmail.com"
        );
    })
}
