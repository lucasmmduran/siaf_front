<template>
	<form id="formPlanificacion" action="" class="mb-3">
		
		<PlanHeader :planId="planId"></PlanHeader>

		<div class="container">
			<div class="row d-flex justify-content-center">
				<div v-if="errorMessage" class="col-10">
					<div class="alert alert-danger">{{ errorMessage }}</div>
				</div>
				<div class="col-10">
					<div class="row d-flex align-items-end">

						<Selector 
							class="col-6 pb-4"
							id="select-concepto" 
							label="Concepto" 
							name="concepto" 
							:options="conceptosDb" 
							v-model="formData.nombre"
							labelField="concepto"
						/>

						<!-- <Selector 
							class="col-6 pb-4"
							id="select-concepto"
							label="Concepto" 
							name="concepto" 
							:options="conceptos" 
							v-model="formData.concepto" 
						/> -->

						<div class="col-3 pb-4">
							<label class="box-container fw-normal">Plurianual
								<input v-model="formData.es_plurianual" type="checkbox" id="toggleColumns">
								<span class="checkmark"></span>
							</label>
						</div>

						<div class="col-3 pb-4">
							<label class="box-container fw-normal">No presupuestado
								<input v-model="formData.esta_presupuestado" type="checkbox">
								<span class="checkmark"></span>
							</label>
						</div>

						<div class="col-6 pb-4">
							<label for="Identificacion" class="form-label fw-normal">Identificación</label>
							<input v-model="formData.identificacion" class="form-control campo-foco" type="text" id="Identificacion" placeholder="Contenido" aria-label="Input text">
						</div>

						<div class="col-6 pb-4">
							<label for="NotaImpulso" class="form-label fw-normal">Nota de impulso</label>
							<input v-model="formData.expediente_impulso" class="form-control campo-foco" type="text" id="NotaImpulso" placeholder="Conocido" aria-label="Input text">
						</div>

						<div class="col-12 pb-2">
							<label for="FormControlTextArea" class="form-label fw-normal">Descripción</label>
							<textarea v-model="formData.descripcion" class="form-control form-textarea" id="FormControlTextArea" rows="3" maxlength="300" placeholder="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Fusce ante metus, sagittis quis suscipit sed, convallis ut est. Lorem ipsum dolor sit amet."></textarea>
							<!-- <div class="row d-flex justify-content-end">
								<div class="col-2 mt-1">
									<div id="characterCounter" class="character-counter">300</div>
								</div>
							</div> -->
						</div>
						
						<Selector 
							class="col-2 pb-5"
							id="select-moneda" 
							label="Moneda proceso" 
							name="moneda" 
							:options="monedasDb" 
							v-model="formData.siaf_moneda"
							labelField="cod_moneda"
						/>
						
						<!-- <Selector 
							class="col-2 pb-5"
							label="Moneda proceso" 
							name="moneda" 
							:options="monedas" 
							v-model="formData.moneda_seleccionada" 
						/> -->
						<Selector 
							class="col-5 pb-5"
							label="Tipo de tasa" 
							name="tipo_de_tasa" 
							:options="tipo_de_tasas" 
							v-model="formData.tipo_tasa" 
						/>
						
						<div class="col-5 pb-5">
							<div class="form-group item-form">
								<label class="form-label fw-normal" for="TasaPlan">Tasa para el plan</label>
								<div class="input-group campo-foco">
									<input v-model="formData.tasa_plan" type="number" class="form-control form-number" id="TasaPlan"/>
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

						<div class="col-12 tw-opacity-25 tw-cursor-not-allowed tw-pointer-events-none">
							<Partidas></Partidas>
						</div>

						<div class="col-11 d-flex justify-content-end">
							<span>
								<RouterLink :to="`/planes/${planId}/procesos`" class="btn btn-mobile btn-contorno">
									Cancelar
    						</RouterLink>
							</span>
							<span class="ms-4">
								<button @click.prevent="sendData" type="button" class="btn btn-mobile btn-success">Guardar</button>
							</span>
						</div>

					</div>
				</div>
			</div>
		</div>

		
	</form>
</template>


<script setup>
import { reactive, ref, onMounted, watch, provide } from 'vue';
import Selector from '@/views/Components/Selector.vue';
import Partidas from "@/views/Pages/Procesos/Partidas/Index.vue";
import PlanHeader from '@/views/Pages/Procesos/PlanHeader.vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { apiRoutes } from '@/config/api';

		const route = useRoute();	
		const router = useRouter();
		const planId = route.params.id;

		const generateRandomId = function(length = 6) {
			return Math.floor(Math.random() * 1000);
		};

		const procesoId = generateRandomId();

		provide("procesoId", generateRandomId());

		const monedasDb = ref([]);
		const conceptosDb = ref([]);

		const proceso = ref([]);
		const tipo_de_tasas = [{name: 'A la fecha de contrato'}, {name:'A la fecha de pago'}, {name:'REAL'}];

		const formData = reactive({
			plan_id: planId,
			nro_linea: '',
			descripcion: '',
			nombre: '',
			identificacion: '',
			es_plurianual: '',
			es_moneda_extranjera: '',
			siaf_moneda: '',
			esta_presupuestado: '',
			tipo_tasa: '',
			tasa_conversion: '',
			importe_total: '',
			importe_total_orig: '',
			importe_ejercicio: '',
			importe_ejercicio_orig: '',
			importe_anterior_orig: '',
			importe_proximo_ejercicio_orig: '',
			expediente_impulso: '',
			tipo_registro: '',
			referencia_linea_proceso: '',

			tasa_plan: '', // no esta en bd
		});

		const errorMessage = ref('');

		const sendData = () => {
		axios.post(apiRoutes.planes_procesos_new, formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log(response.data)
				//planes.value = response.data.data;
				router.push({ path: `/planes/${planId}/procesos` })
				//router.push({ path: `/planes/${planId}/procesos/${procesoId}/edit` })
				closeModal();
			})
			.catch(error => {
				errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
				console.error(error.response?.data?.message);
			});
		};
		
		/* const sendData = () => {
			proceso.value.push({
					id: procesoId,
					plan_id: planId,
          concepto: formData.concepto,
					plurianual: formData.plurianual,
					no_presupuestado: formData.no_presupuestado,
					identificacion: formData.identificacion,
					nota_impulso: formData.nota_impulso,
					descripcion: formData.descripcion,
					moneda_seleccionada: formData.moneda_seleccionada,
					tipo_de_tasa_seleccionada: formData.tipo_de_tasa_seleccionada,
					tasa_plan: formData.tasa_plan,
        });
        
				formData.concepto = "";
				formData.plurianual = "";
				formData.no_presupuestado = "";
				formData.identificacion = "";
				formData.nota_impulso = "";
				formData.descripcion = "";
				formData.moneda_seleccionada = "";
				formData.tipo_de_tasa_seleccionada = "";
				formData.tasa_plan = "";

				router.push({ path: `/planes/${planId}/procesos/${procesoId}/edit` })
    }; */

		

		/* watch(
      proceso,
      (nuevoProceso) => {
        localStorage.setItem("procesos_"+planId, JSON.stringify(nuevoProceso));
      },
      { deep: true }
    ); */

		const getSelectors = () => {
			axios.get(apiRoutes.planes_procesos_selectores, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('auth_token')}`
				},
			})
			.then(response => {
				console.log(response.data.data.monedas);
				monedasDb.value = response.data.data.monedas;
				conceptosDb.value = response.data.data.conceptos;
				/* ejerciciosDb.value = response.data.data.ejercicios;
				unidadesDb.value = response.data.data.unidades;
				tipoPlanesDb.value = response.data.data.tipo_planes;
				planesDb.value = response.data.data.planes; */
			})
			.catch(error => {
				console.error(error.response?.data?.message);
				//errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
			});
		}

		onMounted(() => {
			getSelectors();
			/* const procesosGuardados = localStorage.getItem("procesos_"+planId);
			console.log("ok");
      if (procesosGuardados) {
        proceso.value = JSON.parse(procesosGuardados);
      } */
		})

</script>