import axios from "axios";

export default {
    setSocket,
    getCryptoNews
}

function setSocket() {
    const BTC_RATE = 'wss://stream.binance.com:9443/ws/btcusdt@trade'
    let ws = new WebSocket(BTC_RATE)
    return ws
}


async function getCryptoNews() {
    console.log(process.env.NEWS_CRYPTO_RAPID_API_KEY);

    var options = {
        method: 'GET',
        url: 'https://latest-crypto-news.p.rapidapi.com/newsbtc/crypto/latest',
        headers: {
            'x-rapidapi-host': 'latest-crypto-news.p.rapidapi.com',
            'x-rapidapi-key': process.env.VUE_APP_NEWS_CRYPTO_RAPID_API_KEY
        }
    };

        const news = await axios.request(options)
        return news.data
}
