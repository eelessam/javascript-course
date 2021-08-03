import Beer from '../domain/beer';
export default () => {
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Submit';
    button.onclick = (event) => {
        event.preventDefault();
        const beerName = document.querySelector('#nameField').value;
        const breweryName = document.querySelector('#breweryField').value;
        const abv = document.querySelector('#abvField').value;
        
        const lastId = document.querySelector('tbody').children.length;
        
        const submittedBeer = new Beer(beerName, breweryName, abv);
        
        button.dispatchEvent(new CustomEvent('beerSubmitted', {detail: { beer: submittedBeer}, bubbles: true}));
    }
    return button;
}