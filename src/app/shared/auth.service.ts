import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../shared/usuario.model';

interface AuthResponse {
    token: string;
    user: Usuario;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<Usuario> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
            map(response => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('currentUser', JSON.stringify(response.user));
                return response.user;
            })
        );
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }


    getCurrentUser(): Usuario | null {
        const userJson = localStorage.getItem('currentUser');

        if (userJson && userJson !== 'undefined' && userJson !== 'null') {
            try {
                return JSON.parse(userJson) as Usuario;
            } catch (e) {
                console.error('Error al parsear el usuario de localStorage. Los datos pueden estar corruptos.', e);
                this.logout();
                return null;
            }
        }

        return null;
    }
}