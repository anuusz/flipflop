//ALERT BUTTON
function showabout() {
  var alert = document.getElementById("container2");
  alert.style.display = "block";
}

function showinfo() {
  var alertz = document.getElementById("container3");
  alertz.style.display = "block";
}

function showhelp() {
  var alertz = document.getElementById("container4");
  alertz.style.display = "block";
}

function hide() {
  var element2 = document.getElementById("container2");
  var element3 = document.getElementById("container3");
  var element4 = document.getElementById("container4");

  if (element2) {
    element2.style.display = "none";
  }

  if (element3) {
    element3.style.display = "none";
  }

  if (element4) {
    element3.style.display = "none";
  }
}

//MODE FLIPFLOP
var judulElement = document.getElementById("judul");
var norButton = document.getElementById("nor-mode");
var nandButton = document.getElementById("nand-mode");
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
norButton.addEventListener("click", function () {
  judulElement.innerHTML = "RS FLIP FLOP (NOR)";
  updateMode("NOR");
});

nandButton.addEventListener("click", function () {
  judulElement.innerHTML = "RS FLIP FLOP (NAND)";
  updateMode("NAND");
});


function updateMode(mode) {
  currentMode = mode;
  resetInputs(); // Reset input dan hasil setiap kali mode berubah
}

CalculateButton.addEventListener('click', function () {
  const resetValue = parseInt(InputR.value);
  const setValue = parseInt(InputS.value);

  // Validasi input untuk memastikan hanya angka 0 atau 1 yang diterima
  if (!isValidInput(resetValue) || !isValidInput(setValue)) {
    alert("Masukkan hanya angka 0 atau 1.");
    resetInputs(); // Reset input jika input tidak valid
    return;
  }


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
      previousResult = { Q: previousResult.Q, Q_: previousResult.Q_ }; // Output same as previous result
    } else if (resetValue === 1 && setValue === 1) {
      previousResult = { Q: 'x', Q_: 'x' };
    }
  }

  // Display the result in the output field
  OutHasil.value = `Q = ${previousResult.Q}, Q' = ${previousResult.Q_}`;
});

// Fungsi untuk memvalidasi input
function isValidInput(value) {
  return value === 0 || value === 1;
}



// Fungsi untuk mereset nilai input
function resetInputs() {
  InputR.value = '';
  InputS.value = '';
  OutHasil.value = '';
  previousResult = { Q: null, Q_: null }; // Reset hasil yang disimpan
}

// Event listener untuk tombol "Reset"
Reset.addEventListener('click', function () {
  resetInputs();
});

var currentPageIndex = 0;
var pages = document.querySelectorAll('.page');

function showPage(index) {
  // Sembunyikan semua halaman
  pages.forEach(function (page) {
    page.classList.remove('active');
  });

  // Tampilkan halaman dengan indeks tertentu
  pages[index].classList.add('active');
}

function next() {
  if (currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    showPage(currentPageIndex);
  }
}

function back() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    showPage(currentPageIndex);
  }
}

// Tampilkan halaman pertama saat halaman dimuat
showPage(currentPageIndex);




// block hp/tabley
function detectScreenSize() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Menampilkan pop-up jika lebar layar kurang dari atau sama dengan 768 piksel (ukuran ponsel/tablet)
  if (screenWidth <= 768) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
}

// Panggil fungsi saat halaman dimuat
window.onload = detectScreenSize;