const baseurl = "https://api.adviceslip.com/advice",
    header = document.getElementById("adviceCode"),
    advicebody = document.getElementById("advice"),
    button = document.getElementById("generator");

const generateadvice = async () => {
    try {
        const response = await fetch(baseurl);
        let responsejson = await response.json();
        console.log(response.json);
        advicebody.innerText = `"${responsejson.slip.advice}"`;
        header.innerText = `ADVICE #${responsejson.slip.id}`;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", generateadvice);
window.addEventListener("load", generateadvice);