
var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
    var addButton = document.createElement("button");
    addButton.type = "Adicionar";
    addButton.type = "button";

    fs.appendChild(addButton);

    addButton.addEventListener("clic", function() {
        var newInput = document.createElement("input");
        fsList.appendChild(newInput);
    });
}