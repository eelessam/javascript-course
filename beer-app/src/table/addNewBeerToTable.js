import createNewRow from "./createNewRow";

export default (beer) => {
    const row = createNewRow(beer);
    document.querySelector('tbody').appendChild(row);
};