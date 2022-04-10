const card = document.querySelector(".card"),
    qrInput = card.querySelector(".input-field Input"),

    generatebtn = card.querySelector(".input-field button"),
    qrImg = card.querySelector(".qr-code img");


generatebtn.addEventListener("click", () => {

    if (!qrInput.value) return;
    generatebtn.innerText = "Please Wait...";
    let url1 = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    let url2 = qrInput.value;
    let result = url1.concat(url2);
    qrImg.src = result;

    qrImg.addEventListener("load", () =>
        card.classList.add("active"),
        generatebtn.innerText = "Generate QR Code",
    )
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        card.classList.remove("active");
    }
});


