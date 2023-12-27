//ALERT BUTTON 
function show() {
    var alert = document.getElementById("container2");
    alert.style.display = "block"
}

function hide() {
    var alert = document.getElementById("container2");
    alert.style.display = "none"
}

function showmenu() {
    var alertz = document.getElementById("container3");
    alertz.style.display = "block"
}

function hidemenu() {
    var alertz = document.getElementById("container3");
    alertz.style.display = "none"
}

//MODE FLIPFLOP
var judulElement = document.getElementById('judul');
var norButton = document.getElementById('nor-mode');
var nandButton = document.getElementById('nand-mode');
var CalculateButton = document.getElementById("hitung");
var InputR = document.getElementById("inp-reset");
var InputS = document.getElementById("inp-set");
var OutHasil = document.getElementById("out-hasil");

let previousResult = { Q: null, Q_: null };
let currentMode = "NAND"; // Default mode is NAND

// Function to update the mode
function updateMode(mode) {
    currentMode = mode;
    // You can add additional logic here if needed
}

// Event listeners for mode buttons
norButton.addEventListener('click', function () {
    judulElement.innerHTML = 'RS FLIP FLOP (NOR)';
    updateMode("NOR");
});

nandButton.addEventListener('click', function () {
    judulElement.innerHTML = 'RS FLIP FLOP (NAND)';
    updateMode("NAND");
});

CalculateButton.addEventListener('click', function () {
    const resetValue = parseInt(InputR.value);
    const setValue = parseInt(InputS.value);

    // Check the current mode before performing the RS Flip Flop logic
    if (currentMode === "NAND") {
        if (resetValue === 0 && setValue === 1) {
            previousResult = { Q: 0, Q_: 1 };
        } else if (resetValue === 1 && setValue === 0) {
            previousResult = { Q: 1, Q_: 0 };
        } else if (resetValue === 0 && setValue === 0) {
            previousResult = { Q: 'x', Q_: 'x' };
        } else if (resetValue === 1 && setValue === 1) {
            // Output same as previous result
        }
    } else if (currentMode === "NOR") {
        if (resetValue === 0 && setValue === 1) {
            previousResult = { Q: 1, Q_: 0 };
        } else if (resetValue === 1 && setValue === 0) {
            previousResult = { Q: 0, Q_: 1 };
        } else if (resetValue === 0 && setValue === 0) {
            previousResult = { Q: 0, Q_: 0 };
        } else if (resetValue === 1 && setValue === 1) {
            previousResult = { Q: 'x', Q_: 'x' };
        }
    }

    // Display the result in the output field
    OutHasil.value = `Q = ${previousResult.Q}, Q' = ${previousResult.Q_}`;
});
