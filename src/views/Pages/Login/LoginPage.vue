<template>
	<main>
		<section class="formulario-login">
			<!--jumbotron-->
			<div class="jumbotron-forms">
					<div class="jumbotron_banner" id="ejemplo-jumbotron">
							<nav class="migas-de-pan-img fondo-breadcrumb">
							</nav>
							<div class="container-fluid">
									<div class="row d-flex justify-content-center">
											<div class="col-lg-8 col-sm-12 text-center">
													<h2>SIAF LOCAL</h2>
													<h3>Sistema Integrado de Administración Financiera</h3>
											</div>
									</div>
							</div>
					</div>
			</div>
			<!--fin jumbotron-->

			<!--login-->
			<div class="d-flex justify-content-center form-title">
				<h3 class="fw-bold">Ingresá a la plataforma</h3>
			</div>

			<section id="formInicio">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="col-lg-8 col-sm-12">
							<div class="contenedor-formulario bg-gris4">
								<div class="container">
									<LoginForm></LoginForm>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</section>
	</main>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
	components: { LoginForm }
}
</script>