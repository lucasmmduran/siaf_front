<template>
	<form @submit.prevent="handleLogin" id="formIngreso">
		<div class="row d-flex justify-content-center">
			<div class="col-lg-8 col-sm-10">
				
				<div v-if="errorMessage" class="alert alert-danger" role="alert">
					{{ errorMessage }}
				</div>

				<div class="mb-3 espacio-form">
					<label for="User" class="form-label fw-normal">Usuario</label>
					<input 
						v-model="username"
						type="text" 
						class="form-control campo-foco" 
						id="inputUser"
						required />
					<!-- <div id="invalidUser" class="letra-error mt-2 visually-hidden">
							El usuario es inválido.
					</div>
					<div id="validUser" class="letra-ok mt-2 visually-hidden">
							El usuario es válido.
					</div> -->
				</div>
				<div class="mb-3 espacio-form">
					<label for="inputPassword" class="form-label fw-normal">Contraseña</label>
					<div class="input-group form-contrasena campo-foco" id="contrasena-container">
						<input 
							v-model="password"
							v-bind:type="passwordVisible ? 'text' : 'password'"
							type="password" 
							class="form-control" 
							id="inputPassword"
							required />
						<span 
							@click="togglePasswordVisibility"
						 	class="input-group-text rounded-end" 
							data-bs-custom-class="custom-tooltip" 
							data-bs-toggle="tooltip" 
							data-bs-placement="bottom" 
							title="Ver contraseña" 
							id="showPassword">
								<i class="fa-regular fa-eye-slash" :class="{'d-none': passwordVisible}" ></i> 
								<i class="fa-regular fa-eye" :class="{'d-none': !passwordVisible}"></i>
						</span>
					</div>
					<!-- <div id="invalidPass" class="letra-error mt-2 visually-hidden">
							La contraseña es incorrecta.
					</div>
					<div id="validPass" class="letra-ok mt-2 visually-hidden">
							La contraseña es correcta.
					</div> -->
				</div>
				<div class="row mt-4 mb-3 d-flex justify-content-center">
					<div class="col-xl-3 col-lg-5 col-sm-12 margin-top-btn">
						<button
							:disabled="loading"
							type="submit" 
							class="btn btn-mobile btn-success">
								{{ loading ? 'Cargando...' : 'Ingresar' }}
						</button>
					</div>
				</div> 
				<hr>
				<div class="row mb-3">
					<div class="col-12 text-start">
						<a href="#" class="links-lora">Recuperar mi contraseña</a>
					</div>
					<div class="col-12 mt-1 text-start">
						<a href="#" class="links-lora">Crear una nueva contraseña</a>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import axios from '@/config/axios'; 
import { ref } from 'vue';
import { apiRoutes } from '@/config/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export default {
	setup() {
		const username = ref('');
		const password = ref('');
		const loading = ref(false);
		const errorMessage = ref('');
		const router = useRouter();
		const passwordVisible = ref(false);
		const authStore = useAuthStore();

		const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };


		const handleLogin = async () => {
			loading.value = true;
			errorMessage.value = '';
			//console.log(username.value);
			
			try {
				const response = await axios.post(apiRoutes.login_check, {
					username: username.value,
					password: password.value
				});

				const { token } = response.data;
				localStorage.setItem('auth_token', token);
				authStore.login(token);
				router.push('dashboard');

			} catch (error) {
				console.log(error);
				errorMessage.value = error.response?.data?.message || 'Error al iniciar sesión';
			} finally {
				loading.value = false;
			}
			
		}

		return {
			username,
			password,
			loading,
			handleLogin,
			errorMessage,
			togglePasswordVisibility,
			passwordVisible,
		}
	},

	/* mounted() {
		console.log("Redirigiendo a /dashboard...");
		this.$router.push('/about');
	} */

}
</script>