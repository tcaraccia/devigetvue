<template>
  <v-card class="mx-auto" outlined>
    <v-card-subtitle>
      <v-row class="text-left ma-0 pa-0" no-gutters>
        <v-col cols="1">
          <v-icon
            :color="visited(post.id) ? 'white' : 'primary'"
            size="15"
           >
           {{visited(post.id) ? 'mdi-circle-outline' : 'mdi-circle'}}
          </v-icon>
        </v-col>
        <v-col>
          {{ post.author }}
        </v-col>
        <v-col class="text-right">
          {{ $moment.unix(post.created_utc) | moment("from", "now") }}
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text @click="$emit('visit', post)">
      <v-row>
        <v-col cols="4" v-show="post.thumbnail">
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
          <v-btn icon color="red" @click.native="$emit('dismiss', post)">
            <v-icon color="red">mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <div class="ml-2">
            Dismiss Post
          </div>
        </v-col>
        <v-col cols="5" class="text-right">
          <div class="orange--text">{{ post.num_comments }} Comments</div>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ReditCard',
  props: {
    visited: {
      type: Function,
      required: true,
      default: () => ({}),
    },
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
