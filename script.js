const card = document.querySelector(".card"),
    qrInput = card.querySelector(".input-field textarea"),
    qrImg = card.querySelector(".qr-code img");
   

    

function changeinfo() {
    

    if (!qrInput.value) return;
    document.getElementById("character").innerHTML=qrInput.value.length +(" Characters Or ");
    document.getElementById("words").innerHTML= qrInput.value.split(" ").length +(" Words");
    let url1 = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
    let url2 = qrInput.value;
    let result = url1.concat(url2);
    qrImg.src = result;
    document.getElementById("download").href = result;

    qrImg.addEventListener("load", () =>
        card.classList.add("active"),
    )
};

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        card.classList.remove("active");
        document.getElementById("character").innerHTML=0+(" Character");
        document.getElementById("words").innerHTML=0+(" Word");
        qrImg.src="Images/Qr-code.png";
    }
});


/*


const card = document.querySelector(".card"),
    qrInput = card.querySelector(".input-field textarea"),
    qrImg = card.querySelector(".qr-code img");
   

    

function changeinfo() {
    

    if (!qrInput.value) return;
    document.getElementById("character").innerHTML=qrInput.value.length +(" Characters Or ");
    document.getElementById("words").innerHTML= qrInput.value.split(" ").length +(" Words");
    let url1 = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
    let url2 = qrInput.value;
    let result = url1.concat(url2);
    qrImg.src = result;
    document.getElementById("download").href = result;

    qrImg.addEventListener("load", () =>
        card.classList.add("active"),
    )
};

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        card.classList.remove("active");
        document.getElementById("character").innerHTML=0+(" Character");
        document.getElementById("words").innerHTML=0+(" Word");
        qrImg.src="Images/Qr-code.png";
    }
});



const card = document.querySelector(".card"),
    qrInput = card.querySelector(".input-field textarea"),
    qrImg = card.querySelector(".qr-code img");
   

    

function changeinfo() {
    

    if (!qrInput.value) return;
    document.getElementById("character").innerHTML=qrInput.value.length +(" Characters Or ");
    document.getElementById("words").innerHTML= qrInput.value.split(" ").length +(" Words");
    let url1 = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
    let url2 = qrInput.value;
    let result = url1.concat(url2);
    qrImg.src = result;
    document.getElementById("download").href = result;

    qrImg.addEventListener("load", () =>
        card.classList.add("active"),
    )
};

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        card.classList.remove("active");
        document.getElementById("character").innerHTML=0+(" Character");
        document.getElementById("words").innerHTML=0+(" Word");
        qrImg.src="Images/Qr-code.png";
    }
});



const card = document.querySelector(".card"),
    qrInput = card.querySelector(".input-field textarea"),
    qrImg = card.querySelector(".qr-code img");
   

    

function changeinfo() {
    

    if (!qrInput.value) return;
    document.getElementById("character").innerHTML=qrInput.value.length +(" Characters Or ");
    document.getElementById("words").innerHTML= qrInput.value.split(" ").length +(" Words");
    let url1 = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=";
    let url2 = qrInput.value;
    let result = url1.concat(url2);
    qrImg.src = result;
    document.getElementById("download").href = result;

    qrImg.addEventListener("load", () =>
        card.classList.add("active"),
    )
};

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        card.classList.remove("active");
        document.getElementById("character").innerHTML=0+(" Character");
        document.getElementById("words").innerHTML=0+(" Word");
        qrImg.src="Images/Qr-code.png";
    }
});


*/
