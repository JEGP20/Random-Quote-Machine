document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('text');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteText.textContent = data.content;
            quoteAuthor.textContent = `- ${data.author}`;
            tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${data.content} - ${data.author}`;

            // Cambiar el color de fondo y del texto aleatoriamente
            const randomColor = generateRandomColor();
            document.body.style.backgroundColor = randomColor;
            quoteText.style.color = randomColor;
            quoteAuthor.style.color = randomColor;
            newQuoteButton.style.backgroundColor = randomColor;
            tweetQuoteButton.style.backgroundColor = randomColor;
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    // Función para generar un color aleatorio hexadecimal
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    newQuoteButton.addEventListener('click', fetchQuote);

    fetchQuote();
});
