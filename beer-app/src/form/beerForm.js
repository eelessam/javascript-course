import formRow from "./formRow";
import formButton from "./formButton";

export default () => {
    const form = document.createElement('form');
    form.appendChild(formRow('name'));
    form.appendChild(formRow('brewery'));
    form.appendChild(formRow('abv'));
    form.appendChild(formButton());
    return form;
}
