<template>
  <div class="home">
  <NavBar />
  <NewTask />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import NavBar from '@/components/NavBar.vue';
import NewTask from '@/components/NewTask.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
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
