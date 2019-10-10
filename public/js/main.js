(() => {
    console.log("linked");

    var buttons = document.querySelectorAll(".promobutton"),
        image = document.querySelector('#theimage'),
        name = document.querySelector("#name"),
        sub = document.querySelector("#sub"),
        info = document.querySelector("#info");


    var infoArr = [
        ["Hindu Kush", "17-19% THC 0.3-0.5% CBD", "A strong indica, with earthy undertones, great for falling asleep."],
        ["Sour Diesel", "19-22% THC 0.8-0.9 CBD", "A sativa-dominant strain with a diesel-like aroma, great after a long day."],
        ["Green Crack", "18-22% THC 0.3-0.4 CBD", "A sativa-dominant hybrid with a citrus scent, and earthy undertones."],
        ["True Cheese", "16-17% THC 2-3% CBD", "An indica-dominant hybrid with a strong scent and taste of cheese."]
    ]

    name.textContent = infoArr[0][0];
    sub.textContent = infoArr[0][1];
    info.textContent = infoArr[0][2];
    buttons[0].style.background = "#037800";

    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            console.log("click");
            buttons.forEach(button => {
                button.style.background = "#DF00AA";
                name.textContent = infoArr[this.dataset.buttonref][0];
                sub.textContent = infoArr[this.dataset.buttonref][1];
                info.textContent = infoArr[this.dataset.buttonref][2];
            });
            button.style.background = "#037800";
            image.src = `../images/nug${button.dataset.buttonref}.jpg`;
        });
    });

})();