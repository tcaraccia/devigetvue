<template>
<v-container fluid>
      <post v-if="selected" :post="selected"/>
</v-container>
</template>

<script>

import Post from '@/components/Post.vue';

export default {
  name: 'Home',
  components: {
    Post,
  },
  computed: {
    selected() {
      return this.$store.getters.getPost;
    },
  },
};
</script>
