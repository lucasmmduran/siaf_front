<template>
	<section class="header-planificacion">
				<div class="container">
					<div class="row">
						<div class="col-6">
							<h3>Planificación de ejecución</h3>
						</div>
						<div class="col-6 text-end">
							<h3>Nro RRHH-99988/2024</h3>
						</div>
					</div>
				</div>
				<section class="">
					<div class="container bg-gris4">
						<div class="row">
							<div class="col-4">
								<span><b>Plan:</b> {{ planId }}</span>
							</div>
							<div class="col-4 d-flex justify-content-center">
								<span><b>Estado: </b><span class="enproceso">En proceso ({{ getPlanById(props.planId).fecha_ult_actualizacion }})</span></span>
							</div>
							<div class="col-4 d-flex justify-content-end">
								<span class="me-2"><button type="button" class="btn-icon print" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
								<span class="me-2"><button type="button" class="btn-icon excel" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
								<span class="me-2"><button type="button" class="btn-icon pdf" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar PDF"></button></span>
							</div>
						</div>
					</div>
				</section>
			</section>
</template>

<script>

export default {
	props: {
		planId: {
			type: String,
			required: true,
		}
	},

	setup(props) {
		const getPlanById = (id) => {
			const storedPlanes = JSON.parse(localStorage.getItem("planes")) || [];
			const plan = storedPlanes.find((plan) => plan.id === Number(id));
			return plan || null;
		};

		return {
			getPlanById,
			props,
		}
	}
}

</script>