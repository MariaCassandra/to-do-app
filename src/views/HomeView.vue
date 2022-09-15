<template>
  <div class="home">
  <NewTask />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import NewTask from '@/components/NewTask.vue';

export default {
  name: 'HomeView',
  components: {
    NewTask,
  },
  computed: {
    ...mapState(taskStore, ['tasks']),
  },
  methods: {
    ...mapActions(taskStore, ['fetchTasks']),
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style>
h1 {
  padding: 1rem;
}

</style>
