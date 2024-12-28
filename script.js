const apiKey = '8887a6afbfd8a53d21fb34919679881e';
const exchangeRateElement = document.getElementById('exchange-rate');

async function fetchExchangeRate() {
    try {
        const response = await fetch(`https://api.exchangerate.host/latest?apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(`API error! message: ${data.error}`);
        }
        const rate = data.rates.USD;
        exchangeRateElement.textContent = `1 EUR = ${rate} USD`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        exchangeRateElement.textContent = `Error loading data: ${error.message}`;
    }
}

// Fetch exchange rate every 10 seconds
setInterval(fetchExchangeRate, 10000);
fetchExchangeRate();