const API_URL = "https://127.0.0.1:8000/api";

export const apiRoutes = {
  login_check: `${API_URL}/login_check`,
  enviarCabecera: `${API_URL}/cabecera`,
  getPlans: `${API_URL}/get_plans`,
  getProccess: `${API_URL}/get_proccess`,

  // rutas back oveja
  planes_cabecera_index: `${API_URL}/pla/planes/cabecera`,
  planes_cabecera_new: `${API_URL}/pla/planes/cabecera/new`,
  
};

export default API_URL;