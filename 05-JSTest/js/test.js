//  UTILS
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//UNSORTED
var txtUnsorted = "";
var cityUnsorted = ["Paris", "Berlin", "Rom", "Lissabon",
    "Wien", "Hamburg", "Venedig", "München", "Florenz",
    "Amsterdam", "Barcelona", "Istanbul"
]
var ulUnSorted = document.createElement("list");
ulUnSorted.setAttribute("id", "myUnsortedUL");
var myMainDiv = document.getElementById("divclass1").appendChild(ulUnSorted);


function myFunctionUnsorted(value, index, array) {
    var createdList = document.getElementById("myUnsortedUL");
    var liElement = document.createElement("li");
    liElement.innerHTML = value;
    liElement.style.color = randomColor();
    createdList.appendChild(liElement);
}

cityUnsorted.forEach(myFunctionUnsorted);
var br = document.createElement("br");
ulUnSorted.appendChild(br);

//SORTED
var txtSortedAZ = "";
var citySortedAZ = cityUnsorted.sort();

var ulSorted = document.createElement("list");
ulSorted.setAttribute("id", "mySortedUL");
var myMainDiv = document.getElementById("divclass1").appendChild(ulSorted);

citySortedAZ.forEach(myFunctionSorted);

function myFunctionSorted(value, index, array) {
    var createdList = document.getElementById("mySortedUL");
    var liElement = document.createElement("li");
    liElement.innerHTML = value;
    liElement.style.color = randomColor();
    createdList.appendChild(liElement);
}