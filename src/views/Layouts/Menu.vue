<template>
  <div>
    <div class="menus-hamburguesa btn-group dropend">
      <!-- Botón del menú -->
      <a
        class="btn-burger tw-cursor-pointer"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
      >
        <i
          class="fa-solid fa-bars"
          :class="{ 'd-none': isMenuOpen }"
        ></i>
        <i
          class="fa-solid fa-xmark"
          :class="{ 'd-none': !isMenuOpen }"
        ></i>
      </a>

      <!-- Menú desplegable -->
      <ul
        class="dropdown-menu dropdown-menu-burger"
        :class="{ 'd-block' : isMenuOpen }"
        v-if="isMenuOpen"
      >
        <li class="dropdown-item-burger">
          <RouterLink 
            to="/planes"
            @click="handleLinkClick"
          >
            <div class="dropdown-menu-item active">
              <span class="icons-menu-hamburguesa">
                <i class="fa-solid fa-file-lines"></i>
              </span>
              Planes
            </div>
          </RouterLink>
        </li>
        <li class="dropdown-item-burger">
          <RouterLink to="" class="tw-cursor-not-allowed">
            <div class="dropdown-menu-item">
              <span class="icons-menu-hamburguesa">
                <i class="fa-solid fa-table-cells"></i>
              </span>
              <span class="tw-text-gray-400">Tableros</span>
            </div>
          </RouterLink>
        </li>
        <li class="dropdown-item-burger">
          <RouterLink to="" class="tw-cursor-not-allowed">
            <div class="dropdown-menu-item">
              <span class="icons-menu-hamburguesa">
                <i class="fa-solid fa-clipboard-question"></i>
              </span>
              <span class="tw-text-gray-400">Consultas</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Fondo oscuro cuando el menú está abierto -->
    <div
      id="layoutblackMenu"
      class="layout-black"
      :class="{ 'd-none': !isMenuOpen }"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

    // Variable reactiva para controlar el estado del menú
    const isMenuOpen = ref(false);

    // Métodos
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    const handleLinkClick = () => {
      closeMenu();
    };

    const handleOutsideClick = (event) => {
      const menu = document.querySelector(".dropdown-menu");
      const button = document.querySelector(".btn-burger");

      // Si el clic ocurre fuera del menú y del botón, cierra el menú
      if (
        !menu?.contains(event.target) &&
        !button?.contains(event.target) &&
        isMenuOpen.value
      ) {
        closeMenu();
      }
    };

    // Añadimos y eliminamos el evento al montar y desmontar
    onMounted(() => {
      document.addEventListener("click", handleOutsideClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleOutsideClick);
    });

</script>

<style scoped>
/* Ajusta tus estilos según tu diseño */
.layout-black {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.d-none {
  display: none;
}
</style>


<!-- <template>  <div class="col-1 d-flex justify-content-center pt-3 pe-0">
          <div class="menus-hamburguesa btn-group dropend">
            <a class="btn-burger" href="#" id="btnDropBurgerMenu" role="button" aria-expanded="false">
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-xmark d-none"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-burger" aria-labelledby="btnDropBurgerMenu" id="dropdownMenuHamburguesa">
                <li class="dropdown-item-burger">
                  <RouterLink
                    to="/planes"
                    class="dropdown-menu-item active"
                  >
                  <span class="icons-menu-hamburguesa"><i class="fa-solid fa-file-lines"></i></span> Planes
                  </RouterLink>
                  
                </li>
                <li class="dropdown-item-burger"><button class="dropdown-menu-item" type="button" href="#"><span class="icons-menu-hamburguesa"><i class="fa-solid fa-table-cells"></i></span> Tableros</button></li>
                <li class="dropdown-item-burger"><button class="dropdown-menu-item" type="button" href="#"><span class="icons-menu-hamburguesa"><i class="fa-solid fa-clipboard-question"></i></span> Consultas</button></li>
            </ul>
          </div>
        </div>
</template> -->


<!-- <template>
  <div class="tw-fixed tw-pt-28 tw-px-2 tw-bg-gray-100 tw-z-10 2xl:tw-w-20 tw-w-32 tw-min-h-screen tw-h-auto tw-text-sm">
    <div class="tw-flex tw-flex-col tw-space-y-6 tw-text-gray-700">
      <RouterLink
        to="/planes"
        class="tw-border-b tw-pb-4 tw-text-center tw-border-gray-300"
        :class="{'tw-text-active tw-font-bold': isActive('/planes')}"
      >
        Planes
      </RouterLink>
      <RouterLink
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
      </RouterLink>
    </div>
  </div>
</template> -->

<!-- <script>
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
 -->