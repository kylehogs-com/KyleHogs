// Wrap each character in a span for individual animation
const h1 = document.getElementById('bouncing-text');
const link = h1.querySelector('a');
const text = link.textContent;
link.textContent = '';

for (let char of text) {
    const span = document.createElement('span');
    span.textContent = char;
    link.appendChild(span);
}
