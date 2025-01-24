<template>
	<span>
		<button 
			data-bs-target="#EliminarRegistro" 
			data-bs-toggle="modal" 
			type="button" 
			class="btn-icon eliminar" 
			data-bs-title="Eliminar">
		</button>

		<div class="modal fade" id="EliminarRegistro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header d-flex justify-content-between">
						<h5 class="modal-title"><img src="/img/warning-red.svg" class="img-icono" alt="">¿Estás seguro de que deseas eliminar el registro?</h5>
						<i class="fa-regular fa-circle-xmark text-dark pe-auto mb-5" data-bs-dismiss="modal" aria-label="Close"></i>
					</div>
					<div class="modal-body pt-0">
						<p>Esta acción no puede deshacerse.</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-mobile btn-black me-2" data-bs-dismiss="modal">Cancelar</button>
						<button type="button" class="btn btn-mobile btn-success">Confirmar</button>
					</div>
				</div>
			</div>
		</div>

	</span>
</template>