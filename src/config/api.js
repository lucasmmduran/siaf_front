const API_URL = "https://127.0.0.1:8000/api";

export const apiRoutes = {
  login_check: `${API_URL}/auth`,
  enviarCabecera: `${API_URL}/cabecera`,
  getPlans: `${API_URL}/get_plans`,
  getProccess: `${API_URL}/get_proccess`,

  planes_cabecera_index: `${API_URL}/pla/planes/cabecera`,
  planes_cabecera_selectores: `${API_URL}/pla/planes/cabecera/selectores`,
  planes_cabecera_new: `${API_URL}/pla/planes/cabecera/new`,
  planes_cabecera_edit: `${API_URL}/pla/planes/cabecera/{id}/edit`,

  //planes_procesos_index: `${API_URL}/pla/planes/procesos`,
  planes_procesos_selectores: `${API_URL}/pla/planes/procesos/selectores`,
  planes_procesos_new: `${API_URL}/pla/planes/procesos/new`,
};

export default API_URL;