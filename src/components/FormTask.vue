<template>
  <form @submit.prevent="createNewTask">
    <div class="row">
      <div class="input-field col s12">
        <input id="task" type="text" v-model="description" />
        <label for="task">Nova Tarefa</label>
      </div>
    </div>
    <div class="fixed-action-btn">
      <button class="btn-floating btn-large red">
        <i class="large material-icons">add</i>
      </button>
    </div>
  </form>
</template>

<script>
import TaskListService from "../services/TaskListService";

export default {
  name: "FormTask",
  data() {
    return {
      description: "",
      done: false
    };
  },
  methods: {
    createNewTask() {
      const { description, done } = this;
      const task = { description, done };
      TaskListService.setTask(task).then(() => {
        this.description = "";
        this.$emit("updateListTasks");
      });
    }
  }
};
</script>

<style scoped></style>
