<template>
  <main>
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <h4>Minhas Tarefas</h4>
        <form-task v-on:updateListTasks="getTasks" />
        <task-list v-on:updateTask="setTask" v-bind:task-list="tasks" />
      </div>
    </div>
  </main>
</template>

<script>
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import TaskListService from "../services/TaskListService";

export default {
  name: "MainApp",
  components: { TaskList, FormTask },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async getTasks() {
      this.tasks = await TaskListService.getTasks();
    },
    async setTask(value) {
      const {
        task: { description, done }
      } = value;
      await TaskListService.setTask({ description, done }, value.key);
      this.getTasks();
    }
  },
  mounted() {
    this.getTasks();
  }
};
</script>

<style scoped></style>
