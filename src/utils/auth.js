// Guardar token y usuario
export const saveAuth = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Obtener token
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Borrar token
  export const logout = () => {
    localStorage.removeItem('token');
  };
  