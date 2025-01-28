<template>
<div>
	<section class="tabla-partidas-presupuestarias">
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
							<div class="col-11 d-flex justify-content-center align-items-center">
								<h5>Partidas presupuestarias</h5>
							</div>
							<div class="col-1 d-flex justify-content-end">
								<span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Cargar proceso"><button type="button" class="btn-icon add-negativo fondo-azul" data-bs-toggle="modal" data-bs-target="#nuevaPartida"></button></span>
							</div>
						</div>
					</div>
					<table class="table table-bordered table-striped" id="mainTable">
						<thead>
							<tr class="title-col">
								<th scope="col"></th>
								<th scope="col">FF</th>
								<th scope="col">Programática</th>
								<th scope="col">Objeto gasto</th>
								<th scope="col">T1</th>
								<th scope="col">T2</th>
								<th scope="col">T3</th>
								<th scope="col">T4</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="p in partidas" :key="p.id" class="selectedNo">
								<th class="numberID text-center"><span>{{ p.id }}</span></th>
								<td class="text-center">{{ p.fuente }}</td>
								<td>{{ p.programatica }}</td>
								<td>{{ p.objeto_gasto }}</td>
								<td class="text-end">{{ p.trimestresCompromiso?.t1 }}</td>
								<td class="text-end">{{ p.trimestresCompromiso?.t2 }}</td>
								<td class="text-end">{{ p.trimestresCompromiso?.t3 }}</td>
								<td class="text-end">{{ p.trimestresCompromiso?.t4 }}</td>
								<td class="">
									<!-- <span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle">
										<button type="button" class="btn-icon visualizar" data-bs-toggle="modal" data-bs-target="#visualizarUno"></button>
									</span> -->
									<span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar">
										<button type="button" class="btn-icon editar" data-bs-toggle="modal" :data-bs-target="'#EditarPartida_'+p.id"></button>
									</span>
									<EditarPartida 
										:partidaSeleccionada="p"
										@update:partidaSeleccionada="actualizarPartida"
									/>
									<span class="me-2 iconos">
										<EliminarPartida 
											@eliminarPartida="eliminarPartida" 
											:partida="p" />
									</span>
								</td>
							</tr>
							<!-- <tr class="selectable-row">
								<th class="numberID text-center"><span>2</span></th>
								<td class="text-center">12</td>
								<td>10.01.01.001</td>
								<td>2.3.5.1</td>
								<td class="text-end">$ -</td>
								<td class="text-end">$ 7.000,00</td>
								<td class="text-end">$ -</td>
								<td class="text-end">$ 16.000,05</td>
								<td class="text-center"><span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"><button type="button" class="btn-icon visualizar fondo-blanco" data-bs-toggle="modal" data-bs-target="#visualizarDos"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon editar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
							</tr>
							<tr class="fila-total">
								<th colspan="4" scope="col" class="total-monto">Total</th>
								<th class="text-end">$ -</th>
								<th class="text-end">$ 35.000,00</th>
								<th class="text-end">$ -</th>
								<th class="text-end">$ 48.000,07</th>
								<th></th>
							</tr> -->
						</tbody>
					</table>
				</div>
				
				<div class="text-registros">
					<p>Mostrando {{ partidas.length }} registros.</p>
				</div>
				<nav aria-label="Page navigation example">
					<ul class="pagination justify-content-center">
						<li class="page-item disabled">
							<a class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
						</li>
						<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item">
							<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
  <MostrarPartida />
  <AgregarPartida />
  
</div>
</template>

<script>
import { reactive, ref, onMounted, watch, inject, provide } from 'vue';

import MostrarPartida from '@/views/Pages/Procesos/Partidas/MostrarPartida.vue';
import AgregarPartida from '@/views/Pages/Procesos/Partidas/AgregarPartida.vue';
import EditarPartida from '@/views/Pages/Procesos/Partidas/EditarPartida.vue';
import EliminarPartida from '@/views/Pages/Procesos/Partidas/EliminarPartida.vue';
import { useRoute } from 'vue-router';

export default {
  components: { 
    MostrarPartida,
    AgregarPartida,
    EditarPartida,
		EliminarPartida
  },

	setup(){
		const partidas = ref([]);
		const route = useRoute();	
		const procesoId = route.params.procesoId;
		const partidaSeleccionada = ref([]);

		const actualizarPartida = (nuevaPartida) => {
			console.log("q viene?" + JSON.stringify(nuevaPartida));
			partidaSeleccionada.value = { ...nuevaPartida }; // Asignar un nuevo objeto reactivo
  		console.log("Nueva partida: " + JSON.stringify(partidaSeleccionada.value));

    };

		const eliminarPartida = (id) => {
      const index = partidas.value.findIndex(partida => partida.id === id);
      if (index !== -1) {
        partidas.value.splice(index, 1);
      }
    };

		onMounted(() => {
			const partidasGuardadas = localStorage.getItem("partidas_" + procesoId);
			if (partidasGuardadas) {
				partidas.value = JSON.parse(partidasGuardadas);
			}
		});

		provide("partidas", partidas);

		watch(partidas, (nuevaPartida) => {
			localStorage.setItem("partidas_" + procesoId, JSON.stringify(nuevaPartida));
		}, { deep: true });

		/* const editarPartida = (p) => {
			partidaSeleccionada.value = p;
			console.log(partidaSeleccionada.value.id);
			nextTick(() => {
				const modal = new bootstrap.Modal(document.getElementById('EditarPartida'));
				modal.show();
			});
		} */

		return {
			partidas,
			procesoId,
			partidaSeleccionada,
			eliminarPartida,
			actualizarPartida,
		}
	}
}
</script>

<style scoped>
	/*
		comentadas en 06-tablas.css 
			#mainTable tbody tr.fila-total:hover
			#mainTable tbody tr:not(.selected):hover
  		#mainTable tbody tr.selected
	*/ 
</style>