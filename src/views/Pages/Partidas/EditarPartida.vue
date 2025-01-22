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
          <!-- <div id="detailsContainer"> -->
          <FormPartida :endpoint="apiRoutes.enviarCabecera" />
        </div>
      </div>
      <div class="modal-footer">
        <div class="container">
          <div class="row">
            <div class="col-11 d-flex justify-content-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--Fin Modal 3 - Editar partida-->
</template>

<script>
import FormPartida from '@/views/Pages/Partidas/FormPartida.vue';
import { apiRoutes } from '@/config/api';

export default {
  components: { FormPartida },
  setup() {
    return {
      apiRoutes
    }
  }
}
</script>