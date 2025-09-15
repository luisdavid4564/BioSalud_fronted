import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';       // ✅ falta este
import { ReactiveFormsModule } from '@angular/forms'; // ✅ este ya lo tienes

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, ReactiveFormsModule] // ✅ ahora sí reconoce RouterOutlet
})
export class App {}
