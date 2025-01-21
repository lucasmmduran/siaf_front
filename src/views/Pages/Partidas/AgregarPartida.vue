<template>
	<!--Modal 2 - Nueva partida-->
	<div class="modal fade" id="nuevaPartida" tabindex="-1" aria-labelledby="nuevaPartidaLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">

      <div class="modal-content">

        <div class="modal-header border-gris d-flex justify-content-between align-items-start">
          <h6 class="montserrat fw-bold pb-4">Nueva partida</h6>
          <i class="fa-regular fa-circle-xmark" data-bs-dismiss="modal"></i>
        </div>

        <div class="modal-body">
          <div class="col-12 d-flex justify-content-center pb-4">
            <!-- <div id="detailsContainer"> -->
              <div>
              <form id="dataForm">

                <div class="row d-flex justify-content-center">
                  <Selector 
                    class="col-10 pb-3"
                    label="Programática" 
                    name="programmatic" 
                    :options="programmatics" 
                    v-model="formData.selectedProgrammatic" 
                  />
                  <div class="col-5">
                    <label for="objetoInput" class="form-label fw-normal">Objeto del gasto</label>
                    <input v-model="formData.expenseObjective" type="number" id="objetoInput" name="objetoInput" class="form-control form-number" placeholder="2.3.5.1">
                  </div>
                  <Selector 
                    class="col-5"
                    label="Fuente" 
                    name="programmatic" 
                    :options="sources" 
                    v-model="formData.selectedSource" 
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
                        <tr>
                          <td></td>
                          <td>
                            <Selector 
                              label="" 
                              name="month" 
                              :options="months" 
                              v-model="formData.selectedMonthCommitment" 
                            />  
                          </td>
                          <td class="text-start">
                            <input v-model="formData.amountCommitment" type="number" id="amountCommitment" name="amountCommitment" class="form-control form-number" placeholder="Ingrese monto">
                          </td>
                          <td></td>
                          <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                        </tr>
                        <!-- <tr>
                          <td></td>
                          <td>
                            <div class="custom-select" id="select-mesDos">
                              <div class="single-select-header form-select">
                                Seleccione mes...
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
                            </div>
                          </td>
                          <td class="text-start">Ingrese monto</td>
                          <td></td>
                          <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                        </tr> -->
                        <tr class="fila-total">
                          <th colspan="2">Total anual</th>
                          <th class="text-end">00,00</th>
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
                            <Selector 
                              label="" 
                              name="month" 
                              :options="months" 
                              v-model="formData.selectedMonthAccruals" 
                            />   
                          </td>
                          <td class="text-start">
                            <input v-model="formData.amountAccruals" type="number" id="amountAccruals" name="amountAccruals" class="form-control form-number" placeholder="Ingrese monto">
                          </td>
                          <td></td>
                          <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                        </tr>
                        <!-- <tr>
                          <td></td>
                          <td>
                            <div class="custom-select" id="select-mesBDos">
                              <div class="single-select-header form-select">
                                Seleccione mes...
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
                          <td class="text-start">Ingrese monto</td>
                          <td></td>
                          <td class="text-center"><span class="iconos"><button type="button" class="btn-icon eliminar fondo-blanco" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar"></button></span></td>
                        </tr> -->
                        <tr class="fila-total">
                          <th colspan="2">Total anual</th>
                          <th class="text-end">00,00</th>
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
                  <span class="ms-4"><button @click.prevent="sendData" type="button" class="btn btn-mobile btn-success">Guardar</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Fin Modal 2 - Nueva partida-->
</template>

<script>
import { ref, reactive } from 'vue';
import { apiRoutes } from '@/config/api';
import axios from 'axios';
import Selector from '@/views/Components/Selector.vue';

export default {
  components: { Selector },
  setup() {
    const programmatics = [
      '17.0.0.0.0 - Definición de Políticas de Comercio Exterior',
      '17.0.0.1.0 - Conducción y Administración',
      '17.0.0.45.0 - Implementacion de la Ventanilla Única de Comercio Exterior (VUCE)',
    ];

    const sources = [
      '11 Tesoro Nacional',
      '12 Recursos propios',
      '13 Recursos con Afectación Específica',
    ];

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const formData = reactive({
      selectedProgrammatic: '',
      expenseObjective: '',
      selectedSource: '',
      selectedMonthCommitment: '',
      amountCommitment: '',
      selectedMonthAccruals: '',
      amountAccruals: '',
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
      programmatics,
      sources,
      months,
      formData,
    }
  }
}

</script>