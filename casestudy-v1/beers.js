'use strict';
const addNewBeer = (event) => {
let id = beers.length + 1;
    let name = document.querySelector('#nameField').value;
    let brewery = document.querySelector('#breweryField').value;
    let abv = document.querySelector('#abvField').value;
    let beer = {id: id, name: name, brewery: brewery, abv: abv};
    beers.push(beer);
    addBeerToTable(beer);

}

const addBeerToTable = (beer) => {
    let tr = document.createElement('tr');
        tr.setAttribute('id', `row-${beer.id}`);

    let idCell = document.createElement('td');
        idCell.innerText = beer.id;
        
        let nameCell = document.createElement('td');
        nameCell.innerText = beer.name;
        
        let breweryCell = document.createElement('td');
        breweryCell.innerText = beer.brewery;
        
        let abvCell = document.createElement('td');
        abvCell.innerText = beer.abv;
        
        let ratingCell = document.createElement('td');
        ratingCell.setAttribute('id', `rating-row-${beer.id}`)
        if (beers.rating) {
            ratingCell.innerText = beers.rating;
        } else {
            ratingCell.innerText = 'RATE IT!';
        }
        let buttonCell = document.createElement('td');

        let rubbishButton = document.createElement('button');
        rubbishButton.setAttribute('class', 'btn btn-primary');
        rubbishButton.setAttribute('name', rubbishButton);
        rubbishButton.innerHTML = 'Rubbish';
        rubbishButton.onclick = () => {
            beer.rating = rubbishButton.innerHTML;
            updateBeerRating(beer)
        }
        
        let okButton = document.createElement('button');
        okButton.setAttribute('name', okButton);
        okButton.setAttribute('class', 'btn btn-primary');
        okButton.innerHTML = 'Ok';
        okButton.onclick = () => {
            beer.rating = okButton.innerHTML;
            updateBeerRating(beer)
        }
        
        let greatButton = document.createElement('button');
        greatButton.setAttribute('name', greatButton);
        greatButton.setAttribute('class', 'btn btn-primary');
        greatButton.innerHTML = 'Great';
        greatButton.onclick = () => {
            beer.rating = greatButton.innerHTML;
            updateBeerRating(beer)
        }
       

        buttonCell.appendChild(rubbishButton);
        buttonCell.appendChild(okButton);
        buttonCell.appendChild(greatButton);

        tr.appendChild(idCell);
        tr.appendChild(nameCell);
        tr.appendChild(breweryCell);
        tr.appendChild(abvCell);
        tr.appendChild(ratingCell);
        tr.appendChild(buttonCell);

        document.querySelector('tbody').appendChild(tr);
};

const updateBeerRating = (beer) => {
    let row = document.querySelector(`#rating-row-${beer.id}`);
    row.innerText = beer.rating;
}

let beers = [
    {id: 1, name: 'Snake Eyes', brewery: 'Two by Two', abv: 5},
    {id: 2, name: 'Green', brewery: 'Almasty', abv: 5},
    {id: 3, name: 'Jakehead', brewery: 'Wylam', abv: 6.2},
    {id: 4, name: 'Hickey the Rake', brewery: 'Wylam', abv: 5.2}
];

beers.forEach(beer => addBeerToTable(beer));
