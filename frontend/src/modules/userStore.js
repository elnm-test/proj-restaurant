
import userService from '../services/userService'

var localLoggedInUser = null;
if (sessionStorage.user) localLoggedInUser = JSON.parse(sessionStorage.user);
export default {
    state: {
        loggedInUser: localLoggedInUser
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        async setUser(state, { user }) {
            state.loggedInUser = user;
        }
    },
    actions: {
        async doLogin(context, { userCred }) {
            let user = await userService.doLogin(userCred);
            if(user){
                await context.commit({ type: 'setUser', user })
            }
            return user;
        },
        async doLogout(context) {
            await userService.doLogout();
            await context.commit({ type: 'setUser', user:null })
        }
    }
}