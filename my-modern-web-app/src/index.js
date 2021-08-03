import Person from './person';
import { heading } from './heading';

window.onload = () => {
    const person = new Person('Stuart', 43);
    const {name} = person;
    document.body.appendChild(heading(name));
}