import Beer from './domain/beer';
import BeersDao  from './dao/beersDao';
import addNewBeerToTable from './table/addNewBeerToTable';
import updateTableRow from './table/updateTableRow';
import createBeerTable from './table/tableLayout'
import createBeerForm from './form/formLayout';

window.onload = () => {

    // populating a pretend DB
    const beer1 = new Beer('Snake Eyes', 'Two by Two', 5);
    const beer2 = new Beer('Green', 'Almasty', 5);
    const beer3 = new Beer('Jakehead', 'Wylam', 6.2);

    const beersDao = new BeersDao(beer1, beer2, beer3);     

    const container = document.querySelector(".container");
    container.appendChild(createBeerTable());
    container.appendChild(createBeerForm());
    
    beersDao.getAllBeers().forEach(beer => {
        addNewBeerToTable(beer);
    });


    // Is this a good place to add these? Or would you have a file that handled listeners etc? I tried to think of this a bit like lifting state in react
    document.body.addEventListener('beerSubmitted', event => {
        const savedBeer = beersDao.saveBeer(event.detail.beer);
        addNewBeerToTable(savedBeer);
    });

    document.body.addEventListener('beerRated', event => {
        const updatedBeer = beersDao.updateBeerRatingById(event.detail.beerId, event.detail.rating)
        updateTableRow(updatedBeer);
    });

}