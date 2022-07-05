const allTheFish = [
  {
    id: 1,
    name: "Greg",
    size: "10 cm",
    food: "Fish food sprinkles",
  },
  {
    id: 2,
    name: "Fiona",
    size: "10 cm",
    food: "Algae",
  },
  {
    id: 3,
    name: "Marley",
    size: "10 cm",
    food: "Algae",
  },
  {
    id: 4,
    name: "Hank Williams",
    size: "10 cm",
    food: "Algae",
  },
  {
    id: 5,
    name: "Stu",
    size: "10 cm",
    food: "Algae",
  },
  {
    id: 6,
    name: "Frankfurt",
    size: "20 cm",
    food: "Plankton",
  },
];



const buildHTMLString = () => {
  let htmlString = "<section>";
  for (const singleFishObject of allTheFish) {
    // built an html string to represent a fish
    // add html string to a big string outside the loop
    htmlString += `<article class="fish-card">
        <h2>${singleFishObject.name}</h2>
        <button id="details-${singleFishObject.id}">View More Info</button>
     </article>`;
  }
  htmlString += `</section>`;
  return htmlString;
};

const fishButton = document.querySelector(".view-fish");

fishButton.addEventListener("click", () => {
  const allTheFishAsHTML = buildHTMLString();
  // print to web page
  document.querySelector(".fish-container").innerHTML = allTheFishAsHTML;
});

// document.querySelector(".view-fish").addEventListener("click", ()=> {
//  console.log("you clicked something")
// })


// ---- Click event for fish details button ------- //
document.querySelector(".fish-container").addEventListener("click", (event) => {
  if (event.target.id.startsWith("details")) {
    const whatIClickedOn = event.target.id; //"details-4"
    const [, id] = event.target.id.split("-");
    for (const singleFish of allTheFish) {
      if (singleFish.id === parseInt(id)) {
        alert(
          `${singleFish.name} is ${singleFish.size} and eats ${singleFish.food}`
        );
      }
    }
  }
});
