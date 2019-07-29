<template>
  <transition name="slide-fade" mode="out-in">
    <form @submit.prevent="createNewTask">
      <div class="row">
        <div class="input-field col s12">
          <input id="task" type="text" v-model="description" />
          <label for="task">Nova Tarefa</label>
        </div>
      </div>
    </form>
  </transition>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateY(10px);
  height: 100%;
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-120px);
  height: 0;
  opacity: 0;
}
</style>
