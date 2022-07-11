console.log("JS linked!");

function showNotes() {
  let notes_title = [];
  let notes_desc = [];
  let notesTitle = localStorage.getItem("notesTitle");
  let notesDescription = localStorage.getItem("notesDescription");
  if (notesTitle) {
    notes_title = JSON.parse(notesTitle);
  }
  if (notesDescription) {
    notes_desc = JSON.parse(notesDescription);
  }
  if (!notesTitle && !notesDescription) {
    document.getElementById("notes-content").innerHTML =
      "<p>Nothing to show.. Please try adding some notes first...</p>";
  } else {
    htmlContent = "";
    for (let i = 0; i < notes_title.length; i++) {
      htmlContent += `<div class="card mx-3" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${notes_title[i]}</h5>
                            <p class="card-text">${notes_desc[i]}</p>
          <button class="btn btn-primary mx-3">Edit Note</button>
          <button class="btn btn-danger" onClick=deleteNote(${i})>Delete Note</button>
        </div>
      </div>`;
    }
    document.getElementById("notes-content").innerHTML = htmlContent;
  }
}

document.getElementById("addBtn").addEventListener("click", () => {
  let title = document.getElementById("titleArea").value;
  let desc = document.getElementById("descriptionArea").value;
  if (title === "") {
    alert("Please enter some title first");
  } else {
    addNote(title, desc);
  }
});

function deleteNote(index) {
  let notes_title = [];
  let notes_desc = [];
  let notesTitle = localStorage.getItem("notesTitle");
  let notesDescription = localStorage.getItem("notesDescription");
  if (notesTitle) {
    notes_title = JSON.parse(notesTitle);
  }
  if (notesDescription) {
    notes_desc = JSON.parse(notesDescription);
  }
  notes_title.splice(index, 1);
  notes_desc.splice(index, 1);
  localStorage.setItem("notesTitle", JSON.stringify(notes_title));
  localStorage.setItem("notesDescription", JSON.stringify(notes_desc));
  showNotes();
}

function addNote(title, desc) {
  let notes_title = [];
  let notes_desc = [];
  let notesTitle = localStorage.getItem("notesTitle");
  let notesDescription = localStorage.getItem("notesDescription");
  if (notesTitle) {
    notes_title = JSON.parse(notesTitle);
  }
  if (notesDescription) {
    notes_desc = JSON.parse(notesDescription);
  }
  notes_title.push(title);
  notes_desc.push(desc);
  localStorage.setItem("notesTitle", JSON.stringify(notes_title));
  localStorage.setItem("notesDescription", JSON.stringify(notes_desc));
  showNotes();
}
showNotes();
