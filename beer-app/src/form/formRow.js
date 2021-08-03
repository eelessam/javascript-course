import capiltaliseFirstLetter from "../utils/capiltaliseFirstLetters"

export default (fieldName) => {

    const parentDiv = document.createElement('div');
    parentDiv.className = 'mb-3';
    
    const label = document.createElement('label');
    label.for = fieldName;
    label.className = `from-${fieldName}`;
    label.innerText = capiltaliseFirstLetter(fieldName);

    const input = document.createElement('input');
    input.id = `${fieldName}Field`;
    input.type = 'text';
    input.className = 'form-control';

    parentDiv.appendChild(label);
    parentDiv.appendChild(input);

    return parentDiv;
}