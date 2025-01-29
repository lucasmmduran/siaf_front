<template>
	<form id="dataForm">
		<p v-if="successMessage" class="alert alert-success"> {{ successMessage }}</p>
		<p v-if="errorMessage" class="alert alert-danger"> {{ errorMessage }}</p>
		<div class="row d-flex justify-content-center">
		<Selector 
			class="col-10 pb-3"
			label="Programática" 
			name="programmatic" 
			:options="programaticasDisponibles" 
			v-model="formData.programatica_seleccionada" 
		/>
		<div class="col-5">
			<label for="objetoInput" class="form-label fw-normal">Objeto del gasto</label>
			<input v-model="formData.objeto_del_gasto" type="number" id="objetoInput" name="objetoInput" class="form-control form-number" placeholder="2.3.5.1">
		</div>
		<Selector 
			class="col-5"
			label="Fuente" 
			name="programmatic" 
			:options="fuentesDisponibles" 
			v-model="formData.fuente_seleccionada" 
		/>
		</div>
		<div class="row d-flex justify-content-center mt-4">
		<div class="col-10">
			<table class="tabla-trimestral">
				<thead>
					<tr>
						<th class="fondo-azul text-white">Compromiso</th>
						<th>Mes</th>
						<th>$</th>
						<th style="width: 100px;"></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, index) in formData.rowsCompromiso" :key="row.id">
						<td></td>
						<td>
							<Selector 
								label="" 
								:name="'month_' + row.id"
								:options="mesesDisponibles" 
								v-model="row.mes_seleccionado"
							/>  
						</td>
						<td class="text-start">
							<input
								v-model="row.monto"
								:id="'monto_' + row.id"
								:name="'monto_' + row.id"
								type="number"
								class="form-control form-number"
								placeholder="Ingrese monto"
							/>
						</td>
						<td></td>
						<td class="text-center">
							<span class="iconos">
								<button
									type="button"
									class="btn-icon eliminar fondo-blanco"
									@click="eliminarFila(index, 'rowsCompromiso')"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									data-bs-custom-class="custom-tooltip"
									data-bs-title="Eliminar"
								>
								</button>
							</span>
						</td>
					</tr>
					<tr class="fila-total">
						<th colspan="2">Total anual</th>
						<th class="text-end">{{ montoTotal('rowsCompromiso') }}</th>
						<th></th>
						<th></th>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<div class="col-12 d-flex justify-content-between">
					<div class="text-registros">
						<p class="lora fw-normal">Cargando mes {{ formData.rowsCompromiso.length }} de 12</p>
					</div>
					<button
						type="button"
						class="btn-primary btn-icono add-negativo"
						@click="agregarFila('rowsCompromiso')"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						data-bs-custom-class="custom-tooltip"
						data-bs-title="Agregar mes"
					>
					</button>
				</div>
			</div>
			<table class="tabla-trimestral mt-4">
				<thead>
					<tr>
						<th class="fondo-azul text-white">Devengado</th>
						<th>Mes</th>
						<th>$</th>
						<th style="width: 100px;"></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(r, index) in formData.rowsDevengado" :key="r.id">
						<td></td>
						<td>
							<Selector 
								label="" 
								:name="'month_' + r.id"
								:options="mesesDisponibles" 
								v-model="r.mes_seleccionado"
							/>  
						</td>
						<td class="text-start">
							<input
								v-model="r.monto"
								:id="'monto_' + r.id"
								:name="'monto_' + r.id"
								type="number"
								class="form-control form-number"
								placeholder="Ingrese monto"
							/>
						</td>
						<td></td>
						<td class="text-center">
							<span class="iconos">
								<button
									type="button"
									class="btn-icon eliminar fondo-blanco"
									@click="eliminarFila(index, 'rowsDevengado')"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									data-bs-custom-class="custom-tooltip"
									data-bs-title="Eliminar"
								>
								</button>
							</span>
						</td>
					</tr>
					<tr class="fila-total">
						<th colspan="2">Total anual</th>
						<th class="text-end">{{ montoTotal('rowsDevengado') }}</th>
						<th></th>
						<th></th>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<div class="col-12 d-flex justify-content-between">
					<div class="text-registros">
						<p class="lora fw-normal">Cargando mes {{ formData.rowsDevengado.length }} de 12</p>
					</div>
					<button
						type="button"
						class="btn-primary btn-icono add-negativo"
						@click="agregarFila('rowsDevengado')"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						data-bs-custom-class="custom-tooltip"
						data-bs-title="Agregar mes"
					>
					</button>
				</div>
			</div>

			<div class="row">
				<div class="col-11 d-flex justify-content-end">
						<span><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-contorno">Cancelar</button></span>
						<span class="ms-4"><button @click.prevent="sendData" type="button" class="btn btn-mobile btn-success">Guardar</button></span>
				</div>
			</div>
		</div>
		</div>
	</form>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import Selector from '@/views/Components/Selector.vue';

export default {
	components: { Selector },

	props: {
		endpoint: {
			type: String,
			required: true,
		}
	},

	setup(props) {

		const successMessage = ref('');
    const errorMessage = ref('');

		const resetForm = () => {
			formData.programatica_seleccionada = "",
      formData.objeto_del_gasto = "",
      formData.fuente_seleccionada = "",
			formData.rowsCompromiso = [
        {
          id: 1,
          mes_seleccionado: "",
          monto: "",
        },
      ];
			formData.rowsDevengado = [
        {
          id: 1,
          mes_seleccionado: "",
          monto: "",
        },
      ];
		};

		const montoTotal = (rowsName) => computed(() => {
      return formData[rowsName].reduce(
        (total, row) => total + (parseFloat(row.monto) || 0), 0).toFixed(2);
    });

		const agregarFila = (rowsName) => {
      const newId = formData[rowsName].length + 1;
      formData[rowsName].push({
        id: newId,
        mes_seleccionado: "",
        monto: "",
      });
    };

		const eliminarFila = (index, rowsName) => {
      formData[rowsName].splice(index, 1);
    };

		const programaticasDisponibles = [
      '17.0.0.0.0 - Definición de Políticas de Comercio Exterior',
      '17.0.0.1.0 - Conducción y Administración',
      '17.0.0.45.0 - Implementacion de la Ventanilla Única de Comercio Exterior (VUCE)',
    ];

    const fuentesDisponibles = [
      '11 Tesoro Nacional',
      '12 Recursos propios',
      '13 Recursos con Afectación Específica',
    ];

    const mesesDisponibles = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

		const initialFormData = {
      programatica_seleccionada: "",
      objeto_del_gasto: "",
      fuente_seleccionada: "",
      rowsCompromiso: [
        {
          id: 1,
          mes_seleccionado: "",
          monto: "",
        },
      ],
			rowsDevengado: [
        {
          id: 1,
          mes_seleccionado: "",
          monto: "",
        },
      ],
    };

		const formData = reactive({ ...initialFormData });
		
		const sendData = () => {
			try {
        const payload = {
          programatica_seleccionada: formData.programatica_seleccionada,
          objeto_del_gasto: formData.objeto_del_gasto,
          fuente_seleccionada: formData.fuente_seleccionada,
          rowsCompromiso: formData.rowsCompromiso.map(row => ({
            month: row.mes_seleccionado,
            monto: row.monto,
          })),
					rowsDevengado: formData.rowsDevengado.map(row => ({
            month: row.mes_seleccionado,
            monto: row.monto,
          })),
        };

				axios.post(props.endpoint, payload, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('auth_token')}`
					},
				})
				.then(response => {
					successMessage.value = "Datos enviados correctamente.";
					resetForm(); 
					console.log(response.data)
					// redirect to partidas
				})
				.catch(error => {
					errorMessage.value = error.response?.data?.message || "An unknown error occurred.";
					console.error(error.response?.data?.message);
				});
			} catch (error) {
        console.error("Error sending data:", error);
				errorMessage.value = error;
      }
			
    };

		return {
			errorMessage,
			successMessage,
      sendData,
      programaticasDisponibles,
      fuentesDisponibles,
      mesesDisponibles,
      formData,
			montoTotal,
			agregarFila,
			eliminarFila,
    }

	}
}
</script>