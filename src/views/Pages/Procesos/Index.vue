<template>
	<main class="formulario-main">

		<PlanHeader :planId="planId"></PlanHeader>


<section class="formulario-planificacion">
		<div class="container">
				<div class="row">
					<div v-if="errorMessage" class="col-12">
						<div class="alert alert-danger">{{ errorMessage }}</div>
					</div>

						<div class="col-12">
							<div class="cantidad-registros">
								<label for="recordsNumberB" class="form-label me-2">Mostrar</label>
								<input type="number" id="recordsNumberB" class="form-control" value="5" min="1" step="1" style="width: 80px;">
								<label for="recordsNumberB" class="form-label ms-2">elementos por página</label>
							</div>
						</div>
						<div class="col-12">
							<div class="tabla-procesos-siaf">
								<div class="row">
									<div class="col-10 d-flex justify-content-center align-items-center">
										<h5>PROCESOS</h5>
									</div>
									<div class="col-2 d-flex justify-content-end">
										<span class="me-2 iconos">
											<RouterLink :to="`/planes/${planId}/procesos/create`">
												<button type="button" class="btn-icon add-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Cargar proceso"></button>
											</RouterLink>
										</span>
										<span class="me-2 iconos"><button type="button" class="btn-icon print-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
										<span class="me-2 iconos"><button type="button" class="btn-icon excel-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-12">
						<table class="table table-bordered table-striped">
							<thead>
								<tr class="title-col">
									<th scope="col">ID</th>
									<th scope="col">Concepto</th>
									<th scope="col">Identificación proceso</th>
									<th scope="col">Descripción</th>
									<th scope="col" colspan="2">Monto anual</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="p in procesos" :key="p.id">
									<th class="numberID"><span>{{ p.id }}</span></th>
									<td>{{ p.concepto }}</td>
									<td>{{ p.identificacion }}</td>
									<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip">
										{{ p.descripcion }}</td>
									<td class="text-end">{{ p.importe_total }}</td>
									<td class="text-end">{{ p.importe_total_orig }}</td>
									<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
								</tr>
								
							</tbody>
						</table>
					</div>
						<div class="text-registros">
							<p>Mostrando registros del 1 al 5 de un total de {{ procesos.length }} registros.</p>
						</div>
						<nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center">
								<li class="page-item disabled">
									<a class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
								</li>
								<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
								<li class="page-item"><a class="page-link" href="#">2</a></li>
								<li class="page-item"><a class="page-link" href="#">3</a></li>
								<li class="page-item"><a class="page-link" href="#">4</a></li>
								<li class="page-item">
									<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>
								</li>
							</ul>
						</nav>
						</div>
						</div>
						</section>
            
	</main>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { apiRoutes } from '@/config/api';
import axios from 'axios';
import { useRoute } from 'vue-router';
import PlanHeader from '@/views/Pages/Procesos/PlanHeader.vue';

		const route = useRoute();
		const planId = route.params.id;

		const procesos = ref([]);
		const errorMessage = ref('');

		const getData = (planId) => {
			const url = apiRoutes.planes_cabecera_edit.replace('{id}', planId);
			axios.get(url, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log("procesos " + JSON.stringify(response.data.data));
				procesos.value = response.data.data;
				
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
    };

		onMounted(() => {
			getData(planId);
		});


</script>

<style scoped>
main.formulario-main {
	padding-top:0px !important;
}
</style>