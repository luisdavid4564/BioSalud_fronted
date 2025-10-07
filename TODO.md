# TODO: Conectar Frontend de Pacientes con Backend

## Completado
- [x] Crear modelo Paciente (paciente.model.ts) con campos matching DB
- [x] Crear servicio PacienteService (paciente.service.ts) con métodos GET, POST, PUT
- [x] Actualizar componente Pacientes para usar el servicio en lugar de array local
- [x] Mapear valores de formulario a modelo DB (sexo M/F -> Masculino/Femenino, alergias SI/NO -> boolean, estado Activo/Inactivo)
- [x] Implementar carga de pacientes desde backend en ngOnInit
- [x] Implementar creación de pacientes via POST
- [x] Implementar actualización de pacientes via PUT
- [x] Implementar activar/inactivar pacientes via PUT
- [x] Corregir filtrado de lista para usar string 'Activo'/'Inactivo'
- [x] Verificar que HttpClient esté configurado en app.config.ts

## Notas
- Backend endpoints asumidos: GET /api/pacientes, POST /api/pacientes, PUT /api/pacientes/{id}
- Formulario mapea valores para compatibilidad con DB
- Errores manejados con Swal.fire
- Lista se recarga después de operaciones CRUD
