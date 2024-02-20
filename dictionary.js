let words = [];
const buttons = document.querySelectorAll(".btn");

function dictionary() {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      switch (button.id) {
        case "saveId":
          pushWord();
          break;
        case "searchId":
          verifyStatus();
          break;
      }
    });
  });
}

function pushWord() {
  let valueSave = document.querySelector(".inputSave").value;
  words.push(valueSave);
  document.querySelector(".inputSave").value = "";
}

function verifyStatus() {
  let valueSearch = document.querySelector(".inputSearch").value;
  document.querySelector(".inputSearch").value = "";
  for (let i = 0; i < words.length; ++i) {
    if (words[i] === valueSearch) {
      alert("Word is in dictionary");
      break;
    } else if (i + 1 === words.length) {
      alert("Word is not in dictionary");
    }
  }
}
