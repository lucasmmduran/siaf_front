<template>
	 <main class="formulario-main">

		<section class="formulario-planificacion">
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
												<span class="me-2 iconos"><button type="button" class="btn-icon add-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Cargar proceso"></button></span>
												<span class="me-2 iconos"><button type="button" class="btn-icon print-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
												<span class="me-2 iconos"><button type="button" class="btn-icon excel-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
											</div>
										</div>
									</div>
								</div>
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
										<tr>
											<th class="numberID"><span>1</span></th>
											<td>Lorem Ipsum</td>
											<td>XXXXXXXXXX</td>
											<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación." data-bs-custom-class="custom-tooltip">Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación.</td>
											<td class="text-end">$ 12.000.000,02</td>
											<td class="text-end">US$ 12.000,00</td>
											<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
										</tr>
										<tr>
											<th class="numberID"><span>2</span></th>
											<td>ONG</td>
											<td>XXXXXXXXXX</td>
											<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación." data-bs-custom-class="custom-tooltip">Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación.</td>
											<td class="text-end">$ 12.000.000,02</td>
											<td class="text-end">US$ 12.000,00</td>
											<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
										</tr>
										<tr>
											<th class="numberID"><span>3</span></th>
											<td>ONG Estado</td>
											<td>XXXXXXXXXX</td>
											<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación." data-bs-custom-class="custom-tooltip">Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación.</td>
											<td class="text-end">$ 2.358.900,56</td>
											<td class="text-end">US$ 2.348,56</td>
											<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
										</tr>
										<tr>
											<th class="numberID"><span>4</span></th>
											<td>Universidades</td>
											<td>XXXXXXXXXX</td>
											<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación." data-bs-custom-class="custom-tooltip">Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación.</td>
											<td class="text-end">$ 12.000.000,02</td>
											<td class="text-end">US$ 12.000,00</td>
											<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
										</tr>
										<tr>
											<th class="numberID"><span>5</span></th>
											<td>ONG</td>
											<td>XXXXXXXXXX</td>
											<td class="text-ellipsis" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación." data-bs-custom-class="custom-tooltip">Acá va una descripción que permita identificar de que se trata el proceso y si es necesario su justificación.</td>
											<td class="text-end">$ 12.000.000,02</td>
											<td class="text-end">US$ 12.000,00</td>
											<td class="text-center"><span class="me-2 iconos"><button type="button" class="btn-icon editar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Editar"></button></span><span class="me-2 iconos"><button type="button" class="btn-icon visualizar" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle"></button></span></td>
										</tr>
										<tr class="fila-total">
											<th colspan="4" scope="col" class="total-monto">Total</th>
											<th class="text-end">$ 350.000,00</th>
											<th class="text-end">$ 248.000,00</th>
											<th></th>
										</tr>
									</tbody>
								</table>
								<div class="text-registros">
									<p>Mostrando registros del 1 al 5 de un total de 20 registros.</p>
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
												<h5>Resumen presupuestario</h5>
											</div>
											<div class="col-2 d-flex justify-content-end">
												<span class="me-2 iconos"><button type="button" class="btn-icon print-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Imprimir"></button></span>
												<span class="me-2 iconos"><button type="button" class="btn-icon excel-negativo fondo-azul" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Descargar XLSX"></button></span>
											</div>
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
								<div class="text-registros">
									<p>Mostrando registros del 1 al 3 de un total de 3 registros.</p>
								</div>
								<nav aria-label="Page navigation example">
									<ul class="pagination justify-content-center mb-3">
										<li class="page-item disabled">
											<a class="page-link"><i class="fa-solid fa-chevron-left"></i></a>
										</li>
										<li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
										<li class="page-item">
											<a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a>
										</li>
									</ul>
								</nav>
						</div>
				</div>
		</section>

		<div class="container">
			<div class="row">
				<div class="col-12 d-flex justify-content-end mt-2 mb-5">
						<span><button type="" class="btn btn-mobile btn-contorno">Cancelar</button></span>
						<span class="ms-4"><button type="" class="btn btn-mobile btn-success">Enviar</button></span>
				</div>
			</div>
		</div>

	</main>
</template>