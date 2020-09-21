const theFilesInput = document.querySelector("#theFiles");
const tableOutput = document.querySelector("#tableOutput>tbody")

theFilesInput.addEventListener("change", function (e) {

  while (tableOutput.hasChildNodes()) {
    tableOutput.removeChild(tableOutput.firstChild);
  }

  for (var i = 0; i < theFilesInput.files.length; i++) {
    const file = theFilesInput.files[i];

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerHTML = file.name;
    row.appendChild(nameCell);

    const typeCell = document.createElement("td");
    typeCell.innerHTML = file.type;
    row.appendChild(typeCell);

    const sizeCell = document.createElement("td");
    sizeCell.innerHTML = file.size;
    row.appendChild(sizeCell);

    const dataUrlCell = document.createElement("td");
    dataUrlCell.innerHTML = "Loading...";
    row.appendChild(dataUrlCell);

    const reader = new FileReader();
    reader.addEventListener("load", function () {
      dataUrlCell.innerHTML = reader.result.substring(0, 100);
    });
    reader.readAsDataURL(file);

    tableOutput.appendChild(row);

  };
});