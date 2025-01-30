import axios from 'axios';
import API_URL from './api';

axios.defaults.baseURL = API_URL;

const token = localStorage.getItem('auth_token');

if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Interceptor de respuestas para manejar errores de autenticación
axios.interceptors.response.use(
    (response) => response, // Devuelve la respuesta si no hay error
    async (error) => {
        // Si el token expiró (401), maneja la respuesta
        if (error.response?.status === 401) {
           
                /* try {
                    // Si tienes refresh tokens, intenta renovarlo
                    const refreshToken = localStorage.getItem('refresh_token');
                    if (refreshToken) {
                        const response = await axios.post('/auth/refresh', { refresh_token: refreshToken });

                        // Guarda el nuevo token y actualiza el header
                        const newToken = response.data.access_token;
                        localStorage.setItem('auth_token', newToken);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

                        // Reintenta la solicitud original con el nuevo token
                        error.config.headers['Authorization'] = `Bearer ${newToken}`;
                        return axios.request(error.config);
                    }
                } catch (refreshError) {
                    console.error('Error al renovar el token:', refreshError);
                } */

                // Si no tienes refresh tokens o la renovación falla
                localStorage.removeItem('auth_token');
                localStorage.removeItem('refresh_token');
                alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
                window.location.href = '/'; // Redirige al login
            
        }

        // Rechaza cualquier otro error
        //return Promise.reject(error);
    }
);

export default axios;