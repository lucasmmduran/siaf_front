<template>
  <div class="tw-fixed tw-pt-28 tw-px-2 tw-bg-gray-100 tw-z-10 2xl:tw-w-20 tw-w-32 tw-min-h-screen tw-h-auto tw-text-sm">
    <div class="tw-flex tw-flex-col tw-space-y-6 tw-text-gray-700">
      <RouterLink
        to="/planes"
        class="tw-border-b tw-pb-4 tw-text-center tw-border-gray-300"
        :class="{'tw-text-active tw-font-bold': isActive('/planes')}"
      >
        Planes
      </RouterLink>
      <!-- <RouterLink
        to="/procesos"
        class="tw-border-b pb-4 tw-text-center tw-border-gray-300"
        :class="{'tw-text-active tw-font-bold': isActive('/procesos')}"
      >
        Procesos
      </RouterLink>
      <RouterLink
        to="/partidas"
        class="tw-pb-4 tw-text-center"
        :class="{'tw-text-active tw-font-bold': isActive('/partidas')}"
      >
        Partidas
      </RouterLink> -->
    </div>
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
.tw-text-active {
  color: #242C4F;
}
.tw-font-bold {
  font-weight: bold;
}
</style>
