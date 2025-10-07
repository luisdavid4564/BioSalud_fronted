import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface OrdenPendiente {
  id: string;
  patient: string;
  doctor: string;
  type: string;
  date: string;
  estado: string; 
}

interface TomaMuestra {
  idToma: string;
  fechaHora: string;
  tipoMuestra: string;
  idOrden: string | null;
  idTecnico: string;
}

@Component({
  selector: 'app-toma-muestra',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './toma-muestra.html',
  styleUrls: ['./toma-muestra.css']
})
export class TomaMuestraComponent implements OnInit {

  ordenesPendientes: OrdenPendiente[] = [
    { id: '#001', patient: 'Ana Torres', doctor: 'Dr. García', type: 'Análisis de Sangre', date: '2025-09-01', estado: 'Pendiente' },
    { id: '#004', patient: 'Carlos Medina', doctor: 'Dr. Herrera', type: 'Análisis de Orina', date: '2025-09-04', estado: 'Pendiente' },
    { id: '#005', patient: 'Elena Ruiz', doctor: 'Dr. Sánchez', type: 'Biopsia', date: '2025-09-05', estado: 'Pendiente' },
  ];

  filteredOrdenes: OrdenPendiente[] = [];

  NombrePaciente: string = '';
  TipoExamen: string = '';

  tomaForm!: FormGroup;
  nuevaTomaForm!: FormGroup;
  ordenSeleccionada: OrdenPendiente | null = null;

  tecnicos: string[] = ['Técnico 1', 'Técnico 2', 'Técnico 3']; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tomaForm = this.fb.group({
      tipoMuestra: ['', Validators.required],
      idTecnico: ['', Validators.required],
      fechaHora: [new Date().toISOString().slice(0, 16), Validators.required]
    });

    this.nuevaTomaForm = this.fb.group({
      paciente: ['', Validators.required],
      doctor: ['', Validators.required],
      tipoExamen: ['', Validators.required],
      fecha: ['', Validators.required]
    });

    this.filtrarLista();
  }

  filtrarLista(): void {
    this.filteredOrdenes = this.ordenesPendientes.filter(o =>
      (!this.NombrePaciente || o.patient.toLowerCase().includes(this.NombrePaciente.toLowerCase())) &&
      (!this.TipoExamen || o.type.toLowerCase().includes(this.TipoExamen.toLowerCase()))
    );
  }

  searchOrdenes(): void {
    this.filtrarLista();
  }

  abrirRegistroToma(orden: OrdenPendiente): void {
    this.ordenSeleccionada = orden;
    this.tomaForm.reset({
      tipoMuestra: '',
      idTecnico: '',
      fechaHora: new Date().toISOString().slice(0, 16)
    });
  }

  registrarToma(): void {
    if (this.tomaForm.invalid || !this.ordenSeleccionada) {
      Swal.fire('Error', 'Por favor complete todos los campos.', 'warning');
      return;
    }

    const nuevaToma: TomaMuestra = {
      idToma: 'T' + Date.now(),
      fechaHora: this.tomaForm.value.fechaHora,
      tipoMuestra: this.tomaForm.value.tipoMuestra,
      idOrden: this.ordenSeleccionada.id,
      idTecnico: this.tomaForm.value.idTecnico
    };

    console.log('Toma registrada desde orden:', nuevaToma);

    this.ordenSeleccionada.estado = 'Muestra tomada';

    Swal.fire({
      icon: 'success',
      title: 'Toma registrada',
      text: `La toma de muestra fue registrada y el estado cambió a "Muestra tomada".`,
      timer: 2000,
      showConfirmButton: false
    });

    this.filtrarLista();
  }

  guardarNuevaToma(): void {
    if (this.nuevaTomaForm.invalid) {
      Swal.fire('Error', 'Por favor complete todos los campos.', 'warning');
      return;
    }

    const nuevaOrden: OrdenPendiente = {
      id: '#' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
      patient: this.nuevaTomaForm.value.paciente,
      doctor: this.nuevaTomaForm.value.doctor,
      type: this.nuevaTomaForm.value.tipoExamen,
      date: this.nuevaTomaForm.value.fecha,
      estado: 'Pendiente'
    };

    this.ordenesPendientes.push(nuevaOrden);
    this.filtrarLista();

    Swal.fire({
      icon: 'success',
      title: 'Nueva orden agregada',
      text: 'Se registró una nueva orden de toma de muestra.',
      timer: 1500,
      showConfirmButton: false
    });

    this.nuevaTomaForm.reset();
  }
}
