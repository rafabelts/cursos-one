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

const getInput = () => {
  return document.getElementById("input").value;
};

const encript = () => {
  const inputValue = getInput();

  console.log(
    inputValue
      .split("")
      .map((letter) => encriptationValues[letter] || letter)
      .join("")
  );
};

const desencript = () => {};
