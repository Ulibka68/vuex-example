import { InjectionKey } from "vue";
import { createLogger, createStore, MutationTree, Store, useStore } from "vuex";

// define your typings for the store state
export interface State {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

const mutations: MutationTree<State> = {
  addParm(state: State, payload: { addParm: number }): void {
    state.count += payload.addParm;
  },
};

export const store = createStore<State>({
  state: { count: 0 },
  mutations,
  actions: {},
  modules: {},
  plugins: [createLogger()],
});

// define your own `useStore` composition function
// warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types

export function myUseStore(): Store<State> {
  return useStore(key);
}
