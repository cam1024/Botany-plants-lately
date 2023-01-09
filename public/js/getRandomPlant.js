function getRandomPlant() {
    fetch('https://trefle.io/api/plants/random')
      .then(response => response.json())
      .then(data => {
        // Display information about the plant in the DOM
        const plant = data[0];
        document.getElementById('common-name').textContent = plant.common_name;
        document.getElementById('scientific-name').textContent = plant.scientific_name;
        document.getElementById('family').textContent = plant.family_common_name;
        document.getElementById('duration').textContent = plant.duration;
        document.getElementById('growth-habit').textContent = plant.growth_habit;
        document.getElementById('image').src = plant.image_url;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  document.getElementById('button').addEventListener('click', getRandomPlant);
  