import userService from '@/services/user.service';

export const userModule = {
    state: {
        loggedInUser: null,
        currView: 'home'
    },
    getters: {
        loggedInUser({ loggedInUser }) {
            return loggedInUser;
        },
        currentView({currView}){
            return currView
        }
    },
    mutations: {
        setLoggedInUser(state, { user }) {
            state.loggedInUser = user;
        },
        setView(state, { currView }) {
            state.currView = currView
        }
    },
    actions: {

        async loadUser({ commit }) {
            const user = userService.getLoggedInUser();
            if (user) commit({ type: 'setLoggedInUser', user });
        },
        async saveUser({ commit }, { creds }) {
            const newUser = await userService.save(creds);
            commit({ type: 'setLoggedInUser', user: newUser });
        },
        async login({ commit }, { creds }) {
            const user = await userService.login(creds);
            commit({ type: 'setLoggedInUser', user });
        },
        async logout({ commit }) {
            await userService.logout();
            commit({ type: 'setLoggedInUser', user: null });
        },

        changeView({ commit }, { currView }) {
            commit({ type: 'setView', currView });
        }
    }
};