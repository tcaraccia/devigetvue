<template>
<v-container fluid fill-height>
  <v-row style="height:100%">
    <v-col cols="3">
      <card v-for="card in cards" :key="card.id" :post="card.data"/>
    </v-col>
    <v-col cols="9">
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Card from '@/components/Card.vue';
import Api from '@/api/reddit';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data: () => ({
    cards: Api.data.children,
  }),
};
</script>
