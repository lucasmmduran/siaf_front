<template>
	<main>
            <section id="dashboardInicio">
                <div class="container mb-5">
                    <div class="text-center mt-5 mb-5">
                        <h3 class="fw-bold">Te damos la bienvenida a SIAF</h3>
                    </div>
                    <!--dashboard-->
                    <article class="row">
                        <div class="col-3">
                            <div class="dashboard-card card mb-3">
															
															<RouterLink to="/planes">
																	<div
																	class="card-header bg-card d-flex justify-content-center align-items-center">
																	<img src="/img/Iconos_planes.svg" alt="Planes">
																</div>
																
																<div class="card-body">
																	<h5 class="card-title">Planes</h5>
																</div>
																<div class="card-footer"></div>
															</RouterLink>
                                
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="dashboard-card card mb-3">
                                <a href="#">
                                    <div
                                        class="card-header bg-card d-flex justify-content-center align-items-center">
                                        <img src="/img/Iconos_tableros.svg" alt="Tableros">
                                    </div>
    
                                    <div class="card-body">
                                        <h5 class="card-title">Tableros</h5>
                                    </div>
                                    <div class="card-footer"></div>
                                </a>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="dashboard-card card mb-3">
                                <a href="#">
                                    <div
                                        class="card-header bg-card d-flex justify-content-center align-items-center">
                                        <img src="/img/Iconos_consultas.svg" alt="Consultas">
                                    </div>
    
                                    <div class="card-body">
                                        <h5 class="card-title">Consultas</h5>
                                    </div>
                                    <div class="card-footer"></div>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <!-- MANTENER EL LAYOUT PARA LOS MENU Y DROPDOWN -->
            <div id="layoutblack" class="modal-backdrop fade d-none show"></div>
        </main>
</template>