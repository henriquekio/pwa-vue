<template>
  <div class="row">
    <ul class="collection" v-if="taskList.length > 0">
      <li
        class="collection-item"
        v-for="task in taskList"
        v-bind:key="task.key"
      >
        <div>
          {{ task.value.description }}
          <p class="secondary-content no-padding" style="margin: 0">
            <label>
              <input
                type="checkbox"
                @click="changeStatusTask(task, task.key)"
                v-model="task.value.done"
              />
              <span></span>
            </label>
          </p>
        </div>
      </li>
    </ul>
    <ul v-else class="collection">
      <li class="collection-item"><h6 class="center">Não há tarefas =)</h6></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: { taskList: { type: Array, required: true, default: () => [] } },
  methods: {
    changeStatusTask(task = {}, key = 0) {
      task = { description: task.value.description, done: !task.value.done };
      this.$emit("updateTask", { task, key });
    }
  }
};
</script>

<style scoped></style>
