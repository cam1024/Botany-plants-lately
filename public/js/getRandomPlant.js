//global
var button = document.getElementById('button');
var randomPlant = document.querySelector('.randomPlant')
let randomPlantId = []
const arrayLength = 8

//number generator for plant ID
function randomPlantId1() {
    randomPlantId = []
    for (let i = 0; i < arrayLength; i++) {
        randomPlantId.push(Math.floor((Math.random() * 11)))
    }
    //stringify plant ID in array
    randomPlantId = randomPlantId.join("")
}
function getRandomPlant() {
    randomPlantID1();
      var url = 'https://trefle.io/api/plants/random' + randomPlantId
      var progress = document.      createElement('p')
      fetch(url)
      .then(function (response) {
        if (response.ok) {
            return response.json()
        }
    })
      .then(function (data) {
        if (data.Response == 'False') {
          randomPlant.innerHTML = "Please wait while the plant loads"
          randomPlantId1()
          randomTitle()}
    //document.getElementById('button').addEventListener('click', getRandomPlant);//
  
    else {
      getRandomPlant.innerHTML = " ";
      var page = document.createElement("div");
      var common = document.createElement("h1");
      var image = document.createElement("img")
      var scientific = document.createElement("p");
      var family = document.createElement("p");
      var duration = document.createElement("p");
      var growth = document.createElement("p");
    
      //adding classes to generated elements
      page.classList.add("plantPage");
      common.classList.add("plantCommon");
      image.classList.add("image-pod");
      scientific.classList.add("plantScientific");
      family.classList.add("plantFamily");
      duration.classList.add("plantDuration");
      growth.classList.add("plantGrowth");
    
      //displaying content from API on page
      page.textContent = data.Page;
      common.textContent = data.Common;
      image.setAttribute("src", data.Image);
      scientific.textContent = data.Scientific;
      family.textContent = data.Family;
      duration.textContent = data.Duration;
      growth.textContent = data.Growth;
    
      page.appendChild(page);
      page.appendChild(common);
      page.appendChild(image);
      page.appendChild(scientific);
      page.appendChild(family);
      page.appendChild(duration);
      page.appendChild(growth);
      randomPlant.appendChild(page);
    
      localStorage.setItem("plantCommonName", data.CommonName);
    }
    
    button.addEventListener("click", randomPlant);
  })}