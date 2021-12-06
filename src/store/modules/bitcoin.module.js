import btcService from '@/services/bitcoin.service'

export const bitcoinModule = {
    state: {
        rate: null,
        rateTime: null,
        res: null,
    },
    getters: {
        rate({ rate }) {
            return rate;
        },
        rateTime({ rateTime }) {
            return rateTime;
        },
        res({ res }) {
            return res;
        }
    },
    mutations: {
        setRate(state, { rate }) {
            state.rate = rate;
        },
        setRateTime(state, { rateTime }) {
            state.rateTime = rateTime;
        },
        setSocketStatus(state, { res }) {
            state.res = res;
        }

    },
    actions: {
        async getMarketPrice({ commit }) {

            try {
                const ws = await btcService.setSocket();
                ws.onmessage = function (event) {
                    let res = JSON.parse(event.data);
                    let rate = parseFloat(res.p).toFixed(2);
                    let rateTime = new Date(res.T).toLocaleTimeString('en-GB') 
                    commit({
                        type: 'setSocketStatus',
                        res,
                    })
                    commit({
                        type: 'setRate',
                        rate,
                    })
                    commit({
                        type: 'setRateTime',
                        rateTime,
                    })
                }

            } catch (err) {
                console.log('Problems with getting rate', err)
            }
        }
    },

}

