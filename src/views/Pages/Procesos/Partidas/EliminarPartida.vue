<template>
	<span>
		<button 
			:data-bs-target="'#EliminarRegistro_'+partida.id" 
			data-bs-toggle="modal" 
			type="button" 
			class="btn-icon eliminar" 
			data-bs-title="Eliminar">
		</button>

		<div class="modal fade" :id="'EliminarRegistro_'+partida.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header d-flex justify-content-between">
						<h5 class="modal-title"><img src="/img/warning-red.svg" class="img-icono" alt="">¿Estás seguro de que deseas eliminar el registro {{ partida.id }}?</h5>
						<i class="fa-regular fa-circle-xmark text-dark pe-auto mb-5" data-bs-dismiss="modal" aria-label="Close"></i>
					</div>
					<div class="modal-body pt-0">
						<p>Esta acción no puede deshacerse.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-mobile btn-black me-2" data-bs-dismiss="modal">Cancelar</button>
						<button @click="destroy(partida)" type="button" class="btn btn-mobile btn-success">Confirmar</button>
					</div>
				</div>
			</div>
		</div>

	</span>
</template>

<script>
import { defineComponent } from 'vue';

export default {
	props: {
		partida: {
			type: Object,
		}
	},

	setup(props, { emit }) {
		const partida = props.partida;

		const closeModal = (partida) => {
			const modalElement = document.getElementById("EliminarRegistro_"+partida.id);
			console.log(modalElement);
				const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
				modalInstance.hide();
		};

		const destroy = (partida) => {
			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i);
				
				// Comprobar si la clave empieza con 'partidas'
				if (key && key.startsWith('partidas')) {
					const data = JSON.parse(localStorage.getItem(key));

					
					const index = data.findIndex(item => item.id === partida.id);
					
					if (index !== -1) {
						// Eliminar la partida del array
						data.splice(index, 1);


						localStorage.setItem(key, JSON.stringify(data));
						console.log(`Partida con ID ${partida.id} eliminada`);
						emit('eliminarPartida', partida.id);
						closeModal(partida);
						return;
					}
				}
			}
		}

	
		return {
			destroy,
			partida,
		}
	}
}
</script>