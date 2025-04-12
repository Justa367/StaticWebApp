const buttons = document.querySelectorAll('button');

const messages = [
    "Dzięki za okejkę! 🥤",
    "Farby dekoral lubią Cię jeszcze bardziej! 🎨",
    "PM już pakuje książkę dla Ciebie! 📘",
    "Twoja okejka została zapisana w chmurze... może 🌩️",
    "Zgłosiłem Twój gust do konkursu na najlepszego konesera stylu 😎"
];


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        alert(messages[index] || "Dziękujemy za interakcję! 🎉");
    });
});
