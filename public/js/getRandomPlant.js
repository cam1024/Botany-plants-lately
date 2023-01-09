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

//   else {
//     randomMovie.innerHTML = " "
//     var page = document.createElement('div')
//     var title = document.createElement('h1')
//     var image = document.createElement('img')
//     var rating = document.createElement('p')
//     var rated = document.createElement('p')
//     var plot = document.createElement('p')
//     var actors = document.createElement('p')
//     var genre = document.createElement('p')

//     //adding classes to generated elements
//     page.classList.add("content")
//     title.classList.add("movieTitle")
//     image.classList.add("movieImage")
//     rating.classList.add("movieRating")
//     rated.classList.add("movieRated")
//     plot.classList.add("moviePlot")
//     actors.classList.add("movieActors")
//     genre.classList.add("movieGenre")

//     //displaying content from API on page
//     title.textContent = data.Title
//     rating.textContent = data.imdbRating
//     rated.textContent = data.Rated
//     image.setAttribute('src', data.Poster)
//     plot.textContent = data.Plot
//     actors.textContent = data.Actors
//     genre.textContent = data.Genre


//     page.appendChild(title)
//     page.appendChild(rated)
//     page.appendChild(image)
//     page.appendChild(rating)
//     page.appendChild(plot)
//     page.appendChild(actors)
//     page.appendChild(genre)
//     randomMovie.appendChild(page)

//     localStorage.setItem("movieTitle", data.Title);

// }
  
  document.getElementById('button').addEventListener('click', getRandomPlant);

  else {
    randomPlant.innerHTML = " ";
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
    image.classList.add("plantImage");
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
  
  button.addEventListener("click", randomTitle);
  
  