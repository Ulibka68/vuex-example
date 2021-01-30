# vuex-example

## Project setup
```
npm install
```

проблема в store src/store/index.ts

При вызове мутации из компонента  
src/components/HelloWorld.vue

store.commit("addParm2", { addParm: 3 });

компиляция проходит, warning нет, но тем не менее в runtime конечно выдает ошибку