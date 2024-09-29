document.addEventListener("DOMContentLoaded", function() {
    console.log("Stránka je pripravená!");
    
    // Príklad interaktivity
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.addEventListener('click', () => {
            alert(`Klikli ste na ${h2.innerText}`);
        });
    });
});
