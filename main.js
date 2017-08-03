// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

//planets = planets.reverse();

// Selecting the tags inside html
var dropDown = document.getElementById("planets");
var input = document.getElementById("userWeight");
var para = document.getElementById("output");
var button = document.getElementById("calculateWeight");
var checkbox = document.getElementById("checkbox");


// Looping through to add name [i][0] to the select tag variable named dropDown
planets.forEach(function(planet, index) {
    // if(planet[0] === "Pluto") {return;}
    var option = document.createElement("option");
    option.innerText = planet[0];
    dropDown.appendChild(option);
});


function calculateWeight(weight, planetName) {
    var currentPlanetValue = 0;

    for(var i = 0; i < planets.length; i++){
        if(planetName === planets[i][0]) {
            currentPlanetValue = planets[i][1];
        }
    }
    
    var calcWeight = weight * currentPlanetValue;
    //calcWeight = calcWeight.toFixed(2);
    return calcWeight;
}


function handleClickEvent(e) {
    var planetName;
    for (var index = 0; index < dropDown.children.length; index++) {
        if(dropDown.children[index].selected) {
            planetName = dropDown.children[index].innerText;
        }
    }

    var userWeight = parseInt(input.value);
    var result = calculateWeight(userWeight, planetName);

    para.innerHTML = "If you were on " + planetName + ", you would weigh " + result + " pounds!";
}


// checkbox.onchange = function () {
//     if(this.checked) {
//         if(dropDown.children.length === 10) {
//             var addPluto = document.createElement("option");
//             addPluto.innerText = planets[0][0];
//             dropDown.appendChild(addPluto);
//         }
//     } else {
//         for (var i = 0; i < dropDown.children.length; i++) {
//             if(dropDown.children[i].innerText === "Pluto") {
//                 dropDown.removeChild(dropDown.children[i]);
//             }
//     }
//     }
// };