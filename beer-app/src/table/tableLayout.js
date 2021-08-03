import createTableHeaderRow from "./tableHeaderRow";

export default () => {
    const table = document.createElement('table');
    table.id = 'beersTable';
    table.className= 'table';
    table.appendChild(createTableHeaderRow('ID', 'Name', 'Brewery', 'ABV', 'Rating', 'Rate it!'));
    table.appendChild(document.createElement('tbody'));
    
    return table;
}