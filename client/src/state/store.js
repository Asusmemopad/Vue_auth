import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token: String
    },
    getters:{
        getToken: state => state.token
    },
    actions:{
        setToken(context, token){
            context.commit('setToken', token);
            t
        }
    },
    mutations:{
        setToken(state, payload){
            state.token = payload
        }
    }
})