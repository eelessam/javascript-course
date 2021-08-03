import ratingButton from "./ratingButton";

export default (beerId) => {
    const buttonCell = document.createElement('td');

    const rubbishButton = ratingButton('Rubbish', beerId);
    
    const okButton = ratingButton('Ok', beerId);

    const greatButton = ratingButton('Great', beerId);

    buttonCell.appendChild(rubbishButton);
    buttonCell.appendChild(okButton);
    buttonCell.appendChild(greatButton);

    return buttonCell;
}