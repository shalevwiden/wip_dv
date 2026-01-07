let pages = []; // declared once, globally

fetch("departmentpagelinks.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load departmentpagelinks.json");
    }
    return response.json();
  })
  .then((data) => {
    pages = data; // store JSON here
    console.log("Pages loaded:", pages);
  })
  .catch((err) => {
    console.error(err);
  });

randombutton = document.getElementById("randompagebutton");

function gotorandompage(e) {
  {
    e.preventDefault(); // Prevent default link behavior

    // math.floor gets floor. Math.random returns float between 0 and 1.
    const randomIndex = Math.floor(Math.random() * pages.length);
    const randomPage = pages[randomIndex];

    // need to use window change to make the entire button clickable
    window.location.href = randomPage;
  }
}

// e means event handling
randombutton.addEventListener("click", gotorandompage);
