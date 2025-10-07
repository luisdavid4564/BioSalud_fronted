import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

interface Resultado {
  idResultado: string;
  idOrden: string;
  paciente: string;
  medico: string;
  fechaResultado: string;
  descripcion: string;
  valores: string;
  conclusiones: string;
  validado: boolean;
  entregado: boolean;
  metodoEntrega: string;
}

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './resultados.html',
  styleUrls: ['./resultados.css']
})
export class ResultadosComponent implements OnInit {

  resultados: Resultado[] = [
    {
      idResultado: 'R001',
      idOrden: '#001',
      paciente: 'Ana Torres',
      medico: 'Dr. García',
      fechaResultado: '2025-09-02',
      descripcion: 'Análisis de Sangre',
      valores: 'Hemoglobina: 13.5 g/dL, Glucosa: 90 mg/dL',
      conclusiones: 'Resultados dentro de parámetros normales.',
      validado: true,
      entregado: true,
      metodoEntrega: 'Digital'
    },
    {
      idResultado: 'R002',
      idOrden: '#002',
      paciente: 'Luis Pérez',
      medico: 'Dr. Ramírez',
      fechaResultado: '2025-09-03',
      descripcion: 'Rayos X',
      valores: 'No se observan anomalías.',
      conclusiones: 'Informe normal.',
      validado: true,
      entregado: false,
      metodoEntrega: ''
    },
    {
      idResultado: 'R003',
      idOrden: '#004',
      paciente: 'Carlos Medina',
      medico: 'Dr. Herrera',
      fechaResultado: '2025-09-05',
      descripcion: 'Análisis de Orina',
      valores: 'pH: 6.0, Proteínas: Negativo',
      conclusiones: 'Sin indicios de infección.',
      validado: false,
      entregado: false,
      metodoEntrega: ''
    }
  ];

  filteredResultados: Resultado[] = [];

  filtroPaciente: string = '';
  filtroMedico: string = '';
  filtroValidado: string = '';

  resultadoForm: FormGroup;
  editando: boolean = false;
  resultadoEditando: Resultado | null = null;

  constructor(private fb: FormBuilder) {
    this.resultadoForm = this.fb.group({
      descripcion: ['', Validators.required],
      valores: ['', Validators.required],
      conclusiones: ['', Validators.required],
      fechaResultado: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
    this.filtrarResultados();
  }

  filtrarResultados(): void {
    this.filteredResultados = this.resultados.filter(r =>
      (!this.filtroPaciente || r.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase())) &&
      (!this.filtroMedico || r.medico.toLowerCase().includes(this.filtroMedico.toLowerCase())) &&
      (!this.filtroValidado || (this.filtroValidado === 'validado' ? r.validado : !r.validado))
    );
  }

  limpiarFiltros(): void {
    this.filtroPaciente = '';
    this.filtroMedico = '';
    this.filtroValidado = '';
    this.filtrarResultados();
  }

  agregarNuevoResultado(): void {
    this.resultadoEditando = null;
    this.resultadoForm.reset({
      fechaResultado: new Date().toISOString().split('T')[0] 
    });
    this.editando = true;

    const modal = document.getElementById('modalEditarGrid');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  editarResultado(resultado: Resultado): void {
    this.resultadoEditando = resultado;
    this.resultadoForm.patchValue({
      descripcion: resultado.descripcion,
      valores: resultado.valores,
      conclusiones: resultado.conclusiones,
      fechaResultado: resultado.fechaResultado 
    });
    this.editando = true;

    const modal = document.getElementById('modalEditar');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  guardarResultado(): void {
    if (this.resultadoForm.valid) {
      if (this.resultadoEditando) {
        // Actualizar
        const index = this.resultados.findIndex(r => r.idResultado === this.resultadoEditando!.idResultado);
        if (index !== -1) {
          this.resultados[index] = { ...this.resultados[index], ...this.resultadoForm.value };
          Swal.fire('Éxito', 'Resultado actualizado correctamente.', 'success');
        }
      } else {
        // Crear nuevo resultado
        const nuevo: Resultado = {
          idResultado: 'R' + String(this.resultados.length + 1).padStart(3, '0'),
          idOrden: '#00' + (this.resultados.length + 1),
          paciente: 'Nuevo Paciente',
          medico: 'Nuevo Médico',
          ...this.resultadoForm.value,
          validado: false,
          entregado: false,
          metodoEntrega: ''
        };
        this.resultados.push(nuevo);
        Swal.fire('Éxito', 'Nuevo resultado agregado.', 'success');
      }

      this.filtrarResultados();
      this.cerrarModal();
    }
  }

  validarResultado(resultado: Resultado): void {
    Swal.fire({
      title: '¿Validar resultado?',
      text: 'Una vez validado, no podrá editarse.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, validar'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.resultados.findIndex(r => r.idResultado === resultado.idResultado);
        if (index !== -1) {
          this.resultados[index].validado = true;
          this.filtrarResultados();
          Swal.fire('Validado', 'El resultado ha sido validado por el bioquímico.', 'success');
        }
      }
    });
  }

  generarPDF(resultado: Resultado): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Informe de Resultados de Laboratorio', 20, 20);
    doc.setFontSize(12);
    doc.text(`ID Resultado: ${resultado.idResultado}`, 20, 40);
    doc.text(`ID Orden: ${resultado.idOrden}`, 20, 50);
    doc.text(`Paciente: ${resultado.paciente}`, 20, 60);
    doc.text(`Médico: ${resultado.medico}`, 20, 70);
    doc.text(`Fecha: ${resultado.fechaResultado}`, 20, 80);
    doc.text(`Descripción: ${resultado.descripcion}`, 20, 90);
    doc.text(`Valores: ${resultado.valores}`, 20, 100);
    doc.text(`Conclusiones: ${resultado.conclusiones}`, 20, 110);
    doc.text(`Validado: ${resultado.validado ? 'Sí' : 'No'}`, 20, 120);
    doc.save(`resultado_${resultado.idResultado}.pdf`);
  }

  registrarEntrega(resultado: Resultado): void {
    Swal.fire({
      title: 'Registrar Entrega',
      input: 'select',
      inputOptions: {
        'En Persona': 'En Persona',
        'Digital': 'Digital'
      },
      inputPlaceholder: 'Selecciona método',
      showCancelButton: true,
      confirmButtonText: 'Registrar'
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const index = this.resultados.findIndex(r => r.idResultado === resultado.idResultado);
        if (index !== -1) {
          this.resultados[index].entregado = true;
          this.resultados[index].metodoEntrega = result.value;
          this.filtrarResultados();
          Swal.fire('Entregado', 'El resultado ha sido marcado como entregado.', 'success');
        }
      }
    });
  }

  cerrarModal(): void {
    this.editando = false;
    this.resultadoEditando = null;
    this.resultadoForm.reset();
    const modal = document.getElementById('modalEditarGrid');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
}
