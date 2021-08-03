export const heading = name => {
    const heading = document.createElement('h1');
    heading.innerText = `Hello ${name}`;
    return heading;
};