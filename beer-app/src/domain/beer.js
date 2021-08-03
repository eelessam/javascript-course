export default class {
    constructor(name, brewery, abv, rating = 'Pending') {
        this.id = null;
        this.name = name;
        this.brewery = brewery;
        this.abv = abv;
        this.rating = rating;
    }

    rate(rating) {
        this.rating = rating;
    }
}