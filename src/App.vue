<template>
  <div class="relative tw-flex tw-flex-col tw-min-h-screen"> 
    
    <header class="formulario-header">
      <section class="header"> 
        <section class="header__nombrelogomenu"> 
          <div class="container"> 
            <div class="row"> 
              <div class="col-lg-4 d-none d-lg-block d-lg-flex"> 
                <a href="#"> 
                  <img class="header__img" src="/img/logo_Mecon_SSGAP_azul.png" alt=""> 
                </a> 
              </div> 
          
              <div v-if="authStore.isAuthenticated" class="col-lg-4 col-sm-6 col-6 d-flex justify-content-lg-center align-items-center justify-content-md-start justify-content-sm-start"> 
                <h4>SIAF LOCAL</h4> 
              </div> 
          
              <div  v-if="authStore.isAuthenticated" class="col-lg-4 col-sm-6 col-6 header__nombrelogomenu__sector z-50"> 
                <div @click.prevent="toggleDropdown" class="menus-usuario">
                  <div class="btn-user" id="btnDropUserMenu" role="button" aria-expanded="false">
                    <img src="/img/icono_user_relleno_negativo.svg" class="icono-activo">
                    <img src="/img/icono_user_relleno_negativo-hover.svg" class="icono-focus d-none">
                  </div>
                  
                  <div v-if="isDropdownOpen" class="tw-absolute tw-right-0 tw-mt-2 tw-w-84 tw-bg-white tw-shadow-lg tw-rounded-md tw-z-50">
                  <ul  class="dropdown-menu-user">
                    <li class="datosUsuario">
                      <span class="datosUsuario--title"> Pepe López - </span>
                      <span class="datosUsuario--title">20-6735627-6</span> <br>
                      <span class="datosUsuario--subtitle"> <a href="#">plopez@produccion.gob.ar</a></span>
                    </li>
                    <li class="dropdown-item-user">
                      <a @click="handleLogout()" class="dropdown-menu-item w-full" href="#">
                        <span class="icons-menu-usuario"><i class="fa-solid fa-right-from-bracket"></i></span> 
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
              </div> 

            </div> 
          </div>
          
        </section>         
      </section>
    </header>

      <!-- <div v-if="authStore.isAuthenticated">
        <Menu></Menu>
      </div> -->
    <div class="tw-flex-1" :class="(authStore.isAuthenticated) ? 'tw-pt-28' : ''">
      <router-view />
    </div>
    
    <footer class="tw-relative tw-bottom-0 tw-left-0 tw-w-full tw-bg-gray-800 tw-text-white tw-z-50 tw-mt-28">
      <section class="footer">
        <section class="footer__nroversion">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <img class="footer__img" src="/img/logo_Mecon_SSGAP_negativo.png" alt="logo footer">
              </div>
              <div class="col-6 footertext">
                <p>Versión 1.0.0</p>
              </div>
            </div>
          </div>
        </section>
      </section>     
    </footer>
    
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import Menu from "@/views/Layouts/Menu.vue";

export default {

  components: { Menu }, 

  setup() {
    const authStore = useAuthStore();
		const router = useRouter();
    const isDropdownOpen = ref(false);

    authStore.checkAuth();

    const handleLogout = () => {
      authStore.logout();
      router.push({ name: 'Login' });
    };

    const toggleDropdown = (event) => {
      event.stopPropagation(); 
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = (event) => {
      isDropdownOpen.value = false;
    };

    onMounted(() => {
      document.addEventListener('click', closeDropdown);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', closeDropdown);
    });

    return { 
      authStore,
      handleLogout,
      toggleDropdown,
      isDropdownOpen,
    };
  },
};
</script>
