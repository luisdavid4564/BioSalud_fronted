import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';   

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  currentYear: number;
  currentMonth: number;
  calendarDays: Date[] = [];
  activities: Date[] = [];

  constructor(private router: Router) {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();

    this.activities = [
      new Date(this.currentYear, this.currentMonth, 4),
      new Date(this.currentYear, this.currentMonth, 11),
      new Date(this.currentYear, this.currentMonth, 17),
      new Date(this.currentYear, this.currentMonth, 25)
    ];

    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const numDays = lastDay.getDate();

    for (let i = 1; i <= numDays; i++) {
      this.calendarDays.push(new Date(this.currentYear, this.currentMonth, i));
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  hasActivity(date: Date): boolean {
    return this.activities.some(activity =>
      activity.getDate() === date.getDate() &&
      activity.getMonth() === date.getMonth() &&
      activity.getFullYear() === date.getFullYear()
    );
  }

  onShortcutClick(action: string) {
    if (action === 'Registrar Nuevo Paciente') {
      this.router.navigate(['/menu/pacientes']);   
    } else if (action === 'Ver Ordenes') {
      this.router.navigate(['/menu/ordenes']);
    } else if (action === 'Administrar Usuarios') {
      this.router.navigate(['/menu/usuarios']);
    } else {
      alert(`Acción seleccionada: ${action}`);
    }
  }
}
