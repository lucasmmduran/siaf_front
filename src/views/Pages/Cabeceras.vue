<template>
	<main class="formulario-main">

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
				<section class="bg-gris4">
					<div class="container">
						<div class="row">
							<div class="col-4">
								<span><b>Plan:</b> -/-</span>
							</div>
							<div class="col-4 d-flex justify-content-center">
								<span><b>Estado: </b><span class="enproceso">En proceso (18/12/2024)</span></span>
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
			

			<section class="tabla-plan">
					<div class="container mx-auto px-4">
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
										</tr>
									</thead>
									<tbody>
										<tr>
											<th class="numberID"><span>1</span></th>
											<td>2024</td>
											<td>Dirección de RRHH</td>
											<td>RRHH</td>
											<td>Ley Marco</td>
											<td class="text-center">20/12/2024</td>
											<td class="text-center">06/01/2025</td>
										</tr>
									</tbody>
								</table>
								<div class="text-registros">
									<p>Mostrando registros del 1 al 1 de un total de 1 registros.</p>
								</div>
							</div>
							<nav aria-label="Page navigation example">
								<ul class="pagination justify-content-center mb-3">
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
																:options="years" 
																v-model="selectedYear" 
															/>
                            </div>
                            <div class="col-10 mt-3">
															<Selector 
																id="select-unidad" 
																label="Unidad" 
																name="unidad" 
																:options="units" 
																v-model="selectedUnit" 
															/>
                            </div>
                            <div class="col-10 mt-3">
                                <div class="row">
																	<Selector
																		class="col-6"
																		id="select-plan-type" 
																		label="Tipo Plan" 
																		name="planType" 
																		:options="planTypes" 
																		v-model="selectedPlanType" 
																	/>
																		<Selector 
																			class="col-6"
																			id="select-plan" 
																			label="Plan" 
																			name="plan" 
																			:options="plans" 
																			v-model="selectedPlan" 
																		/>
                                    
                                </div>
                            </div>
                            <div class="col-10 mt-3">
                                <div class="row">
                                    <div class="col-6">
                                        <label class="form-label fw-normal" for="">Fecha de ingreso</label>
                                        <div class="input-group">
																					<input 
																						v-model="entryDate"
																						type="date" 
																						class="form-control form-fecha" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label fw-normal" for="">Fecha última actualización</label>
                                        <div class="input-group">
																					<input v-model="lastUpdatedDate" type="date" class="form-control form-fecha"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <div class="container">
                    <div class="row">
                      <div class="col-11 d-flex justify-content-end">
                          <span><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-contorno">Cancelar</button></span>
                          <span class="ms-4"><button @click.prevent="sendData"  type="button" class="btn btn-mobile btn-success">Guardar</button></span>
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
import { ref } from 'vue';
import { apiRoutes } from '@/config/api';
import axios from 'axios';
import Selector from '@/views/Components/Selector.vue';

export default {
	components: { Selector },

	setup() {

		const years = [2020, 2021, 2022, 2023, 2024];
		const units = ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4'];
		const planTypes = ['Convenios', 'RRHH', 'Fondos Rotatorios'];
		const plans = ['Planta Permanente', 'Ley Marco', '1109', 'Otros'];

		const selectedYear = ref('');
		const selectedUnit = ref('');
		const selectedPlanType = ref('');
		const selectedPlan = ref('');
		const entryDate = ref('');
		const lastUpdatedDate = ref('');
		const errorMessage = ref('');

		const sendData = () => {
			axios.post(apiRoutes.enviarCabecera, {
				year: selectedYear.value,
				unit: selectedUnit.value,
				typePlan: selectedPlanType.value,
				plan: selectedPlan.value,
				entryDate: entryDate.value,
				lastUpdatedDate: lastUpdatedDate.value,
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log(response.data)
				// redirect to procesos
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
    };

		return {
			sendData,
			errorMessage,
			years,
			units,
			selectedYear,
			selectedUnit,
			planTypes,
			plans,
			selectedPlanType,
			selectedPlan,
			entryDate,
			lastUpdatedDate,
		}
	}
}

</script>