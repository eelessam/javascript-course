export default(rating, beerId) => {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-primary m-1');
    button.innerHTML = rating;
    button.onclick = () => {
        button.dispatchEvent(new CustomEvent('beerRated', {detail: { beerId, rating}, bubbles: true}));
    }
    return button;
}