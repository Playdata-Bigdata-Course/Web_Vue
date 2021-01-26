<style scoped>
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
}

ul li:hover {
  background: #ddd;
}

/* li class='checked' 인 경우에 line 표기 */
ul li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

.completed {
  text-decoration: none;
}
</style>

<template>
  <ul>
    <li
      v-for="task in languagelist"
      :key="task.id"
      v-bind:class="checked(task.lang)"
      v-on:click="langToggle(task.id)"
    >
      <span>{{ task.language }}</span>
      <span v-if="task.lang"> (완료)</span>

      <span class="close" v-on:click.stop="deletelanguage(task.id)"
        >&#x00D7;</span
      >
    </li>
  </ul>
</template>

<script>
import eventBus from "../EventBus";
import Constant from "../js/Constant.js";
import Vuex from "../js/myVueStore.js";
export default {
  name: "List",
  created: function () {
    eventBus.$on("add-language", this.addlanguage);
  },
  data: function () {
    return {
      languagelist: Vuex.state.languagelist,
    };
  },

  methods: {
    checked: function (lang) {
      if (lang) {
        return { checked: true };
      } else {
        return { checked: false };
      }
    },
    addlanguage: function (payload) {
      Vuex.commit(Constant.ADDLANGUAGE, payload);
    },
    langToggle: function (payload) {
      Vuex.commit(Constant.LANGUAGETOGGLE, payload);
    },
    deletelanguage: function (payload) {
      Vuex.commit(Constant.DELETELANGUAGE, payload);
    },
  },
};
</script>