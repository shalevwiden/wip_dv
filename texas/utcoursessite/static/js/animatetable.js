console.log("Table Animation Script Present");

// this is the way this works: it works in tandem with animations.css. Using classList it adds and removes certain classes when the
// animation button is pressed.

// this is the one on the rendered page
departmentcoursestable = document.getElementById("departmentcoursestable");
csvtablecontainer = document.getElementById("csvtablecontainer");

animatebutton = document.getElementById("animatebutton");

var shiftaniamtion = "tableanimationforwards";

var updownblue = "updownblue";
var updownred = "updownred";

animationone_duration = 2000;
window.addEventListener("load", () => {
  setTimeout(() => {
    // Do whatever you want with trs here

    if (departmentcoursestable) {
      let trs = departmentcoursestable.querySelectorAll("tr");

      console.log(trs);
      // skip the first two rows since heading and then display none
      trs = Array.from(trs).slice(1);
      //   remove last row(logo row)
      trs = trs.slice(0, -1);

      trs.forEach((el, i) => {
        el.style.setProperty("--order", i);
      });

      function fullanimation(tr, animationclass2, index) {
        // first add it
        console.log("Animating", tr);
        console.log(`Animation class 2: ${animationclass2}`);
        tr.classList.add(animationclass2);
        // any stylings should be done in css on the animation class - this will do it all instantly
        // tr.style.backgroundColor = "#48f79dff";
        // tr.style.fontWeight = "bold";
      }

      // now add the full animationtoeverytr
      function runfullanimation(animationclass1) {
        // pay attention to the classes
        trs.forEach((tr, index) => {
          fullanimation(tr, animationclass1, index);
        });

        // this should only run after every tr has done the animation
        function removeanimation() {
          trs.forEach((tr) => {
            console.log("Running remove animation now");
            tr.classList.remove(animationclass1);
            // tr.style.backgroundColor = "#f76548ff";
          });
        }
        removedelay = (trs.length - 1) * 300 + 2000; //the first animation that runs will be 2 seconds

        setTimeout(removeanimation, removedelay);
        // with this something can happen that will alert the user.
        setTimeout(() => {
          console.log("Done with Animation");
        }, removedelay);
      }
      //   300 ms is the order delay

      animatebutton.addEventListener("click", function (event) {
        runfullanimation(updownred);
      });

      animatebutton.addEventListener("click", runfullanimation);
      animatebutton.addEventListener("click", (e) => console.log("clicked"));
    }

    // now for the main csvtablecontainer page
    // -------------------another seperate thing
    if (csvtablecontainer) {
      let trs = csvtablecontainer.querySelectorAll("tr");

      console.log(trs);
      // skip the first two rows since heading and then display none
      trs = Array.from(trs).slice(2);
      //   remove last row(logo row)

      trs = trs.slice(0, -1);

      trs.forEach((el, i) => {
        el.style.setProperty("--order", i);
      });

      function fullanimation(tr, animationclass2, index) {
        // first add it
        console.log("Animating", tr);
        console.log(`Animation class 2: ${animationclass2}`);
        tr.classList.add(animationclass2);
        // any stylings should be done in css on the animation class - this will do it all instantly
        // tr.style.backgroundColor = "#48f79dff";
        // tr.style.fontWeight = "bold";
      }

      // now add the full animationtoeverytr
      function runfullanimation(animationclass1) {
        // pay attention to the classes
        trs.forEach((tr, index) => {
          fullanimation(tr, animationclass1, index);
        });

        // this should only run after every tr has done the animation
        function removeanimation() {
          trs.forEach((tr) => {
            console.log("Running remove animation now");
            tr.classList.remove(animationclass1);
            // tr.style.backgroundColor = "#f76548ff";
          });
        }
        removedelay = (trs.length - 1) * 300 + 2000; //the first animation that runs will be 2 seconds

        setTimeout(removeanimation, removedelay);
        // with this something can happen that will alert the user.
        setTimeout(() => {
          console.log("Done with aniamtion");
        }, removedelay);
      }
      //   300 ms is the order delay

      // this is where it all happens
      animatebutton.addEventListener("click", function (event) {
        runfullanimation(updownred);
      });

      animatebutton.addEventListener("click", runfullanimation);
      animatebutton.addEventListener("click", (e) => console.log("clicked"));
    }
    // 1 second delay even after page loads.
  }, 1000);
});

// this is the one on the degreepage
