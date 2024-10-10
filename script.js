// Juhuslik number vahemikus 1-10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Funktsioon, mis kontrollib kasutaja pakkumist
function kontrolliPakkumist() {
    // Saame kasutaja sisestatud väärtuse
    let kasutajaPakkumine = document.getElementById("pakkumine").value;
    let vastusElement = document.getElementById("vastus");

    // Muudame sisestuse täisarvuks
    kasutajaPakkumine = parseInt(kasutajaPakkumine);

    // Kontrollime, kas sisestus on kehtiv number
    if (isNaN(kasutajaPakkumine)) {
        vastusElement.textContent = "Sisesta palun number!";
        return;
    }

    // Võrdleme kasutaja pakkumist juhusliku numbriga
    if (kasutajaPakkumine < randomNumber) {
        vastusElement.textContent = "Suurem!";
    } else if (kasutajaPakkumine > randomNumber) {
        vastusElement.textContent = "Väiksem!";
    } else {
        vastusElement.textContent = "Õige! Õnnitleme, arvasid numbri ära!";
    }
}
