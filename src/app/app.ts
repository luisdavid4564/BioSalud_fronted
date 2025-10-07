import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';       
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, ReactiveFormsModule] 
})
export class App {}
