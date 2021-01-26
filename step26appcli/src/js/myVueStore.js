import Vuex from 'vuex'
import Vue from 'vue'

import Constant from './Constant.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        languagelist: [
            { id: 1, language: "Python", lang: false },
            { id: 2, language: "Java", lang: true },
            { id: 3, language: "JavaScript", lang: false },
            { id: 4, language: "SQL", lang: false },
        ],
    },
    mutations: {
        [Constant.ADDLANGUAGE]: (oldState, payload) => {
            if (payload !== "") {
                oldState.languagelist.push({
                    id: new Date().getTime(),
                    language: payload,
                    lang: false,
                });
            }
        },
        [Constant.LANGUAGETOGGLE]: (oldState, payload) => {
            let index = oldState.languagelist.findIndex(function (item) {
                return item.id === payload;
            });
            oldState.languagelist[index].lang = !oldState.languagelist[index].lang;
        },
        [Constant.DELETELANGUAGE]: (oldState, payload) => {
            var index = oldState.languagelist.findIndex(function (item) {
                return item.id === payload;
            });
            oldState.languagelist.splice(index, 1);
        },
    }
})