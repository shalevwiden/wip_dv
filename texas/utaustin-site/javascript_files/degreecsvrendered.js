// this is the one thats rendered on another page. For now its the semester CSV file.

console.log("Running degreecsvrendered file");

// there will be a download section. And this one will be the same for all of them.
let csvtorender = document.getElementById("downloadcsv").href;
console.log(`CSV to render ${csvtorender}`);

//
window.addEventListener("DOMContentLoaded", async () => {
  // table container is where the
  const tablecontainer = document.getElementById("semester-csvtablecontainer");
  const csvUrl = csvtorender;
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
    tablecontainer.innerHTML = htmlTable;
  } catch (err) {
    tablecontainer.innerHTML = `<p style="color:red; font-weight:bold; text-align:center;">Failed to load CSV: ${err.message}</p>`;
    console.error("CSV load error:", err);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("running dummy td script");

  const table = document.querySelector("#semester-csvtablecontainer table");
  if (!table) return;

  const interval = setInterval(() => {
    const firstRow = table.querySelector("tr");
    if (firstRow) {
      clearInterval(interval);

      // Create a new dummy cell
      const dummyTd = document.createElement("td");
      dummyTd.classList.add("dummytd");
      console.log("Created dummy td");

      // Add it to the first row
      firstRow.appendChild(dummyTd);
    }
  }, 100); // Check every 100ms
});
