// performing DOM with closures

function changeMode(size, weight, transform, background, color) {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
  
  //working on the looks
  function main() {
    let spooky = changeMode.bind(null, 9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode.bind(
      null,
      12,
      "bold",
      "capitalize",
      "black",
      "white"
    );
    let screamMode = changeMode.bind(
      null,
      12,
      "normal",
      "lowercase",
      "white",
      "black"
    );
  
    //adding paragraphs
    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
  
    //adding colorization mode
    let spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);
  
    let darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark mode";
    darkModeButton.addEventListener("click", darkMode);
    document.body.appendChild(darkModeButton);
  
    let screamModeButton = document.createElement("button");
    screamModeButton.textContent = "Scream mode";
    screamModeButton.addEventListener("click", screamMode);
    document.body.appendChild(screamModeButton);
  }
  
  main();