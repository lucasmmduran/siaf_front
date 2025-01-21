<template>
	<form id="formPlanificacion" action="" class="mb-3 mt-56">
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
					<div class="row d-flex align-items-start">
						<div class="col-4">
							<span><b>Plan:</b> RRHH/ Ley Marco</span>
						</div>
						<div class="col-4 d-flex justify-content-center">
							<span><b>Estado: </b><span class="enproceso">En proceso (18/12/2024)</span></span>
						</div>
						<div class="col-4 d-flex justify-content-end"> <!--modificar los iconos con los tooltip, hover y un a-->
							<span class="me-2"><button type="button" class="btn-icon print" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
							<span class="me-2"><button type="button" class="btn-icon excel" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
							<span class="me-2"><button type="button" class="btn-icon pdf" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar PDF"></button></span>
						</div>
						<div class="col-12 d-flex justify-content-start">
							<span><b>Línea progreso:</b> 1 </span>
						</div>
					</div>
				</div>
			</section>
		</section>
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div v-if="errorMessage" class="col-10">
					<div class="alert alert-danger">{{ errorMessage }}</div>
				</div>
				<div class="col-10">
					<div class="row d-flex align-items-end">

						<div class="col-6 pb-4">
							<label for="FormControlTexto" class="form-label fw-normal">Concepto</label>
							<input v-model="formData.concept" class="form-control campo-foco" type="text" id="FormControlTexto" placeholder="Universidades" aria-label="Input text">
						</div>

						<div class="col-3 pb-4">
							<label class="box-container fw-normal">Plurianual
								<input v-model="formData.multiyear" type="checkbox" id="toggleColumns">
								<span class="checkmark"></span>
							</label>
						</div>

						<div class="col-3 pb-4">
							<label class="box-container fw-normal">No presupuestado
								<input v-model="formData.notBudgeted" type="checkbox">
								<span class="checkmark"></span>
							</label>
						</div>

						<div class="col-6 pb-4">
							<label for="Identificacion" class="form-label fw-normal">Identificación</label>
							<input v-model="formData.identification" class="form-control campo-foco" type="text" id="Identificacion" placeholder="Contenido" aria-label="Input text">
						</div>

						<div class="col-6 pb-4">
							<label for="NotaImpulso" class="form-label fw-normal">Nota de impulso</label>
							<input v-model="formData.note" class="form-control campo-foco" type="text" id="NotaImpulso" placeholder="Conocido" aria-label="Input text">
						</div>

						<div class="col-12 pb-2">
							<label for="FormControlTextArea" class="form-label fw-normal">Descripción</label>
							<textarea v-model="formData.description" class="form-control form-textarea" id="FormControlTextArea" rows="3" maxlength="300" oninput="updateCharacterCount()" placeholder="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Fusce ante metus, sagittis quis suscipit sed, convallis ut est. Lorem ipsum dolor sit amet."></textarea>
							<!-- <div class="row d-flex justify-content-end">
								<div class="col-2 mt-1">
									<div id="characterCounter" class="character-counter">300</div>
								</div>
							</div> -->
						</div>
						
						<Selector 
							class="col-2 pb-5"
							label="Moneda proceso" 
							name="money" 
							:options="moneys" 
							v-model="formData.selectedMoney" 
						/>
						<Selector 
							class="col-5 pb-5"
							label="Tipo de tasa" 
							name="rateType" 
							:options="rateTypes" 
							v-model="formData.selectedRateType" 
						/>
						
						<div class="col-5 pb-5">
							<div class="form-group item-form">
								<label class="form-label fw-normal" for="TasaPlan">Tasa para el plan</label>
								<div class="input-group campo-foco">
									<input v-model="formData.ratePlan" type="number" class="form-control form-number" id="TasaPlan"/>
								</div>
							</div>
						</div>

						<div class="col-12 pb-3">
							<table class="table table-bordered" id="dataTable">
								<thead>
									<tr>
										<th scope="col"></th>
										<th scope="col" class="text-center">Importe total</th>
										<th scope="col" class="hidden-column text-center">Ejercicios anteriores</th>
										<th scope="col" class="hidden-column text-center">2024</th>
										<th scope="col" class="hidden-column text-center">2025</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>EUR</td>
										<td class="text-end">12.000,02</td>
										<td class="hidden-column text-end">4.000,20</td>
										<td class="hidden-column text-end">8.000,00</td>
										<td class="hidden-column text-end">0,00</td>
									</tr>
									<tr>
										<td>$</td>
										<td class="text-end">12.120.020,20</td>
										<td class="hidden-column text-end">4.040.202,00</td>
										<td class="hidden-column text-end">8.080.000,00</td>
										<td class="hidden-column text-end">0,00</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="col-11 d-flex justify-content-end">
							<span><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-contorno">Cancelar</button></span>
							<span class="ms-4"><button @click.prevent="sendData" type="button" class="btn btn-mobile btn-success">Guardar</button></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>


<script>
import { reactive, ref } from 'vue';
import { apiRoutes } from '@/config/api';
import axios from 'axios';
import Selector from '@/views/Components/Selector.vue';

export default {
	components : { Selector},

	setup() {

		const moneys = ['$', 'US$', 'EUR', 'REAL'];
		const rateTypes = ['A la fecha de contrato', 'A la fecha de pago', 'REAL'];

		const formData = reactive({
			concept: '',
			multiyear: '',
			notBudgeted: '',
			identification: '',
			note: '',
			description: '',
			selectedMoney: '',
			selectedRateType: '',
			ratePlan: '',
			errorMessage: '',
		});

		const errorMessage = ref('');
		
		const sendData = () => {
			axios.post(apiRoutes.enviarCabecera, formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log(response.data)
				// redirect to partidas
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
    };

		return {
			sendData,
			moneys,
			rateTypes,
			errorMessage,
			formData
		}
	}
}

</script>