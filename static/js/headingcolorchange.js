console.log("Running hover script");

schoolcolor = "#bf5700";
breadcrumbs_current = document.getElementById("current");

schoolnametitle = document.getElementById("schoolnametitle");
// add conditonals so it can work with all files. Only if the element exists will it proceed
if (schoolnametitle) {
  // school file
  const originalcolor = getComputedStyle(schoolnametitle).color;
  breadcrumbs_current.addEventListener("mouseenter", () => {
    schoolnametitle.style.color = schoolcolor;
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
    degreenametitle.style.color = schoolcolor;
  });

  breadcrumbs_current.addEventListener("mouseleave", () => {
    degreenametitle.style.color = originalColor;
  });
}
randombutton = document.getElementById("randompagebutton");
randomlink = document.getElementById("randomlink");
if (randombutton) {
  // now degreepage file
  const originalColor = getComputedStyle(randomlink).color;
  randombutton.addEventListener("mouseenter", () => {
    randomlink.style.color = "#153f66";
  });

  randombutton.addEventListener("mouseleave", () => {
    randomlink.style.color = originalColor;
  });
}
