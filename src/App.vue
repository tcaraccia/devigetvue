<template>
  <v-app dark>
    <v-navigation-drawer  app  permanent dark width="340" v-model="drawer" >
      <v-app-bar app clipped-left>
      <div class="white--text mx-auto">Reddit Posts</div>
      </v-app-bar>
      <div class="mt-12">
        <card
          v-for="card in cards"
          :key="card.id"
          :post="card.data"
          @visit="onVisitPost"
          @dismiss="onDismissPost"
          :visited="isVisited"
      />
      </div>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'App',
  components: {
    Card,
  },
  data: () => ({
    drawer: true,
  }),
  computed: {
    cards() {
      return this.$store.getters.getPosts;
    },
    selected() {
      return this.$store.getters.getPost;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  },
  methods: {
    isVisited(postId) {
      const visited = this.$store.getters.getVisited;
      return visited.includes(postId);
    },
    onDismissPost(post) {
      this.$store.dispatch('dismissPost', post);
    },
    onVisitPost(post) {
      this.$store.dispatch('visitPost', post);
    },
  },
};
</script>
