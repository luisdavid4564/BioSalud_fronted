export interface Usuario {
  idUsuario?: number;
  nombreUsuario: string;
  clave: string;
  estado: string;
  rol: Rol;
}

export interface Rol {
  idRol?: number;
  nombre: string;
  descripcion?: string;
}
