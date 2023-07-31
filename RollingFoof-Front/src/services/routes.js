import { getAuthToken } from './auth';

export const privateRoutes = ['/admin']; // Rutas protegidas para el administrador

export const hasAccess = (route) => {
  const authToken = getAuthToken();
  if (privateRoutes.includes(route)) {
    // Verificar si el usuario tiene acceso a la ruta protegida
    // Aquí puedes agregar la lógica para verificar los permisos del usuario
    // Por ejemplo, si es un administrador o un usuario común
    // Retorna true si el usuario tiene acceso, y false en caso contrario
  }
  return true; // Por defecto, se permite el acceso a todas las rutas no protegidas
};
