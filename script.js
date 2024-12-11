const data = [{
  title: "Mango Bay",
  sub: "Mad Scientist Beer",
  text: "Pale Ale - American"
},
{
  title: "Távoli Galaxis",
  sub: "Rothbeer Brewery",
  text: "IPA - American"
},
{
  title: "Flying Rabbit AIPA",
  sub: "MONYO Brewing Co.",
  text: "IPA - American"
},
{
  title: "Liquid Cocaine",
  sub: "Mad Scientist Beer",
  text: "IPA - Imperial"
},
{
  title: "Organic Chocolate Stout",
  sub: "Samuel Smith Old Brewery",
  text: "Stout - English"
},
{
  title: "Bracia",
  sub: "Thornbridge Brewery",
  text: "Strong Ale - English"
},
{
  title: "Oatmeal Stout",
  sub: "Samuel Smith Old Brewery",
  text: "Stout - Oatmeal"
},
{
  title: "Black Tokyo Horizon",
  sub: "BrewDog",
  text: "Stout - American Imperial"
},
{
  title: "Vintage Ale",
  sub: "Fuller's",
  text: "Old Ale"
},
{
  title: "All the Leaves are Brown",
  sub: "Tempest Brewing Company",
  text: "Brown Ale - American"
}]

document.querySelector("#root").insertAdjacentHTML("beforeend", `
  <header>
    <h1>Best Beers</h1>
    <span class="material-symbols-outlined">
      menu
    </span>
  </header>
  <div class="cards">
    ${data.map((drinkObj, index) => `
      <div class="card">
        <span class="number">${index + 1}</span>
        <h2>${drinkObj.title}</h2>
        <h3>${drinkObj.sub}</h3>
        <p>${drinkObj.text}<p>
        <button>
          details 
          <span class="material-symbols-outlined">
            arrow_forward
          </span>
        </button>
      </div>
    `).join("")}
  </div>
`)