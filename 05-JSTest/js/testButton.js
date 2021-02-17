// var txtUnsorted = "";
// var cityUnsorted = ["Paris", "Berlin", "Rom", "Lissabon",
//         "Wien", "Hamburg", "Venedig", "München", "Florenz",
//         "Amsterdam", "Barcelona", "Istanbul"
//     ]
//     //var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     function randomColor() {
//         return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
//     }
// cityUnsorted.forEach(myFunctionUnsorted);

// function myFunctionUnsorted(value, index, array) {
//     txtUnsorted = txtUnsorted + "<li style=\"color:" + randomColor() + "\">" + value + "</li>"
// }
// document.write("<ul");
// document.write(txtUnsorted);
// document.write("<br>");



// var txtSortedAZ = "";
// var citySortedAZ = cityUnsorted.sort();

// citySortedAZ.forEach(myFunctionSorted);

// function myFunctionSorted(value, index, array) {
//     txtSortedAZ = txtSortedAZ + "<li style=\"color:" + randomColor() + "\">" + value + "</li>"
// }
// document.write(txtSortedAZ);

// object.onclick = function() { document.write(txtUnsorted) }

// document.write("</ul");



//

var txt = "";
var cityUnsorted = ["Paris", "Berlin", "Rom", "Lissabon",
    "Wien", "Hamburg", "Venedig", "München", "Florenz",
    "Amsterdam", "Barcelona", "Istanbul"
]
var citySortedAZ = cityUnsorted.sort();
var citySortedZA = citySortedAZ.reverse();

var usedCity = cityUnsorted;

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

function myFunction(value, index, array) {
    txt = txt + "<li style=\"color:" + randomColor() + "\">" + value + "</li>"
}

usedCity.forEach(myFunction);
document.write("<ul>" + txt + "</ul>");
usedCity = null;
usedCity = citySortedAZ;
usedCity.forEach(myFunction);
document.write("<ul>" + txt + "</ul>");