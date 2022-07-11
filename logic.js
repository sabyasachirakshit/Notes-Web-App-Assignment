console.log("JS linked!");

let title = document.getElementById('titleArea').value;
let desc = document.getElementById('descriptionArea').value;

document.getElementById('addBtn').addEventListener('click', () => {
    let title = document.getElementById('titleArea').value;
    let desc = document.getElementById('descriptionArea').value;
    console.log(title);
    console.log(desc);
})