<template>
  <div id="app"> 
    
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
                  
                  <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-84 bg-white shadow-lg rounded-md z-50">
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

    <div v-if="authStore.isAuthenticated" class="flex space-x-2">
      <div class=" pt-52 px-4 top-50 bg-gray-100 ">
        <Menu></Menu> 
      </div>
      <router-view />
    </div>
    <div v-else>
      <router-view />
    </div>

    <footer>
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