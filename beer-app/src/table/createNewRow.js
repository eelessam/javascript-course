import tableTextCell from "./tableTextCell";
import ratingButtonCell from "./ratingButtonCell";

export default (beer) => {

    const tr = document.createElement('tr');
    tr.setAttribute('id', `row-${beer.id}`);   

    const idCell = tableTextCell(beer.id);
    const nameCell = tableTextCell(beer.name);
    const breweryCell = tableTextCell(beer.brewery);    
    const abvCell = tableTextCell(beer.abv)
    const ratingCell = tableTextCell(beer.rating)
    const ratingButtonsCell = ratingButtonCell(beer.id);
    
    tr.appendChild(idCell);
    tr.appendChild(nameCell);
    tr.appendChild(breweryCell);
    tr.appendChild(abvCell);
    tr.appendChild(ratingCell);
    tr.appendChild(ratingButtonsCell);

    return tr;
};