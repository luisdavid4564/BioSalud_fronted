import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
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
}

@Component({
  selector: 'app-consulta-medico',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './consulta-medico.html',
  styleUrls: ['./consulta-medico.css']
})
export class ConsultaMedicoComponent implements OnInit {

  loggedIn: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  resultados: Resultado[] = [];
  filteredResultados: Resultado[] = [];
  filtroPaciente: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user && user.rol.nombre === 'MEDICO') {
      this.loggedIn = true;
      this.loadResultados();
    } else {
      this.router.navigate(['/']);
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (user) => {
        if (user.rol.nombre === 'MEDICO') {
          this.loggedIn = true;
          this.loadResultados();
          Swal.fire('Bienvenido', 'Has iniciado sesión como médico.', 'success');
        } else {
          this.errorMessage = 'Solo médicos pueden acceder';
        }
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        Swal.fire('Error', 'Credenciales inválidas.', 'error');
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.loggedIn = false;
    this.username = '';
    this.password = '';
    this.router.navigate(['/']);
  }

  loadResultados(): void {
    this.http.get<Resultado[]>('http://localhost:8080/api/resultados').subscribe({
      next: (data) => {
        this.resultados = data;
        this.filtrarResultados();
      },
      error: (err) => {
        console.error('Error loading resultados', err);
      }
    });
  }

  filtrarResultados(): void {
    this.filteredResultados = this.resultados.filter(r =>
      !this.filtroPaciente || r.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase())
    );
  }

  verResultado(resultado: Resultado): void {
    Swal.fire({
      title: 'Detalle del Resultado',
      html: `
        <p><strong>ID:</strong> ${resultado.idResultado}</p>
        <p><strong>Paciente:</strong> ${resultado.paciente}</p>
        <p><strong>Descripción:</strong> ${resultado.descripcion}</p>
        <p><strong>Valores:</strong> ${resultado.valores}</p>
        <p><strong>Conclusiones:</strong> ${resultado.conclusiones}</p>
        <p><strong>Validado:</strong> ${resultado.validado ? 'Sí' : 'No'}</p>
      `,
      confirmButtonText: 'Cerrar'
    });
  }
}
