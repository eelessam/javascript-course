import Beer from "../domain/beer"

export default class {

    constructor(...initalBeers) {
        this.beerList = new Map();
        initalBeers.forEach(initalBeer => this.saveBeer(initalBeer));
    }

    saveBeer(beer) {
        const beerId = this.beerList.size + 1;
        beer.id = beerId;
        this.beerList.set(beerId, beer);
        return beer;
    }

    updateBeerRatingById(beerId, rating) {
        console.log(beerId)
        console.log(rating)
        const beerToUpdate = this.beerList.get(beerId);
        beerToUpdate.rating = rating;
        this.beerList.set(beerId, beerToUpdate)
        return beerToUpdate;
    }

    getAllBeers() {
        return this.beerList;
    }
}