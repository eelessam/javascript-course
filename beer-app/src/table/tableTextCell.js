export default (cellText) => {
const cell = document.createElement('td');
    cell.innerText = cellText;
    return cell;
}