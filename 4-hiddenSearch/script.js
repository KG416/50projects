const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});

// close search if user clicks outside while search is active
document.addEventListener("click", (evt) => {
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == search) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    search.classList.remove('active');
});

// close search if user presses esc while search is active
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && search.classList.contains('active')) {
        search.classList.remove('active');
    }
});