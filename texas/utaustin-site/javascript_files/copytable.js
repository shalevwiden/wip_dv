copyicon = document.getElementById("copyicon");
console.log("Copy Script Present");

// this is the one on the rendered page
semester_csv_container = document.getElementById("semester-csvtablecontainer");
if (semester_csv_container) {
  function copytoclipboard() {
    const outputtext = semester_csv_container.innerText;
    navigator.clipboard
      .writeText(outputtext)
      .then(() => alert("Copied! (try pasting in an Excel file)"))
      .catch(() => alert("Failed to copy."));
  }
  copyicon.addEventListener("click", copytoclipboard);
}

// this is the one on the degreepage
csvtablecontainer = document.getElementById("csvtablecontainer");
if (csvtablecontainer) {
  function copytoclipboard() {
    const outputtext = csvtablecontainer.innerText;
    navigator.clipboard
      .writeText(outputtext)
      .then(() => alert("Copied! (try pasting in an Excel file)"))
      .catch(() => alert("Failed to copy."));
  }
  copyicon.addEventListener("click", copytoclipboard);
}

// for animations

orignalstyles = window.getComputedStyle(copyicon);

const originalcolor = orignalstyles.getPropertyValue("color");
function hoverstate() {
  copyicon.classList.add("fa-fade");
  copyicon.style.color = "var(--lighterblue)";
  copyicon.style.setProperty("--fa-animation-duration", "1s");
  copyicon.style.setProperty("--fa-fade-opacity", "0.5");
  console.log("added hoverstate class");
}

function removehoverstate() {
  copyicon.classList.remove("fa-fade");
  copyicon.style.color = originalcolor;
  console.log("removed hoverstate class");
}

copyicon.addEventListener("mouseenter", hoverstate);
copyicon.addEventListener("mouseleave", removehoverstate);
