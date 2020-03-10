/* eslint-disable no-return-assign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: {},
    posts: [],
    visited: [],
  },
  getters: {
    getPost: (state) => state.post,
  },
  mutations: {
    SET_POST: (state, post) => state.post = post,
    ADD_VISITED: (state, id) => state.visited.push(id),
  },
  actions: {
    async visitPost({ state, commit }, post) {
      const isVisitedPost = state.posts.find((x) => x === post.id);
      await commit('SET_POST', post);
      if (!isVisitedPost) {
        await commit('ADD_VISITED', post.id);
      }
    },
  },

});
