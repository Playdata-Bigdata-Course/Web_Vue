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
    <li v-for="task in languagelist" :key="task.id" v-bind:class="checked(task.lang)" v-on:click="langToggle(task.id)">
      <span>{{ task.language }}</span>
      <span v-if="task.lang"> (완료)</span>

      <span class="close" v-on:click.stop="deletelanguage(task.id)">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
import eventBus from '../EventBus'
export default {
    name: 'List',
    created: function () {
    eventBus.$on("add-language", this.addlanguage);
  },
  data: function () {
    return {
      languagelist: [
        { id: 1, language: "Python", lang: false },
        { id: 2, language: "Java", lang: true },
        { id: 3, language: "JavaScript", lang: false },
        { id: 4, language: "SQL", lang: false },
      ],
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
    addlanguage: function (language) {
      if (language !== "") {
        this.languagelist.push({
          id: new Date().getTime(),
          language: language,
          lang: false,
        });
      }
    },
    langToggle: function (id) {
      let index = this.languagelist.findIndex(function (item) {
        return item.id === id;
      });
      this.languagelist[index].lang = !this.languagelist[index].lang;
    },
    deletelanguage: function (id) {
      var index = this.languagelist.findIndex(function (item) {
        return item.id === id;
      });
      this.languagelist.splice(index, 1);
    },
  },
};
</script>