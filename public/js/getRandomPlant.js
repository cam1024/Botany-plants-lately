//global
const grpButton = document.getElementById("GRP");
var randomPlant = document.querySelector(".randomPlant");
let randomPlantId = [];
const arrayLength = 6;

console.log("linked");
//number generator for plant ID
function randomPlantId1() {
  randomPlantId = [];
  for (let i = 0; i < arrayLength; i++) {
    randomPlantId.push(Math.floor(Math.random() * 11));
  }
  //stringify plant ID in array
  randomPlantId = randomPlantId.join("");
}
function getRandomPlant(event) {
  event.preventDefault();
  console.log("click");
  randomPlantId1();
 /* fetch("/trefle-token")
    .then(function (response) {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ token }) => {
      console.log(token)*/
      
      var url =
        "/plants/" + randomPlantId;
      fetch(url)
        .then(function (response) {
          console.log(response);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          if (data.error) {
            randomPlant.innerHTML = "Please wait while the plant loads";
            randomPlantId1();
          } else {
            data=data[0]
          /*document.getElementById('button').addEventListener('click', getRandomPlant);*/
            randomPlant.innerHTML = " ";
            var page = document.createElement("div");
            var common_name = document.createElement("h1");
            var image = document.createElement("img");
            var scientific_name = document.createElement("p");
            var family_common_name = document.createElement("p");
            var family = document.createElement("p");
            var observation = document.createElement("p");
            var randomPlantButton = document.getElementById("GRP");

            //adding classes to generated elements
            page.classList.add("plantPage");
            common_name.classList.add("plantCommon");
            image.classList.add("image-pod");
            scientific_name.classList.add("plantScientific");
            family_common_name.classList.add("plantFamily_Common_Name");
            family.classList.add("plantFamily");
            observation.classList.add("plantObservation");

            //displaying content from API on page
            common_name.textContent = data.common_name;
            image.setAttribute("src", data.image_url);
            scientific_name.textContent = data.scientific_name;
            family_common_name.textContent = data.family_common_name;
            family.textContent = data.Family;
            observation.textContent = data.Observation;

            page.appendChild(common_name);
            randomPlantButton.appendChild(image);
            page.appendChild(scientific_name);
            page.appendChild(family_common_name);
            page.appendChild(family);
            page.appendChild(observation);
            randomPlant.appendChild(page);

            localStorage.setItem("plantCommonName", data.CommonName);
          }
        })
        .catch(function (error) {
          randomPlant.innerHTML = "There was an error: " + error;
        });
 /*   }); //https://trefle.io/api/plants/random//*/
}
grpButton.addEventListener("click", getRandomPlant);
