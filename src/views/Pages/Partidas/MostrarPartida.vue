<template>
  <!--modal 1 - Detalle de la partida 1-->
  <div class="modal fade" id="visualizarUno" tabindex="-1" aria-labelledby="visualizarUnoLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header border-gris d-flex justify-content-between align-items-start">
                <h6 class="montserrat fw-bold pb-4">Ver detalle de la partida</h6>
                <i class="fa-regular fa-circle-xmark" data-bs-dismiss="modal"></i>
              </div>
              <div class="modal-body">
                <div class="col-12 d-flex justify-content-center pb-4">
                  <div id="detailsContainer">
                    <form id="dataForm">
                      <div class="row d-flex justify-content-center">
                        <div class="col-10 pb-3">
                          <label class="form-label fw-normal" for="select-programatica">Programática</label>
                          <div class="custom-select" disabled id="select-programatica">
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
                          <input type="number" id="objetoInput" name="objetoInput" class="form-control form-number" placeholder="2.3.5.1" disabled>
                        </div>
                        <div class="col-5">
                          <label class="form-label fw-normal" for="select-fuente">Fuente</label>
                          <div class="custom-select" disabled id="select-programatica">
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
                                <th>EUR</th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- Trimestre 1 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q1', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 1
                                </th>
                                <td></td>
                                <td class="text-end">36.000.000,00</td>
                                <td class="text-end">36.000,00</td>
                              </tr>
                              <tr class="hidden-row q1">
                                <td></td>
                                <td>Enero</td>
                                <td class="text-end">12.000.000,00</td>
                                <td class="text-end">12.000,00</td>
                              </tr>
                              <tr class="hidden-row q1">
                                <td></td>
                                <td>Febrero</td>
                                <td class="text-end">12.000.000,00</td>
                                <td class="text-end">12.000,00</td>
                              </tr>
                              <tr class="hidden-row q1">
                                <td></td>
                                <td>Marzo</td>
                                <td class="text-end">12.000.000,00</td>
                                <td class="text-end">12.000,00</td>
                              </tr>
                        
                              <!-- Trimestre 2 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q2', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 2
                                </th>
                                <td></td>
                                <td class="text-end">38.000.000,00</td>
                                <td class="text-end">38.000,00</td>
                              </tr>
                              <tr class="hidden-row q2">
                                <td></td>
                                <td>Abril</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                              <tr class="hidden-row q2">
                                <td></td>
                                <td>Mayo</td>
                                <td class="text-end">12.000.000,00</td>
                                <td class="text-end">12.000,00</td>
                              </tr>
                              <tr class="hidden-row q2">
                                <td></td>
                                <td>Junio</td>
                                <td class="text-end">12.000.000,00</td>
                                <td class="text-end">12.000,00</td>
                              </tr>
                        
                              <!-- Trimestre 3 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q3', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 3
                                </th>
                                <td></td>
                                <td class="text-end">42.000.000,00</td>
                                <td class="text-end">42.000,00</td>
                              </tr>
                              <tr class="hidden-row q3">
                                <td></td>
                                <td>Julio</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                              <tr class="hidden-row q3">
                                <td></td>
                                <td>Agosto</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                              <tr class="hidden-row q3">
                                <td></td>
                                <td>Septiembre</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                        
                              <!-- Trimestre 4 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q4', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 4
                                </th>
                                <td></td>
                                <td class="text-end">50.000.000,00</td>
                                <td class="text-end">50.000,00</td>
                              </tr>
                              <tr class="hidden-row q4">
                                <td></td>
                                <td>Octubre</td>
                                <td class="text-end">16.000.000,00</td>
                                <td class="text-end">16.000,00</td>
                              </tr>
                              <tr class="hidden-row q4">
                                <td></td>
                                <td>Noviembre</td>
                                <td class="text-end">17.000.000,00</td>
                                <td class="text-end">17.000,00</td>
                              </tr>
                              <tr class="hidden-row q4">
                                <td></td>
                                <td>Diciembre</td>
                                <td class="text-end">17.000.000,00</td>
                                <td class="text-end">17.000,00</td>
                              </tr>

                              <tr class="fila-total">
                                <th colspan="2">Total anual</th>
                                <th class="text-end">166.000.000,00</th>
                                <th class="text-end">166.000,00</th>
                              </tr>
                            </tbody>
                          </table>
                          <table class="mt-4 tabla-trimestral">
                            <thead>
                              <tr>
                                <th class="fondo-azul text-white">Devengado</th>
                                <th>Mes</th>
                                <th>$</th>
                                <th>EUR</th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- Trimestre 1 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q5', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 1
                                </th>
                                <td></td>
                                <td class="text-end">42.000.000,00</td>
                                <td class="text-end">42.000,00</td>
                              </tr>
                              <tr class="hidden-row q5">
                                <td></td>
                                <td>Enero</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                              <tr class="hidden-row q5">
                                <td></td>
                                <td>Febrero</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>
                              <tr class="hidden-row q5">
                                <td></td>
                                <td>Marzo</td>
                                <td class="text-end">14.000.000,00</td>
                                <td class="text-end">14.000,00</td>
                              </tr>

                              <!-- Trimestre 2 -->
                              <tr>
                                <th>
                                  <span class="arrow" onclick="toggleRows('q6', this)"><i class="fa-solid fa-chevron-down"></i></span>
                                  Total Trimestre 2
                                </th>
                                <td></td>
                                <td class="text-end">50.000.000,00</td>
                                <td class="text-end">50.000,00</td>
                              </tr>
                              <tr class="hidden-row q6">
                                <td></td>
                                <td>Abril</td>
                                <td class="text-end">16.000.000,00</td>
                                <td class="text-end">16.000,00</td>
                              </tr>
                              <tr class="hidden-row q6">
                                <td></td>
                                <td>Mayo</td>
                                <td class="text-end">17.000.000,00</td>
                                <td class="text-end">17.000,00</td>
                              </tr>
                              <tr class="hidden-row q6">
                                <td></td>
                                <td>Junio</td>
                                <td class="text-end">17.000.000,00</td>
                                <td class="text-end">17.000,00</td>
                              </tr>

                              <tr class="fila-total">
                                <th colspan="2">Total anual</th>
                                <th class="text-end">92.000.000,00</th>
                                <th class="text-end">92.000,00</th>
                              </tr>
                            </tbody>
                          </table>
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
                      <span class="ms-4"><button type="button" data-bs-dismiss="modal" class="btn btn-mobile btn-success">Volver</button></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--fin modal 1-->
</template>