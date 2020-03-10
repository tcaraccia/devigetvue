/* eslint-disable no-return-assign */
import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/reddit';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: {},
    posts: [],
    visited: [],
    dismissed: [],
  },
  getters: {
    getPost: (state) => state.post,
    getPosts: (state) => state.posts,
    getVisited: (state) => state.visited,
    getDismissed: (state) => state.dismissed,
  },
  mutations: {
    SET_POST: (state, post) => state.post = post,
    SET_POSTS: (state, posts) => Vue.set(state, 'posts', posts),
    ADD_VISITED: (state, id) => state.visited.push(id),
    ADD_DISMISSED: (state, id) => state.dismissed.push(id),
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await api.fetchPosts();
      commit('SET_POSTS', posts);
    },
    visitPost({ state, commit }, post) {
      const isVisitedPost = state.visited.find((x) => x === post.id);
      commit('SET_POST', post);
      if (!isVisitedPost) {
        commit('ADD_VISITED', post.id);
      }
    },
    dismissPost({ state, commit }, post) {
      const isDismissed = state.dismissed.find((x) => x === post.id);
      if (!isDismissed) {
        commit('ADD_DISMISSED', post.id);
        const dismissedIndex = state.posts.findIndex(({ data }) => data.id === post.id);
        if (dismissedIndex > -1) {
          state.posts.splice(dismissedIndex, 1);
        }
      }
    },
  },

});
