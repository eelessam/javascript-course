// a pure function is one that always produces the same output for the given input
// it has no side effects e.g. console.log, read/write to storeage etc.

const productTableRow = ({desc, price}) => {
    const tr = document.createElement('tr');
    const desCell = document.createElement('td');
    desCell.innerText = desc;
    const priceCell = document.createElement('td');
    priceCell.innerText = price;

    const incremenetButtonCell = document.createElement('td');
    const incrementButton = document.createElement('button');
    incrementButton.innerText = 'Increment price by 10p';
    incrementButton.onclick = () => {
        incrementButton.dispatchEvent(new CustomEvent('priceIncremented', {detail: {desc, price: price + 0.1}}));
    }

    incremenetButtonCell.appendChild(incremenetButton);
    tr.appendChild(desCell);
    tr.appendChild(priceCell);
    tr.appendChild(incremenetButtonCell);

    return tr;
}