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
  },
  mutations: {
    SET_POST: (state, post) => state.post = post,
    SET_POSTS: (state, posts) => Vue.set(state, 'posts', posts),
    ADD_VISITED: (state, id) => state.visited.push(id),
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await api.fetchPosts();
      commit('SET_POSTS', posts);
    },
    async visitPost({ state, commit }, post) {
      const isVisitedPost = state.visited.find((x) => x === post.id);
      await commit('SET_POST', post);
      if (!isVisitedPost) {
        await commit('ADD_VISITED', post.id);
      }
    },
  },

});
