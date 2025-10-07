import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Paciente } from '../shared/paciente.model';
import { PacienteService } from '../shared/paciente.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.css']
})
export class Pacientes implements OnInit {
  pacienteForm: FormGroup;
  pacientes: Paciente[] = [];

  mostrarFormulario: boolean = false;
  busqueda: string = '';
  pacientesFiltrados: Paciente[] = [];
  editando: boolean = false;
  idEditando: number | null = null;
  mostrarInactivos: boolean = false;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService, private auth: AuthService, private router: Router) {
    this.pacienteForm = this.fb.group({
      dni: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      alergias: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
      return;
    }
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.filtrarLista();
      },
      error: (err) => {
        console.error('Error al cargar pacientes', err);
        Swal.fire('Error', 'No se pudieron cargar los pacientes', 'error');
      }
    });
  }

  mostrarFormularioRegistro(): void {
    this.mostrarFormulario = true;
    this.editando = false;
    this.idEditando = null;
    this.pacienteForm.reset();
  }

  ocultarFormulario(): void {
    this.mostrarFormulario = false;
    this.pacienteForm.reset();
    this.editando = false;
    this.idEditando = null;
  }

  registrarPaciente(): void {
    if (this.pacienteForm.valid) {
      const formValue = this.pacienteForm.value;
      const paciente: Paciente = {
        nombres: formValue.nombres,
        apellidos: formValue.apellidos,
        dni: formValue.dni,
        email: formValue.correo,
        telefono: formValue.telefono,
        fechaNacimiento: formValue.fechaNacimiento,
        sexo: formValue.sexo === 'M' ? 'Masculino' : 'Femenino',
        alergias: formValue.alergias === 'SI',
        estado: 'Activo'
      };

      if (this.editando && this.idEditando) {
        this.pacienteService.updatePaciente(this.idEditando, paciente).subscribe({
          next: () => {
            this.ngOnInit(); // reload
            Swal.fire({
              title: "¡Paciente Modificado!",
              text: "Los datos se actualizaron correctamente.",
              icon: "success"
            });
            this.ocultarFormulario();
          },
          error: (err) => {
            console.error('Error al actualizar paciente', err);
            Swal.fire('Error', 'No se pudo actualizar el paciente', 'error');
          }
        });
      } else {
        this.pacienteService.createPaciente(paciente).subscribe({
          next: () => {
            this.ngOnInit(); // reload
            Swal.fire({
              title: "¡Registro Exitoso!",
              text: "¡El paciente ha sido registrado con éxito!",
              icon: "success"
            });
            this.ocultarFormulario();
          },
          error: (err) => {
            console.error('Error al crear paciente', err);
            Swal.fire('Error', 'No se pudo registrar el paciente', 'error');
          }
        });
      }
    }
  }

  buscarPacientes(): void {
    this.filtrarLista();
  }

  modificarPaciente(dni: string): void {
    const paciente = this.pacientes.find(p => p.dni === dni);
    if (paciente) {
      this.pacienteForm.patchValue({
        dni: paciente.dni,
        nombres: paciente.nombres,
        apellidos: paciente.apellidos,
        sexo: paciente.sexo === 'Masculino' ? 'M' : 'F',
        fechaNacimiento: paciente.fechaNacimiento,
        telefono: paciente.telefono,
        correo: paciente.email,
        alergias: paciente.alergias ? 'SI' : 'NO'
      });
      this.mostrarFormulario = true;
      this.editando = true;
      this.idEditando = paciente.idPaciente!;
    }
  }

  inactivarPaciente(dni: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡El paciente será marcado como inactivo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, inactivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const paciente = this.pacientes.find(p => p.dni === dni);
        if (paciente && paciente.idPaciente) {
          this.pacienteService.inactivarPaciente(paciente.idPaciente).subscribe({
            next: () => {
              this.ngOnInit();
              Swal.fire('¡Inactivado!', 'El paciente ha sido marcado como inactivo.', 'success');
            },
            error: (err) => {
              console.error('Error al inactivar paciente', err);
              Swal.fire('Error', 'No se pudo inactivar el paciente', 'error');
            }
          });
        }
      }
    });
  }

  activarPaciente(dni: string): void {
    Swal.fire({
      title: '¿Deseas activar este paciente?',
      text: '¡El paciente volverá a la lista de activos!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, activar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const paciente = this.pacientes.find(p => p.dni === dni);
        if (paciente && paciente.idPaciente) {
          this.pacienteService.activarPaciente(paciente.idPaciente).subscribe({
            next: () => {
              this.ngOnInit();
              Swal.fire('¡Activado!', 'El paciente ha sido marcado como activo.', 'success');
            },
            error: (err) => {
              console.error('Error al activar paciente', err);
              Swal.fire('Error', 'No se pudo activar el paciente', 'error');
            }
          });
        }
      }
    });
  }


  filtrarLista(): void {
    const estadoFiltro = this.mostrarInactivos ? 'Inactivo' : 'Activo';
    if (this.busqueda.trim() === '') {
      this.pacientesFiltrados = this.pacientes.filter(p => p.estado === estadoFiltro);
    } else {
      this.pacientesFiltrados = this.pacientes.filter(p =>
        p.estado === estadoFiltro &&
        (p.nombres.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          p.apellidos.toLowerCase().includes(this.busqueda.toLowerCase()) ||
          p.dni.includes(this.busqueda))
      );
    }
  }

  alternarVistaPacientes(): void {
    this.mostrarInactivos = !this.mostrarInactivos;

    if (this.mostrarInactivos) {
      // Cargar lista de pacientes inactivos
      this.pacienteService.getPacientesInactivos().subscribe({
        next: (data) => {
          this.pacientes = data;
          this.filtrarLista();
        },
        error: (err) => {
          console.error('Error al cargar pacientes inactivos', err);
          Swal.fire('Error', 'No se pudieron cargar los pacientes inactivos', 'error');
        }
      });
    } else {
      // Cargar lista de pacientes activos
      this.pacienteService.getPacientesActivos().subscribe({
        next: (data) => {
          this.pacientes = data;
          this.filtrarLista();
        },
        error: (err) => {
          console.error('Error al cargar pacientes activos', err);
          Swal.fire('Error', 'No se pudieron cargar los pacientes activos', 'error');
        }
      });
    }
  }

}