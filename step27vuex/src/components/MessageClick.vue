<!-- Vuex.store를 사용하는 컴포넌트 -->

<template>
    <div id="app">
        <p>메세지 : {{messagenonclick}}</p>
        <!--
            {newData:newValue}
            -newData라는 property로 newValue가 보유한 데이터값을 기반으로 js객체로 생성해서 적용하는 원리
         -->
        값 입력 : <input type="text" v-model="newValue" @change="set({newData:newValue})"> <br>
        <button @click="message"> 머용 </button>
        
    </div>
</template>


<script>
import Constant from '../js/Constant.js'
export default {
    data(){
        return {newValue: ""};
    },
    computed: {
       messagenonclick(){
            return this.$store.state.message;
        },
    },
    methods: {
        set(payload){
            this.$store.commit(Constant.SET1, payload);
        },
         message: function(){
            this.$store.commit(Constant.MESSAGE)
        }
    },
}
</script>