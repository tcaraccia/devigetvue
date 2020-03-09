<template>
  <v-card class="mx-auto" outlined>
    <v-card-subtitle>
      <v-row class="text-left ma-0 pa-0" no-gutters>
        <v-col cols="1">
          <v-icon color="primary" size="15">mdi-circle</v-icon>
        </v-col>
        <v-col>
          {{ post.author }}
        </v-col>
        <v-col class="text-right">
          {{ new Date(post.created) | moment("from", "now") }}
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-img :src="post.thumbnail" height="75" width="75"> </v-img>
        </v-col>
        <v-col cols="8" class="justify-text">
          <p v-line-clamp="3">{{ post.title }}</p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row align="center">
        <v-col cols="1">
          <v-btn icon><v-icon>mdi-close-circle-outline </v-icon> </v-btn>
        </v-col>
        <v-col>
          Dismiss Post
        </v-col>
        <v-col cols="6">
          <div>{{ post.num_comments }} Comments</div>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ReditCard',
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
.truncated {
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
