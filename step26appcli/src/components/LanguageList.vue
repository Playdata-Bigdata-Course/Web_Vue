<style scoped>
* {
    box-sizing: border-box;
}

.header {
  background-color: rgb(30, 206, 191);
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<template>
    <div>
        <div id="header" class="header">
            <h2>language List App</h2>
            <!-- 값 입력 및 추가 버튼 영역-->
            <inputC></inputC>
        </div>

        <!-- language list 영역-->
        <list></list>
    </div>
</template>

<script>
import inputC from './Input.vue';
import list from './List.vue';

export default {
    name: 'LanguageList',
    components:{inputC, list}
};
</script>