import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Orden {
  id: string;
  patient: string;
  doctor: string;
  speciality: string;
  type: string;
  date: string;
  status: 'Pendiente' | 'En Progreso' | 'Completada' | 'Cancelada';
}

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ordenes.html',
  styleUrls: ['./ordenes.css']
})
export class Ordenes implements OnInit {

  orders: Orden[] = [
    { id: '#001', patient: 'Ana Torres', doctor: 'Dr. García', speciality: 'Cardiología', type: 'Electrocardiograma', date: '2025-09-01', status: 'Cancelada' },
    { id: '#002', patient: 'Luis Pérez', doctor: 'Dr. Ramírez', speciality: 'Radiología', type: 'Rayos X', date: '2025-09-02', status: 'Completada' },
    { id: '#003', patient: 'Marta López', doctor: 'Dr. Torres', speciality: 'Medicina General', type: 'Consulta', date: '2025-09-03', status: 'Cancelada' },
    { id: '#004', patient: 'Carlos Medina', doctor: 'Dr. Herrera', speciality: 'Hematología', type: 'Análisis de Sangre', date: '2025-09-04', status: 'En Progreso' },
    { id: '#005', patient: 'Elena Ruiz', doctor: 'Dr. Sánchez', speciality: 'Dermatología', type: 'Evaluación Cutánea', date: '2025-09-05', status: 'Pendiente' },
    { id: '#006', patient: 'Pedro Gómez', doctor: 'Dr. Vargas', speciality: 'Neurología', type: 'Resonancia Magnética', date: '2025-09-06', status: 'Completada' },
  ];

  filteredOrders: Orden[] = [];

  NombreDoctor: string = '';
  NombrePaciente: string = '';
  speciality: string = '';

  mostrarCanceladas: boolean = false;

  ordenForm!: FormGroup;
  editando: boolean = false;
  ordenEditandoId: string | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ordenForm = this.fb.group({
      patient: ['', Validators.required],
      doctor: ['', Validators.required],
      speciality: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      status: ['Pendiente', Validators.required]
    });

    this.filtrarLista();
  }

  nuevaOrden(): void {
    this.editando = false;
    this.ordenEditandoId = null;
    this.ordenForm.reset({ status: '' });
  }

  filtrarLista(): void {
    if (this.mostrarCanceladas) {
      this.filteredOrders = this.orders.filter(o => o.status === 'Cancelada');
    } else {
      this.filteredOrders = this.orders.filter(o => o.status !== 'Cancelada');
    }

    if (this.NombreDoctor || this.NombrePaciente || this.speciality) {
      this.filteredOrders = this.filteredOrders.filter(o =>
        (!this.NombreDoctor || o.doctor.toLowerCase().includes(this.NombreDoctor.toLowerCase())) &&
        (!this.NombrePaciente || o.patient.toLowerCase().includes(this.NombrePaciente.toLowerCase())) &&
        (!this.speciality || o.speciality.toLowerCase().includes(this.speciality.toLowerCase()))
      );
    }
  }

  verOrdenesCanceladas(): void {
    this.mostrarCanceladas = !this.mostrarCanceladas;
    this.filtrarLista();
  }

  searchOrders(): void {
    this.filtrarLista();
  }

  registrarOrden(): void {
    if (this.ordenForm.invalid) {
      Swal.fire('Error', 'Por favor complete todos los campos.', 'warning');
      return;
    }

    if (this.editando && this.ordenEditandoId) {

      Swal.fire({
        title: '¿Guardar cambios?',
        text: 'Se actualizarán los datos de la orden.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          const index = this.orders.findIndex(o => o.id === this.ordenEditandoId);
          if (index !== -1) {
            this.orders[index] = { id: this.ordenEditandoId, ...this.ordenForm.value };
          }
          this.editando = false;
          this.ordenEditandoId = null;

          Swal.fire({
            icon: 'success',
            title: 'Orden actualizada',
            text: 'La orden fue modificada correctamente.',
            timer: 1500,
            showConfirmButton: false
          });

          this.ordenForm.reset({ status: 'Pendiente' });
          this.filtrarLista();
        }
      });

    } else {
      const newOrden: Orden = {
        id: '#00' + (this.orders.length + 1),
        ...this.ordenForm.value
      };
      this.orders.push(newOrden);

      Swal.fire({
        icon: 'success',
        title: 'Orden registrada',
        text: 'La nueva orden fue agregada correctamente.',
        timer: 1500,
        showConfirmButton: false
      });

      this.ordenForm.reset({ status: 'Pendiente' });
      this.filtrarLista();
    }
  }

  modificarOrden(id: string): void {
    const orden = this.orders.find(o => o.id === id);
    if (orden) {
      this.ordenForm.patchValue(orden);
      this.editando = true;
      this.ordenEditandoId = id;
    }
  }
}
