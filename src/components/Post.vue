<template>
  <v-container>
      <v-row>
          <v-col cols="12">
              <div  >{{post.author}}</div>
          </v-col>
      </v-row>
      <v-row justify="center">
          <v-col cols="12">
              <v-img :src="post.thumbnail" height="150" width="150" class="mx-auto"></v-img>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <div>{{post.title}}</div>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style>

</style>
