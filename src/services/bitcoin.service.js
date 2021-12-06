
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

    var options = {
        method: 'GET',
        url: 'https://latest-crypto-news.p.rapidapi.com/newsbtc/crypto/latest',
        headers: {
            'x-rapidapi-host': 'latest-crypto-news.p.rapidapi.com',
            'x-rapidapi-key': '3b5960da06msh2df7fdd15f081f6p150001jsn04b18f563b6f'
        }
    };

        const news = await axios.request(options)
        return news.data
}
