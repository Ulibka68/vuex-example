<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Count : {{ count }}</p>
    <button @click="handle5">Добавить 5</button>
    <button @click="handle5v2">Добавить 3 ver 2</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { myUseStore } from "@/store";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const store = myUseStore();

    const count = computed(() => store.state.count);

    const handle5 = () => {
      store.commit({ type: "addParm", addParm: 5 });
    };
    const handle5v2 = () => {
      store.commit("addParm2", { addParm: 3 }); // при runtime ошибка - такой мутации нет
    };

    return {
      count,
      handle5,
      handle5v2,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
