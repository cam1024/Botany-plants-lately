const search = document.querySelector("#query");
search.addEventListener('button', searchPlants);


function searchPlants(event) {
  event.preventDefault();
  console.log('insertPlant')
    const query = document.getElementById('query').value;
  
   fetch(`/${query}`)
    // fetch(url,{mode:"no-cors"})
    //   .then(response => console.log(response))
    //   .then(data => {
    //     let resultsHTML = '';
    //     data.forEach(plant => {
    //       resultsHTML += `
    //         <div class="plant-card">
    //           <img src="${plant.image_url}" alt="${plant.common_name}">
    //           <h2>${plant.common_name}</h2>
    //           <p>${plant.scientific_name}</p>
    //           <p>${plant.family_common_name}</p>
    //           <p>${plant.family}</p>
    //           <p>${plant.observations}</p>
    //         </div>
    //       `;
    //     });
    //     document.getElementById('results').innerHTML = resultsHTML;
    //   })
      .catch(error => {
        console.log(error);
      });
  }
  