function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let key = "ee4tcof5e09aee9e3b3fd616c44043ad";
  let prompt = `generate a short french poem about ${instructionsInput.value}. Do not include a title. write a four-line poem.`;
  let context =
    "you are a romantic poem expert and love to write a short poem. your mission is to write a four-line poem. follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  console.log("generating poem");
  console.log(`prompt ${prompt}`);
  console.log(`input ${instructionsInput}`);
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
