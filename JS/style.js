const message = document.getElementById("message");
const button = document.getElementById("button");
const input = document.getElementById("input");
const vowel = ["a", "e", "i", "o", "u"];

button.addEventListener("click", () => {
  let counter = 0;
  const newInput = input.value.toLowerCase();
  const split = newInput.split("");
  input.value = "";
  for (let letter of split) {
    if (vowel.includes(letter)) {
      counter++;
    }
}
message.innerText = `${counter}`;
});
