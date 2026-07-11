// Wrap each character in a span for individual animation
const h1 = document.getElementById('bouncing-text');
const text = h1.textContent;
h1.textContent = '';

for (let char of text) {
    const span = document.createElement('span');
    span.textContent = char;
    h1.appendChild(span);
}
