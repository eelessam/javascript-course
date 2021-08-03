import createNewRow from "./createNewRow";

export default (beer) => {
        const row = document.querySelector(`#row-${beer.id}`);
        row.replaceWith(createNewRow(beer))
        row.innerText = beer.rating;
};