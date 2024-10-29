async function fetchExchangeRate() {
    const url = 'https://www.investing.com/currencies/usd-rub-chart'

    try {
        const response = await fetch(url)
        const data = await response.text()

        const match = data.match(/<div.*?class="text-5xl.*?>(.*?)<\/div>/);

        if (match && match[1]) {
            console.log(`Текущий курс USD/RUB: ${match[1]}`)
        } else {
            console.log('Не удалось получить курс')
        }
    } catch (err) {
        console.log('Ошибка запроса:', err.message)
    }
}

setInterval(fetchExchangeRate, 600);
