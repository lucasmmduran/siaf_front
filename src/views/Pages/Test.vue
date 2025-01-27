<template>
  <div class="container">
    <h1>Mock CRUD con Persistencia Local</h1>

    <!-- Formulario para agregar un nuevo registro -->
    <input v-model="newTodoText" placeholder="Nuevo registro" />
    <button @click="addTodo">Agregar</button>

    <!-- Lista de registros -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- Campo editable para actualizar -->
        <input v-model="todo.text" @blur="updateTodo(todo.id, todo.text)" />
        <!-- Botón para eliminar -->
        <button @click="deleteTodo(todo.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  setup() {
    // Estado reactivo
    const todos = ref([]);
    const newTodoText = ref("");

    // Cargar datos desde Local Storage al montar el componente
    onMounted(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        todos.value = JSON.parse(storedTodos); // Cargar los datos
      }
    });

    // Guardar datos en Local Storage cada vez que el estado cambia
    watch(
      todos,
      (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos)); // Persistir en Local Storage
      },
      { deep: true } // Observar cambios profundos
    );

    // Función para agregar un registro
    const addTodo = () => {
      if (newTodoText.value.trim()) {
        todos.value.push({
          id: Date.now(), // ID único
          text: newTodoText.value,
        });
        newTodoText.value = ""; // Limpiar el input
      }
    };

    // Función para actualizar un registro
    const updateTodo = (id, newText) => {
      const index = todos.value.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos.value[index].text = newText; // Actualizar texto
      }
    };

    // Función para eliminar un registro
    const deleteTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id); // Filtrar
    };

    return {
      todos,
      newTodoText,
      addTodo,
      updateTodo,
      deleteTodo,
    };
  },
};
</script>
