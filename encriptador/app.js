const encriptationValues = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const desencriptationValues = {};

for (let key in encriptationValues) {
  desencriptationValues[encriptationValues[key]] = key;
}

const showResult = (message) => {
  const imgElement = document.querySelector("#result-container img");
  const titleElement = document.querySelector("#result-container h1");
  const paragraphElement = document.querySelector("#result-container p");
  const containerElement = document.querySelector("#result-container");

  imgElement.style.display = "none";
  titleElement.style.display = "none";

  paragraphElement.innerHTML = message;

  containerElement.classList.add("show-result");
};

const getInput = () => {
  return document.getElementById("input").value;
};

const encript = () => {
  const inputValue = getInput();

  const encryptedMessage = inputValue
    .split("")
    .map((letter) => encriptationValues[letter] || letter)
    .join("");

  showResult(encryptedMessage);
};

const desencript = () => {
  let inputValue = getInput();
  let desencryptatedMessage = "";
  let i = 0;

  while (i < inputValue.length) {
    let found = false;
    for (let key in desencriptationValues) {
      if (inputValue.substring(i, i + key.length) === key) {
        desencryptatedMessage += desencriptationValues[key];
        i += key.length;
        found = true;
        break;
      }
    }
    if (!found) {
      desencryptatedMessage += inputValue[i];
      i++;
    }
  }
  showResult(desencryptatedMessage);
};
