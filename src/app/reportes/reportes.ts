import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class ReportesComponent implements OnInit {

  examenesRealizados: number = 150;
  tiempoPromedio: string = '2.5 días';
  examenesMasSolicitados: string[] = ['Análisis de Sangre', 'Rayos X', 'Análisis de Orina'];

  fechaInicio: string = '';
  fechaFin: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  generarReporte(): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de Laboratorio - Clínica BioSalud', 20, 20);
    doc.setFontSize(12);
    doc.text(`Exámenes Realizados: ${this.examenesRealizados}`, 20, 40);
    doc.text(`Tiempo Promedio: ${this.tiempoPromedio}`, 20, 50);
    doc.text('Exámenes Más Solicitados:', 20, 60);
    this.examenesMasSolicitados.forEach((examen, index) => {
      doc.text(`${index + 1}. ${examen}`, 30, 70 + index * 10);
    });
    doc.save('reporte_laboratorio.pdf');
    Swal.fire('Generado', 'El reporte ha sido descargado.', 'success');
  }

  exportarExcel(): void {
    Swal.fire('Exportado', 'Datos exportados a Excel (simulado).', 'info');
  }
}
