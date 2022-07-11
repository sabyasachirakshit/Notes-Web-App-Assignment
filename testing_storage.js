const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
};
let notesTitle = ["note1", "note2"];
window.localStorage.setItem("user", JSON.stringify(person));
localStorage.setItem("notesTitle", JSON.stringify(notesTitle));
