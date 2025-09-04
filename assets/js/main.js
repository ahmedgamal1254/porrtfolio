function openPopup(card) {
    // Get data from the card
    const imageSrc = card.querySelector('.card-image').src;
    const title = card.querySelector('.card-title').textContent;
    const url = card.querySelector('.card-title').getAttribute("data-url");
    const description = card.querySelector('.card-description').getAttribute("data-desc");

    // Set data in the popup
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').innerHTML = description;
    document.getElementById("btn_url").setAttribute("href",url)

    // Show the popup
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}