export interface Paciente {
  idPaciente?: number;
  nombres: string;
  apellidos: string;
  dni: string;
  email: string;
  telefono: string;
  fechaNacimiento: string;
  sexo: 'Femenino' | 'Masculino';
  estado: 'Activo' | 'Inactivo';
  alergias: boolean;
}
