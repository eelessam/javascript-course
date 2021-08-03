// ES5
// constructor function
function ES5Movie(title, genre, relYear) {
    this.title = title;
    this.genre = genre;
    this.relYear = relYear;
    this.numRatings = 0;
    this.totalRating = 0;
    // added methods here is not ideal; each Movie object will have its own rate and averageRating function
    // this.rate = function(rating) {
    //     this.numRatings++;
    //     this.totalRating += rating;
    // }
    // this.averageRating = function() {
    //     return (this.totalRating / this.numRatings).toFixed(2);
    // }
}

// these functions will be created only once regardless of the number of objects
ES5Movie.prototype.rate = function(rating) {
    this.numRatings++;
    this.totalRating += rating;
}

ES5Movie.prototype.averageRating = function() {
    return (this.totalRating / this.numRatings).toFixed(2);
}

// ES6
class ES6Movie {

    constructor(title, genre, relYear) {
        this.title = title;
        this.genre = genre;
        this.relYear = relYear;
        this.numRatings = 0;
        this.totalRating = 0;
    }

    rate(rating) {
        this.numRatings++;
        this.totalRating += rating;
    }

    averageRating() {
        return (this.totalRating / this.numRatings).toFixed(2);
    }
}

// the new keyword results in the creation of an empty object
// that empty object is passed to the function and ref'd using the this keyword
const movie = new ES6Movie('Wayne\'s World', 'Comedy', 1992);
movie.rate(5);
movie.rate(5);
movie.rate(4);
console.log(movie.averageRating());
