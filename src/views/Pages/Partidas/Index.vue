<template>
<div>
	<section class="tabla-partidas-presupuestarias mt-32">
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
							<tr class="selected">
								<th class="numberID text-center"><span>1</span></th>
								<td class="text-center">11</td>
								<td>17.0.0.0.0</td>
								<td>2.3.5.0</td>
								<td class="text-end">$ -</td>
								<td class="text-end">$ 5.000,00</td>
								<td class="text-end">$ -</td>
								<td class="text-end">$ 12.000,02</td>
								<td class="text-center"><span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"><button type="button" class="btn-icon visualizar" data-bs-toggle="modal" data-bs-target="#visualizarUno"></button></span><span class="me-2 iconos" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"><button type="button" class="btn-icon editar" data-bs-toggle="modal" data-bs-target="#EditarPartida"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon eliminar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
							</tr>
							<tr class="selectable-row">
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
							</tr>
						</tbody>
					</table>
				</div>
				
				<div class="text-registros">
					<p>Mostrando registros del 1 al 2 de un total de 4 registros.</p>
				</div>
				<nav aria-label="Page navigation example">
					<ul class="pagination justify-content-center mb-3">
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
  <EditarPartida />
</div>
</template>

<script>
import MostrarPartida from '@/views/Pages/Partidas/MostrarPartida.vue';
import AgregarPartida from '@/views/Pages/Partidas/AgregarPartida.vue';
import EditarPartida from '@/views/Pages/Partidas/EditarPartida.vue';

export default {
  components: { 
    MostrarPartida,
    AgregarPartida,
    EditarPartida,
  }
}
</script>