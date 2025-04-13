const buttons = document.querySelectorAll('button');

const messages = [
    "Dzięki za okejkę!",
    "Farby dekoral lubią Cię jeszcze bardziej!",
    "PM już pakuje książkę dla Ciebie! ",
    "Twoja okejka została zapisana w chmurze... ",
    "Zgłosiłem Twój gust do konkursu na najlepszego konesera stylu"
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const message = messages[index] || "Dziękujemy za interakcję! 🎉";
        alert(message);

        if (window.appInsights && typeof window.appInsights.trackEvent === "function") {
            window.appInsights.trackEvent({
                name: "ButtonClicked",
                properties: {
                    buttonIndex: index,
                    message: message
                }
            });
        } else {
            console.warn("Application Insights nie jest dostępne");
        }
    });
});
