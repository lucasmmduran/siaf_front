<template>
	<main class="formulario-main">
			<section class="tabla-plan">
					<div class="container">
						<div class="row d-flex justify-content-center">
							<div class="col-12">
								<div class="cantidad-registros mt-1">
									<label for="recordsNumberB" class="form-label me-2">Mostrar</label>
									<input type="number" id="recordsNumberB" class="form-control" value="5" min="1" step="1" style="width: 80px;">
									<label for="recordsNumberB" class="form-label ms-2">elementos por página</label>
								</div>
							</div>
						
							<div class="col-12">
								<div class="tabla-procesos-siaf">
									<div class="row">
										<div class="col-11 d-flex justify-content-center align-items-center">
											<h5>PLANES</h5>
										</div>
										<div class="col-1 d-flex justify-content-end">
											<span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Cargar proceso"><button type="button" class="btn-icon add-negativo fondo-azul" data-bs-toggle="modal" data-bs-target="#cargarPlan"></button></span>
										</div>
									</div>
								</div>
								<table class="table table-bordered table-striped">
									<thead>
										<tr class="title-col">
											<th scope="col">ID</th>
											<th scope="col">Ejercicio</th>
											<th scope="col">Unidad</th>
											<th scope="col">Tipo de plan</th>
											<th scope="col">Plan</th>
											<th scope="col">Fecha de <br> ingreso</th>
											<th scope="col">Fecha última <br>actualización</th>
											<!-- <th scope="col">Acciones</th> -->
										</tr>
									</thead>
									<tbody>
										<tr v-for="p in planes">
											<th class="numberID"><span>{{ p.id }}</span></th>
											<td>{{ p.anio}}</td>
											<td>{{ p.unidad }}</td>
											<td>{{ p.identificacion_plan }}</td>
											<td>{{ p.nro_plan }}</td>
											<td class="text-center">{{ p.fecha_ingreso }}</td>
											<td class="text-center">{{ p.fecha_ult_actualizacion }}</td>
											<td class="text-center">
												<span class="me-2 iconos">
													<RouterLink :to="`/planes/${p.id}/edit`">
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
											</td>
										</tr>
										
									</tbody>
								</table>
								<div class="text-registros">
									<p>Mostrando {{ planes.length }} registros.</p>
								</div>
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

						<!-- Modal -->
        <div class="modal fade" id="cargarPlan" tabindex="-1" aria-labelledby="cargarPlanLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-gris d-flex justify-content-between align-items-start">
                  <h6 class="montserrat fw-bold pb-4">Nuevo plan</h6>
                  <i class="fa-regular fa-circle-xmark" data-bs-dismiss="modal"></i>
                </div>
                <div class="modal-body">

									<div v-if="errorMessage" class="col-10">
						<div class="alert alert-danger">{{ errorMessage }}</div>
					</div>

                  <form id="formPlanificacion" action="" class="mb-3">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-10">
															<Selector 
																class="col-6 mt-3"
																id="select-ejercicio" 
																label="Ejercicio" 
																name="ejercicio" 
																:options="anios" 
																v-model="anio_seleccionado" 
															/>
                            </div>
                            <div class="col-10 mt-3">
															<Selector 
																id="select-unidad" 
																label="Unidad" 
																name="unidad" 
																:options="unidades" 
																v-model="unidad_seleccionada" 
															/>
                            </div>
                            <div class="col-10 mt-3">
                                <div class="row">
																	<Selector
																		class="col-6"
																		id="select-plan-type" 
																		label="Tipo Plan" 
																		name="planType" 
																		:options="identificacion_planes" 
																		v-model="identificacion_plan_seleccionado" 
																	/>
																		<Selector 
																			class="col-6"
																			id="select-plan" 
																			label="Plan" 
																			name="plan" 
																			:options="planes_disponibles" 
																			v-model="plan_seleccionado" 
																		/>
                                    
                                </div>
                            </div>
                            <!-- <div class="col-10 mt-3">
                                <div class="row">
                                    <div class="col-6">
                                        <label class="form-label fw-normal" for="">Fecha de ingreso</label>
                                        <div class="input-group">
																					<input 
																						v-model="fecha_ingreso"
																						type="date" 
																						class="form-control form-fecha" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label fw-normal" for="">Fecha última actualización</label>
                                        <div class="input-group">
																					<input v-model="fecha_ult_actualizacion" type="date" class="form-control form-fecha"/>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-11 d-flex justify-content-end">
                          <span><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-contorno">Cancelar</button></span>
                          <span class="ms-4"><button @click.prevent="sendData" type="button" class="btn btn-mobile btn-success">Guardar</button></span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!--Fin modal-->

	</main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { apiRoutes } from '@/config/api';
import axios from 'axios';
import Selector from '@/views/Components/Selector.vue';

export default {
	components: { Selector },

	setup() {

		const planes = ref([]);

		const anios = [2025, 2024, 2023, 2022, 2021, 2020];
		const unidades = ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4'];
		const identificacion_planes = ['Convenios', 'RRHH', 'Fondos Rotatorios'];
		const planes_disponibles = ['Planta Permanente', 'Ley Marco', '1109', 'Otros'];

		const anio_seleccionado = ref('');
		const unidad_seleccionada = ref('');
		const identificacion_plan_seleccionado = ref('');
		const plan_seleccionado = ref('');
		/* const fecha_ingreso = ref('');
		const fecha_ult_actualizacion = ref(''); */
		const errorMessage = ref('');

		const sendData = () => {
			axios.post(apiRoutes.enviarCabecera, {
				anio: anio_seleccionado.value,
				unidad: unidad_seleccionada.value,
				identificacion_plan: identificacion_plan_seleccionado.value,
				nro_plan: plan_seleccionado.value,
				/* fecha_ingreso: fecha_ingreso.value,
				fecha_ult_actualizacion: fecha_ult_actualizacion.value, */
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log(response.data)
				planes.value = [...planes.value, ...response.data.data];
				closeModal();
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
    };

		const closeModal = () => {
			const modalElement = document.getElementById('cargarPlan');
				const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
				modalInstance.hide();
		};

		const getData = () => {
			axios.get(apiRoutes.planes_cabecera_index/* , {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			} */)
			.then(response => {
				console.log(response.data.data);
				planes.value = response.data.data;
				
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
    };

		onMounted(() => {
			getData();
		});

		return {
			planes,
			sendData,
			errorMessage,
			anios,
			unidades,
			anio_seleccionado,
			unidad_seleccionada,
			identificacion_planes,
			identificacion_plan_seleccionado,
			plan_seleccionado,
			planes_disponibles,
		}
	}
}

</script>

<style scoped>
main.formulario-main {
	padding-top: 0px !important;
}
</style>