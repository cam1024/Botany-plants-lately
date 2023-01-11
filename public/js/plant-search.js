const search = document.querySelector("#query");
search.addEventListener('submit', searchPlants);
const token = "token"

function searchPlants() {
    const query = document.getElementById('query').value;
   const url = `https://trefle.io/api/plants?q=${query}&token=${token}`;
    fetch(url)
    console.log(response)
      .then(response => response.json())
      console.log(response)
      .then(data => {
        let resultsHTML = '';
        data.forEach(plant => {
          resultsHTML += `
            <div class="plant-card">
              <img src="${plant.image_url}" alt="${plant.common_name}">
              <h2>${plant.common_name}</h2>
              <p>${plant.scientific_name}</p>
              <p>${plant.family_common_name}</p>
              <p>${plant.family}</p>
              <p>${plant.observations}</p>
            </div>
          `;
        });
        document.getElementById('results').innerHTML = resultsHTML;
      })
      .catch(error => {
        console.log(error);
      });
  }
  