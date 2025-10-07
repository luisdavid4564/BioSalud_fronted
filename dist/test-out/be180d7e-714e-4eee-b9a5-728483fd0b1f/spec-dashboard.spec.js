import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-RODDA7NI.js";
import {
  __async,
  __commonJS,
  __esm,
  __name,
  __publicField
} from "./chunk-NQCZYNRZ.js";

// angular:jit:template:src\app\dashboard\dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src\\app\\dashboard\\dashboard.html"() {
    dashboard_default = `<div class="container dashboard-container">\r
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-3">\r
\r
        <!-- Pacientes Registrados -->\r
        <div class="col">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <div class="d-flex justify-content-between">\r
                        <div>\r
                            <p class="fw-medium text-muted mb-0">Pacientes Registrados</p>\r
                            <h2 class="mt-4 ff-secondary fw-semibold">\r
                                <span class="counter-value" data-target="559.25">0</span>k\r
                            </h2>\r
                            <p class="mb-0 text-muted">\r
                                <span class="badge bg-light text-success mb-0">\r
                                    <i class="ri-arrow-up-line align-middle"></i> 16.24 %\r
                                </span> vs. mes anterior\r
                            </p>\r
                        </div>\r
                        <div>\r
                            <div class="avatar-sm flex-shrink-0">\r
                                <span class="avatar-title bg-soft-success rounded-circle fs-2">\r
                                    <i class="bx bx-user text-success"></i>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Citas Programadas -->\r
        <div class="col">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <div class="d-flex justify-content-between">\r
                        <div>\r
                            <p class="fw-medium text-muted mb-0">Citas Programadas</p>\r
                            <h2 class="mt-4 ff-secondary fw-semibold">\r
                                <span class="counter-value" data-target="36894">0</span>\r
                            </h2>\r
                            <p class="mb-0 text-muted">\r
                                <span class="badge bg-light text-danger mb-0">\r
                                    <i class="ri-arrow-down-line align-middle"></i> -3.57 %\r
                                </span> vs. mes anterior\r
                            </p>\r
                        </div>\r
                        <div>\r
                            <div class="avatar-sm flex-shrink-0">\r
                                <span class="avatar-title bg-soft-info rounded-circle fs-2">\r
                                    <i class="bx bx-calendar text-info"></i>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Ex\xE1menes Realizados -->\r
        <div class="col">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <div class="d-flex justify-content-between">\r
                        <div>\r
                            <p class="fw-medium text-muted mb-0">Ex\xE1menes Realizados</p>\r
                            <h2 class="mt-4 ff-secondary fw-semibold">\r
                                <span class="counter-value" data-target="183.35">0</span>M\r
                            </h2>\r
                            <p class="mb-0 text-muted">\r
                                <span class="badge bg-light text-success mb-0">\r
                                    <i class="ri-arrow-up-line align-middle"></i> 29.08 %\r
                                </span> vs. mes anterior\r
                            </p>\r
                        </div>\r
                        <div>\r
                            <div class="avatar-sm flex-shrink-0">\r
                                <span class="avatar-title bg-soft-warning rounded-circle fs-2">\r
                                    <i class="bx bx-test-tube text-warning"></i>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Resultados Entregados -->\r
        <div class="col">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <div class="d-flex justify-content-between">\r
                        <div>\r
                            <p class="fw-medium text-muted mb-0">Resultados Entregados</p>\r
                            <h2 class="mt-4 ff-secondary fw-semibold">\r
                                <span class="counter-value" data-target="165.89">0</span>k\r
                            </h2>\r
                            <p class="mb-0 text-muted">\r
                                <span class="badge bg-light text-muted mb-0"> +0.00 % </span>\r
                            </p>\r
                        </div>\r
                        <div>\r
                            <div class="avatar-sm flex-shrink-0">\r
                                <span class="avatar-title bg-soft-primary rounded-circle fs-2">\r
                                    <i class="bx bx-file text-primary"></i>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Ex\xE1menes Pendientes -->\r
        <div class="col">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <div class="d-flex justify-content-between">\r
                        <div>\r
                            <p class="fw-medium text-muted mb-0">Ex\xE1menes Pendientes</p>\r
                            <h2 class="mt-4 ff-secondary fw-semibold">\r
                                <span class="counter-value" data-target="165.89">0</span>k\r
                            </h2>\r
                            <p class="mb-0 text-muted">\r
                                <span class="badge bg-light text-muted mb-0"> +0.00 % </span>\r
                            </p>\r
                        </div>\r
                        <div>\r
                            <div class="avatar-sm flex-shrink-0">\r
                                <span class="avatar-title bg-soft-danger rounded-circle fs-2">\r
                                    <i class="bx bx-time-five text-danger"></i>\r
                                </span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
    </div> <!-- row -->\r
\r
    <!-- New row for shortcuts and calendar -->\r
    <div class="row mt-3 g-3">\r
        <!-- Atajos R\xE1pidos -->\r
        <div class="col-md-6 col-xl-3">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <h5 class="card-title mb-3">Atajos R\xE1pidos</h5>\r
                    <button class="btn btn-primary w-100 mb-2" (click)="onShortcutClick('Registrar Nueva Cita')">Registrar Nueva Cita</button>\r
                    <button class="btn btn-primary w-100 mb-2" (click)="onShortcutClick('Ver Historiales Reporte')">Ver Historiales Reporte</button>\r
                    <button class="btn btn-primary w-100" (click)="onShortcutClick('Administrar Usuarios')">Administrar Usuarios</button>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Actividad del Mes -->\r
        <div class="col-md-6 col-xl-3">\r
            <div class="card card-animate">\r
                <div class="card-body">\r
                    <h5 class="card-title mb-3">Actividad del Mes</h5>\r
                    <div class="calendar">\r
                        <div class="calendar-header d-flex justify-content-between align-items-center mb-2">\r
                            <button class="btn btn-sm btn-outline-primary" (click)="prevMonth()"><</button>\r
                            <div>{{ monthNames[currentMonth] }} {{ currentYear }}</div>\r
                            <button class="btn btn-sm btn-outline-primary" (click)="nextMonth()">></button>\r
                        </div>\r
                        <div class="calendar-grid">\r
                            <div class="calendar-day calendar-day-header" *ngFor="let day of weekDays">{{ day }}</div>\r
                            <div class="calendar-day" *ngFor="let day of calendarDays" [class.today]="isToday(day)" [class.has-activity]="hasActivity(day)">\r
                                {{ day.getDate() }}\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div> <!-- new row -->\r
</div> <!-- container -->\r
`;
  }
});

// angular:jit:style:src\app\dashboard\dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src\\app\\dashboard\\dashboard.css"() {
    dashboard_default2 = "/* src/app/dashboard/dashboard.css */\n.dashboard-container {\n  padding: 10px;\n  max-width: 1380px;\n  margin: 0 auto;\n}\n.card-body button.btn {\n  border-radius: 20px;\n  background-color: #5a7bbf;\n  border: none;\n  color: white;\n  font-weight: 600;\n  transition: background-color 0.3s ease;\n}\n.card-body button.btn:hover {\n  background-color: #3e5a9a;\n}\n.calendar {\n  font-family: Arial, sans-serif;\n}\n.calendar-header {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.calendar-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 5px;\n}\n.calendar-day {\n  padding: 8px 0;\n  text-align: center;\n  border-radius: 6px;\n  cursor: default;\n}\n.calendar-day-header {\n  font-weight: 700;\n  color: #666;\n}\n.calendar-day.today {\n  background-color: #cce5ff;\n  font-weight: 700;\n  border: 1px solid #339af0;\n}\n.calendar-day.has-activity {\n  background-color: #5a7bbf;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n}\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// src/app/dashboard/dashboard.ts
var _a, Dashboard;
var init_dashboard3 = __esm({
  "src/app/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_core();
    Dashboard = (_a = class {
      monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ];
      weekDays = ["D", "L", "M", "M", "J", "V", "S"];
      currentYear;
      currentMonth;
      calendarDays = [];
      activities = [];
      constructor() {
        const today = /* @__PURE__ */ new Date();
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
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
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
      isToday(date) {
        const today = /* @__PURE__ */ new Date();
        return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
      }
      hasActivity(date) {
        return this.activities.some((activity) => activity.getDate() === date.getDate() && activity.getMonth() === date.getMonth() && activity.getFullYear() === date.getFullYear());
      }
      onShortcutClick(action) {
        alert(`Acci\xF3n seleccionada: ${action}`);
      }
    }, __name(_a, "Dashboard"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [], "ctorParameters")), _a);
    Dashboard = __decorate([
      Component({
        selector: "app-dashboard",
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], Dashboard);
  }
});

// src/app/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard3();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Dashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-dashboard.spec.js.map
