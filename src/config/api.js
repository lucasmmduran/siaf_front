const API_URL = "https://127.0.0.1:8000/api";

export const apiRoutes = {
  login_check: `${API_URL}/login_check`,
  enviarCabecera: `${API_URL}/cabecera`,
  getPlans: `${API_URL}/get_plans`,
  getProccess: `${API_URL}/get_proccess`,
  
};

export default API_URL;