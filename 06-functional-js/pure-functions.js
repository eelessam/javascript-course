// a pure function is one that always produces the same output for the given input
// it has no side-effects, e.g. console.log, read/write to storage etc.

const productTableRow = ({desc, price}) => {
    const tr = document.createElement('tr');
    const descCell = document.createElement('td');
    descCell.innerText = desc;
    const priceCell = document.createElement('td');
    priceCell.innerText = price;
    const incrementButtonCell = document.createElement('td');
    const incrementButton = document.createElement('button');
    incrementButton.innerText = 'Increment price by 10p';
    incrementButton.onclick = () => {
        incrementButton.dispatchEvent(new CustomEvent('priceIncremented', 
            {detail: {desc, price: price + 0.1}, bubbles: true}));
    }
    incrementButtonCell.appendChild(incrementButton);
    tr.appendChild(descCell);
    tr.appendChild(priceCell);
    tr.appendChild(incrementButtonCell);
    return tr;
}