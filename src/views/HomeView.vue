<template>
  <ApplicationView />
</template>

<script>
import { defineComponent } from 'vue';
import ApplicationView from './ApplicationView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ApplicationView,
  },
});
</script>
