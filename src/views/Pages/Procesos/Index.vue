<template>
	<main class="formulario-main">

		<PlanHeader :planId="planId"></PlanHeader>

		<section class="formulario-planificacion tw-mt-28">
			<div class="container">
				<div class="row">

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
									<td class="text-center">
										<span class="me-2 iconos">
											<RouterLink :to="`/planes/${planId}/procesos/${p.id}/edit`">
														<button 
															type="button" 
															class="btn-icon editar" 
															data-bs-toggle="tooltip" 
															data-bs-placement="bottom" 
															data-bs-custom-class="custom-tooltip" 
															data-bs-title="Editar">
														</button>
													</RouterLink>
										</span>
										<!-- <span class="me-2 iconos">
											<button type="button" class="btn-icon visualizar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button>
										</span> -->
									</td>
								</tr>
								
							</tbody>
						</table>
					</div>
						<div class="text-registros">
							<p>Mostrando registros del 1 al 5 de un total de {{ procesos.length }} registros.</p>
						</div>
						<!-- <nav aria-label="Page navigation example">
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
						</nav> -->

						<div class="col-12 tw-mt-10">
								<div class="tabla-procesos-siaf">
									<div class="row">
										<div class="col-10 d-flex justify-content-center align-items-center">
											<h5>Resumen presupuestario</h5>
										</div>
										<div class="col-2 d-flex justify-content-end">
											<span class="me-2 iconos"><button type="button" class="btn-icon print-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
											<span class="me-2 iconos"><button type="button" class="btn-icon excel-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
										</div>
									</div>
								</div>
								<table class="table table-bordered table-striped">
									<thead>
										<tr class="title-col">
											<th scope="col">FF</th>
											<th scope="col">Programática</th>
											<th scope="col">Objeto gasto</th>
											<th scope="col">T1</th>
											<th scope="col">T2</th>
											<th scope="col">T3</th>
											<th scope="col">T4</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(r, index) in resumenTributario" :key="index">
											<td>{{ r.fuente }}</td>
											<td>{{ r.programatica }}</td>
											<td>{{ r.objeto_gasto }}</td>
											<td class="text-end">{{ r.trimestresCompromiso.t1 }}</td>
											<td class="text-end">{{ r.trimestresCompromiso.t2 }}</td>
											<td class="text-end">{{ r.trimestresCompromiso.t3 }}</td>
											<td class="text-end">{{ r.trimestresCompromiso.t4 }}</td>
										</tr>
										
										<!-- <tr class="fila-total">
											<th colspan="3" scope="col" class="total-monto">Total</th>
											<th class="text-end">$ 6350.000,00</th>
											<th class="text-end">$ 3350.000,00</th>
											<th class="text-end">$ 1548.000,00</th>
											<th class="text-end">$ 350.000,00</th>
										</tr> -->
										
									</tbody>
								</table>
						</div>
						<div class="text-registros">
							<p>Mostrando {{ resumenTributario.length }} registros.</p>
						</div>

						<!-- <div class="col-12 tw-mt-10">
								<div class="tabla-procesos-siaf">
									<div class="row">
										<div class="col-10 d-flex justify-content-center align-items-center">
											<h5>Resumen presupuestario</h5>
										</div>
										<div class="col-2 d-flex justify-content-end">
											<span class="me-2 iconos"><button type="button" class="btn-icon print-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
											<span class="me-2 iconos"><button type="button" class="btn-icon excel-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
										</div>
									</div>
								</div>
								<table class="table table-bordered table-striped">
									<thead>
										<tr class="title-col">
											<th scope="col">FF</th>
											<th scope="col">Programática</th>
											<th scope="col">Objeto gasto</th>
											<th scope="col">T1</th>
											<th scope="col">T2</th>
											<th scope="col">T3</th>
											<th scope="col">T4</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>11</td>
											<td>10.01.01.001</td>
											<td>2.3.5.0</td>
											<td class="text-end">$ 1.200.000,00</td>
											<td class="text-end">$ 900.000,00</td>
											<td class="text-end">$ 300.000,00</td>
											<td class="text-end">$ 12.000,02</td>
										</tr>
										<tr>
											<td>12</td>
											<td>10.01.01.001</td>
											<td>2.3.5.0</td>
											<td class="text-end">$ 1.200.000,00</td>
											<td class="text-end">$ 900.000,00</td>
											<td class="text-end">$ 300.000,00</td>
											<td class="text-end">$ 12.000,02</td>
										</tr>
										<tr>
											<td>13</td>
											<td>10.01.01.001</td>
											<td>2.3.5.0</td>
											<td class="text-end">$ 1.200.000,00</td>
											<td class="text-end">$ 900.000,00</td>
											<td class="text-end">$ 300.000,00</td>
											<td class="text-end">$ 12.000,02</td>
										</tr>
										<tr class="fila-total">
											<th colspan="3" scope="col" class="total-monto">Total</th>
											<th class="text-end">$ 6350.000,00</th>
											<th class="text-end">$ 3350.000,00</th>
											<th class="text-end">$ 1548.000,00</th>
											<th class="text-end">$ 350.000,00</th>
										</tr>
									</tbody>
								</table>
						</div>
						<div class="text-registros">
							<p>Mostrando registros del 1 al 3 de un total de 3 registros.</p>
						</div> -->
						<!-- <nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center">
								<li class="page-item disabled">
									<a class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
								</li>
								<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
								<li class="page-item">
									<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>
								</li>
							</ul>
						</nav> -->
					</div>

			</div>
		</section>
						
	</main>
</template>


<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PlanHeader from '@/views/Pages/Procesos/PlanHeader.vue';

export default {

	props: ['procesoId'],

	components: { PlanHeader },
	setup(props) {

		const procesoId = props.procesoId;

		const procesos = ref([]);
		const route = useRoute();
		const planId = route.params.id;
		const resumenTributario = ref([]);

		onMounted(() => {
			
			const procesosGuardados = localStorage.getItem("procesos_"+planId);
      if (procesosGuardados) {
				procesos.value = JSON.parse(procesosGuardados);
      }

			const partidasGuardadas = [];

			procesos.value.map((proceso) => {
				const partidas = localStorage.getItem("partidas_" + proceso.id);
				if (partidas) {
					// Si existe, parseamos el JSON y lo agregamos al array de partidasGuardadas
					const partidasParseadas = JSON.parse(partidas);

					// Si hay más de una partida, agregamos todas
					if (Array.isArray(partidasParseadas)) {
						partidasGuardadas.push(...partidasParseadas); // Añadimos todas las partidas al array
					} else {
						partidasGuardadas.push(partidasParseadas); // Si es una sola partida, la añadimos directamente
					}
				}
			});

			resumenTributario.value = partidasGuardadas.filter(item => item !== null); // filtrado de partidas nulls

			//console.log(resumenTributario.value[1].procesoId);

			
    })


		return {
			procesos,
			planId,
			PlanHeader,
			resumenTributario,
		}
	}
}

</script>

<style scoped>
main.formulario-main {
	padding-top:0px !important;
}
</style>