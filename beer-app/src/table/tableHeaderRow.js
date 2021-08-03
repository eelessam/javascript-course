export default (...headers) => {
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');
    headers.forEach((header) => {
        const columnHeader = document.createElement('th');
        columnHeader.innerText = header;
        tableRow.appendChild(columnHeader);
    });
    tableHead.appendChild(tableRow);
    return tableHead;
}