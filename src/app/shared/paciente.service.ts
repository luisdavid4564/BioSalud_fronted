import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paciente } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/api/pacientes';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        console.log('Response from GET /api/pacientes:', response);
        if (Array.isArray(response)) {
          return response;
        } else if (response && Array.isArray(response.content)) {
          return response.content; 
        } else {
          console.error('Unexpected response format for pacientes', response);
          return [];
        }
      })
    );
  }


  createPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }

  updatePaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.apiUrl}/${id}`, paciente);
  }

  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  inactivarPaciente(id: number): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.apiUrl}/${id}/inactivar`, {});
  }

  activarPaciente(id: number): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.apiUrl}/${id}/activar`, {});
  }

  getPacientesActivos(): Observable<Paciente[]> {
    return this.http.get<any>(`${this.apiUrl}/activos`).pipe(
      map(response => Array.isArray(response) ? response : response.content || [])
    );
  }

  getPacientesInactivos(): Observable<Paciente[]> {
    return this.http.get<any>(`${this.apiUrl}/inactivos`).pipe(
      map(response => Array.isArray(response) ? response : response.content || [])
    );
  }

}
