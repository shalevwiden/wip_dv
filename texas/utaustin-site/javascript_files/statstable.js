// this is for the stats page sheetJs

console.log("Running sheet.js for stats file");

window.addEventListener("DOMContentLoaded", async () => {
  //
  const container = document.getElementById("csvtablecontainer");
  container.innerText = "test";
  const csvUrl =
    "https://storage.googleapis.com/degreeview-ut/ut-stats/csvs/universityoftexas_stats.csv";
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();

    // Properly parse CSV with Sheet.js (handles quoted commas)
    const workbook = XLSX.read(csvText, { type: "string" });

    // Get the first worksheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert to HTML table
    const htmlTable = XLSX.utils.sheet_to_html(worksheet);

    // Inject table
    container.innerHTML = htmlTable;
  } catch (err) {
    container.innerHTML = `<p style="color:red; font-weight:bold;">Failed to load CSV: ${err.message}</p>`;
    console.error("CSV load error:", err);
  }
});

// now that statstable is in there, style it

console.log("Running stats table styling script");

// this is great to learn how python logic translates to JS

function waitForTable() {
  const statstable = document.querySelector("#csvtablecontainer table");
  if (statstable) {
    // statstable found — run your code
    for (let tr of statstable.getElementsByTagName("tr")) {
      for (let td of tr.getElementsByTagName("td")) {
        const text = td.innerText.toLowerCase();
        if (text.includes("school") || text.includes("college")) {
          td.classList.add("schooltd");
        }
      }
    }
  } else {
    // statstable not found yet — check again in 200ms
    setTimeout(waitForTable, 200);
  }
}

// Start waiting
waitForTable();
