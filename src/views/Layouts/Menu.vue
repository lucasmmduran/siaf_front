<template>
  <div class="flex flex-col space-y-6 text-gray-700">
    <RouterLink
      to="/cabeceras"
      :class="{'text-active font-bold': isActive('/cabeceras')}"
    >
      Cabeceras
    </RouterLink>
    <RouterLink
      to="/procesos"
      :class="{'text-active font-bold': isActive('/procesos')}"
    >
      Procesos
    </RouterLink>
    <RouterLink
      to="/partidas"
      :class="{'text-active font-bold': isActive('/partidas')}"
    >
      Partidas
    </RouterLink>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const isActive = (path) => route.path === path;

    return {
      isActive,
    };
  },
};
</script>

<style scoped>
.text-active {
  color: #242C4F;
}
.font-bold {
  font-weight: bold;
}
</style>
