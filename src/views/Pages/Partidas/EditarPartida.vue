<template>
	<!--Modal 3 - Editar partida-->
  <div class="modal fade" id="EditarPartida" tabindex="-1" aria-labelledby="EditarPartidaLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header border-gris d-flex justify-content-between align-items-start">
                <h6 class="montserrat fw-bold pb-4">Editar partida</h6>
                <i class="fa-regular fa-circle-xmark" data-bs-dismiss="modal"></i>
              </div>
              <div class="modal-body">
                <div class="col-12 d-flex justify-content-center pb-4">
                  <div id="detailsContainer">
                    <form id="dataForm">
                      <div class="row d-flex justify-content-center">
                        <div class="col-10 pb-3">
                          <label class="form-label fw-normal" for="select-programatica">Programática</label>
                          <div class="custom-select" id="select-programatica">
                            <div class="single-select-header form-select">
                              Seleccione una programática
                              <i class="fas fa-chevron-down select-icon"></i>
                            </div>
                            <div class="single-select-options">
                              <div class="single-option" title="17.0.0.0.0 - Definición de Políticas de Comercio Exterior (VUCE)" data-value="17.0.0.0.0 - Definición de Políticas de Comercio Exterior (VUCE)">17.0.0.0.0 - Definición de Políticas de Comercio Exterior</div>
                              <div class="single-option" title="17.0.0.1.0 - Conducción y Administración" data-value="17.0.0.1.0 - Conducción y Administración">17.0.0.1.0 - Conducción y Administración</div>
                              <div class="single-option" title="17.0.0.45.0 - Implementacion de la Ventanilla Única de Comercio Exterior (VUCE)" data-value="17.0.0.45.0  - Implementacion de la Ventanilla Única de Comercio Exterior (VUCE)">17.0.0.45.0 - Implementacion de la Ventanilla Única de Comercio Exterior (VUCE)</div>
                              <div class="single-option" title="Item 4" data-value="Item 4">Item 4</div>
                              <div class="single-option" title="Item 5" data-value="Item 5">Item 5</div>
                            </div>
                            <input type="hidden" class="selected-value" name="programatica" value="">
                          </div>
                        </div>
                        <div class="col-5">
                          <label for="objetoInput" class="form-label fw-normal">Objeto del gasto</label>
                          <input type="number" id="objetoInput" name="objetoInput" class="form-control form-number" placeholder="2.3.5.1">
                        </div>
                        <div class="col-5">
                          <label class="form-label fw-normal" for="select-fuente">Fuente</label>
                          <div class="custom-select" id="select-programatica">
                            <div class="single-select-header form-select">
                              Seleccione una fuente
                              <i class="fas fa-chevron-down select-icon"></i>
                            </div>
                            <div class="single-select-options">
                              <div class="single-option" title="11 Tesoro Nacional" data-value="11 Tesoro Nacional">11 Tesoro Nacional</div>
                              <div class="single-option" title="12 Recursos propios" data-value="12 Recursos propios">12 Recursos propios</div>
                              <div class="single-option" title="13 Recursos con Afectación Específica" data-value="13 Recursos con Afectación Específica">13 Recursos con Afectación Específica</div>
                              <div class="single-option" title="Item 4" data-value="Item 4">Item 4</div>
                              <div class="single-option" title="Item 5" data-value="Item 5">Item 5</div>
                            </div>
                            <input type="hidden" class="selected-value" name="programatica" value="">
                          </div>
                        </div>
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
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesUno">
                                    <div class="single-select-header form-select">
                                      Enero
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Febrero
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Marzo
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Abril
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">16.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Mayo
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Junio
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">10.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Julio
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">11.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Agosto
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">16.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Septiembre
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">11.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Octubre
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">15.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Noviembre
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">14.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesDos">
                                    <div class="single-select-header form-select">
                                      Diciembre
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">25.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr class="fila-total">
                                <th colspan="2">Total anual</th>
                                <th class="text-end">166.000.000,00</th>
                                <th></th>
                                <th></th>
                              </tr>
                            </tbody>
                          </table>
                          <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                              <div class="text-registros">
                                <p class="lora fw-normal">Cargando mes 1 de 12</p>
                              </div>
                              <button type="button" class="btn-primary btn-icono add-negativo" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Agregar mes"></button>
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
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBUno">
                                    <div class="single-select-header form-select">
                                      Enero
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">45.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBDos">
                                    <div class="single-select-header form-select">
                                      Febrero
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBUno">
                                    <div class="single-select-header form-select">
                                      Marzo
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBDos">
                                    <div class="single-select-header form-select">
                                      Abril
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">16.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBUno">
                                    <div class="single-select-header form-select">
                                      Mayo
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">12.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>
                                  <div class="custom-select" id="select-mesBDos">
                                    <div class="single-select-header form-select">
                                      Junio
                                      <i class="fas fa-chevron-down select-icon"></i>
                                    </div>
                                    <div class="single-select-options">
                                      <div class="single-option" title="Enero" data-value="Enero">Enero</div>
                                      <div class="single-option" title="Febrero" data-value="Febrero">Febrero</div>
                                      <div class="single-option" title="Marzo" data-value="Marzo">Marzo</div>
                                      <div class="single-option" title="Abril" data-value="Abril">Abril</div>
                                      <div class="single-option" title="Mayo" data-value="Mayo">Mayo</div>
                                      <div class="single-option" title="Junio" data-value="Junio">Junio</div>
                                      <div class="single-option" title="Julio" data-value="Julio">Julio</div>
                                      <div class="single-option" title="Agosto" data-value="Agosto">Agosto</div>
                                      <div class="single-option" title="Septiembre" data-value="Septiembre">Septiembre</div>
                                      <div class="single-option" title="Octubre" data-value="Octubre">Octubre</div>
                                      <div class="single-option" title="Noviembre" data-value="Noviembre">Noviembre</div>
                                      <div class="single-option" title="Diciembre" data-value="Diciembre">Diciembre</div>
                                    </div>
                                    <input type="hidden" class="selected-value" name="programatica" value="">
                                  </div></td>
                                <td class="text-start">10.000.000,00</td> <!--Input de entrada de información MONTO-->
                                <td></td>
                                <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                              </tr>
                              <tr class="fila-total">
                                <th colspan="2">Total anual</th>
                                <th class="text-end">107.000.000,00</th>
                                <th></th>
                                <th></th>
                              </tr>
                            </tbody>
                          </table>
                          <div class="row">
                            <div class="col-12 d-flex justify-content-between">
                              <div class="text-registros">
                                <p class="lora fw-normal">Cargando mes 1 de 12</p>
                              </div>
                              <button type="button" class="btn-primary btn-icono add-negativo" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Agregar mes"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="container">
                  <div class="row">
                    <div class="col-11 d-flex justify-content-end">
                        <span><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-contorno">Cancelar</button></span>
                        <span class="ms-4"><button type="button" class="btn btn-mobile btn-success">Guardar</button></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Fin Modal 3 - Editar partida-->
</template>