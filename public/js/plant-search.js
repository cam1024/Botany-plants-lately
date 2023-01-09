function searchPlants() {
    const query = document.getElementById('query').value;
    fetch(`https://trefle.io/api/plants?q=${query}`)
      .then(response => response.json())
      .then(data => {
        let resultsHTML = '';
        data.forEach(plant => {
          resultsHTML += `
            <div class="plant-card">
              <img src="${plant.image_url}" alt="${plant.common_name}">
              <h2>${plant.common_name}</h2>
              <p>${plant.scientific_name}</p>
              <p>${plant.family_common_name}</p>
              <p>${plant.duration}</p>
              <p>${plant.growth_habit}</p>
            </div>
          `;
        });
        document.getElementById('results').innerHTML = resultsHTML;
      })
      .catch(error => {
        console.error(error);
      });
  }
  