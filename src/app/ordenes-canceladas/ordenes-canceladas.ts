import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


interface Orden {
  id: string;
  paciente: string;
  doctor: string;
  tipoOrden: string;
  fechaSolicitud: string;
  estado: 'Pendiente' | 'En Progreso' | 'Completada' | 'Cancelada';
}

@Component({
  selector: 'app-ordenes-canceladas',
  imports: [CommonModule], 
  templateUrl: './ordenes-canceladas.html',
  styleUrls: ['./ordenes-canceladas.css']
})
export class OrdenesCanceladas {
  ordenes: Orden[] = [
    { id: '#004', paciente: 'Carlos Rodríguez', doctor: 'Dr. Martinez', tipoOrden: 'Consulta General', fechaSolicitud: '2024-01-18', estado: 'Cancelada' },
    { id: '#005', paciente: 'Laura Martínez', doctor: 'Dr. Garcia', tipoOrden: 'Examen Cardiológico', fechaSolicitud: '2024-01-19', estado: 'Cancelada' }
  ];
}
