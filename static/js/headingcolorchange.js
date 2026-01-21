console.log("Running hover script");

document.getElementById("unicolor")?.textContent.trim();
breadcrumbs_current = document.getElementById("current");

// this is for the OG DegreeView schools like CNS and McCombs
schoolnametitle = document.getElementById("schoolnametitle");
// add conditonals so it can work with all files. Only if the element exists will it proceed
if (schoolnametitle) {
  // school file
  const originalcolor = getComputedStyle(schoolnametitle).color;
  breadcrumbs_current.addEventListener("mouseenter", () => {
    schoolnametitle.style.color = unicolor;
  });

  breadcrumbs_current.addEventListener("mouseleave", () => {
    schoolnametitle.style.color = originalcolor;
  });
}

// now the other file
degreenametitle = document.getElementById("degreenametitle");
if (degreenametitle) {
  // now degreepage file
  const originalColor = getComputedStyle(degreenametitle).color;
  breadcrumbs_current.addEventListener("mouseenter", () => {
    // change this color for diferent schools
    degreenametitle.style.color = unicolor;
  });

  breadcrumbs_current.addEventListener("mouseleave", () => {
    degreenametitle.style.color = originalColor;
  });
}

// now the other file
departmenttitle = document.getElementById("departmenttitle");
if (departmenttitle) {
  // now degreepage file
  console.log("Recieved department title");
  const originalColor = getComputedStyle(departmenttitle).color;
  breadcrumbs_current.addEventListener("mouseenter", () => {
    // change this color for diferent schools
    departmenttitle.style.color = unicolor;
  });

  breadcrumbs_current.addEventListener("mouseleave", () => {
    departmenttitle.style.color = originalColor;
  });
}
