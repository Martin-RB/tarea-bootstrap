var doggos = [
    "pets/doggos/doggo1.jpg",
    "pets/doggos/doggo2.jpg",
    "pets/doggos/doggo3.jpg",
    "pets/doggos/doggo4.jpg",
    "pets/doggos/doggo5.jpg",
    "pets/doggos/doggo6.jpg",
    "pets/doggos/doggo7.jpg",
];
var cattos = [
    "pets/cattos/catto1.jpeg",
    "pets/cattos/catto2.jpg",
    "pets/cattos/catto3.jpg",
    "pets/cattos/catto4.jpg",
    "pets/cattos/catto5.jpeg",
    "pets/cattos/catto6.jpg",
    "pets/cattos/catto7.jpg",
];

var col1 = $("#col1")
var col2 = $("#col2")
var petDropdown = $("#petDropdown");
var petDropdownOptions = $("#petDropdownOptions");

var emptyColumns = () => {
    col1.html("");
    col2.html("");
}

var fillColumn = (arrDirs, column) => {
    let col = (column == "left")? col1: col2;
    arrDirs.forEach(el => {
        col.append(`<img src="${el}" class="border" style="padding: 5px; width: 100%;">`);
    });
}

var drawAll = () => {
    emptyColumns();
    fillColumn(doggos, "left");
    fillColumn(cattos, "right");
    petDropdown.html("Ver todo")
}

var drawDogs = () => {
    emptyColumns();
    fillColumn(doggos.slice(0, doggos.length/2+1), "left");
    fillColumn(doggos.slice(doggos.length/2+1, doggos.length), "right");
    petDropdown.html("Ver perros")
}

var drawCats = () => {
    emptyColumns();
    fillColumn(cattos.slice(0, cattos.length/2+1), "left");
    fillColumn(cattos.slice(cattos.length/2+1, cattos.length), "right");
    petDropdown.html("Ver gatos")
}

petDropdownOptions.on("click", ".dropdown-item", (e) => {
    let type = $(e.target).data("type");    

    switch(type){
        case "all":
                drawAll();
            break;
        case "dogs":
                drawDogs();
            break;
        case "cats":
                drawCats();
            break;
    }
})