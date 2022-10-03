<template>
  <div class="home">
    <NavBar />
    <TaskList />
    <NewTask />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import taskStore from '@/store/task';
import NavBar from '@/components/NavBar.vue';
import NewTask from '@/components/NewTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    NewTask,
    TaskList,
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
