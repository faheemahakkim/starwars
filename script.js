fetch('https://swapi.dev/api/people')
.then(res => res.json()) 
.then(data => {
    const characters = document.querySelector('#characters')

    data.results.forEach(character => {
           
       characters.innerHTML += 
          `<div class ="characters">
                <ul><li><h3>${character.name}</h3></li><li>
                <p class="height">£${character.height}</p></li>
                <li><p class ="mass">${character.mass}</p></li>
                <li><p class ="hair_color">${character.hair_color}</p></li>
                <li><p class ="birth_year">${character.birth_year}</li>
                <li><a class ="homeworld" href="${character.homeworld}">Homeworld</a></li>
            </ul>

            </div>
        `
    })

})

console.log('The rest of our code')
