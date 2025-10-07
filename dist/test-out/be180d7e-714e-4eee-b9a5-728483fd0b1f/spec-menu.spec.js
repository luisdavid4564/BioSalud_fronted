import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  init_router
} from "./chunk-Z634IAKH.js";
import "./chunk-XIFYQ7I6.js";
import "./chunk-SR3UVXSK.js";
import {
  Component,
  TestBed,
  __decorate,
  filter,
  init_core,
  init_operators,
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

// angular:jit:template:src\app\menu\menu.html
var menu_default;
var init_menu = __esm({
  "angular:jit:template:src\\app\\menu\\menu.html"() {
    menu_default = `<div id="layout-wrapper">\r
  <header id="page-topbar">\r
    <div class="layout-width">\r
      <div class="navbar-header">\r
        <div class="d-flex">\r
          <button\r
            type="button"\r
            class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"\r
            id="topnav-hamburger-icon"\r
            (click)="toggleSidebar()"\r
          >\r
            <span class="hamburger-icon" [class.open]="isSidebarOpen">\r
              <span></span>\r
              <span></span>\r
              <span></span>\r
            </span>\r
          </button>\r
        </div>\r
\r
        <div class="d-flex align-items-center">\r
          <div class="dropdown d-md-none topbar-head-dropdown header-item">\r
            <button\r
              type="button"\r
              class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"\r
              id="page-header-search-dropdown"\r
              data-bs-toggle="dropdown"\r
              aria-haspopup="true"\r
              aria-expanded="false"\r
            >\r
              <i class="bx bx-search fs-22"></i>\r
            </button>\r
            <div\r
              class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"\r
              aria-labelledby="page-header-search-dropdown"\r
            >\r
              <form class="p-3">\r
                <div class="form-group m-0">\r
                  <div class="input-group">\r
                    <input\r
                      type="text"\r
                      class="form-control"\r
                      placeholder="Search ..."\r
                      aria-label="Recipient's username"\r
                    />\r
                    <button class="btn btn-primary" type="submit">\r
                      <i class="mdi mdi-magnify"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </form>\r
            </div>\r
          </div>\r
\r
          <div class="ms-1 header-item d-none d-sm-flex">\r
            <button\r
              type="button"\r
              class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"\r
              (click)="toggleDarkMode()"\r
            >\r
              <i [class]="iconClass"></i>\r
            </button>\r
          </div>\r
\r
          <div class="dropdown ms-sm-3 header-item topbar-user">\r
            <button\r
              type="button"\r
              class="btn"\r
              id="page-header-user-dropdown"\r
              data-bs-toggle="dropdown"\r
              aria-haspopup="true"\r
              aria-expanded="false"\r
            >\r
              <span class="d-flex align-items-center">\r
                <img\r
                  class="rounded-circle header-profile-user"\r
                  src="assets/images/users/user-dummy-img.jpg"\r
                />\r
                <span class="text-start ms-xl-2">\r
                  <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text"\r
                    >Admin</span\r
                  >\r
                  <span\r
                    class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"\r
                    >Administrador</span\r
                  >\r
                </span>\r
              </span>\r
            </button>\r
            <div class="dropdown-menu dropdown-menu-end">\r
              <h6 class="dropdown-header">Bienvenido Admin!</h6>\r
              <a class="dropdown-item" href="pages-profile.html"\r
                ><i\r
                  class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"\r
                ></i>\r
                <span class="align-middle">Perfil</span></a\r
              >\r
              <a class="dropdown-item" href="pages-profile-settings.html"\r
                ><i\r
                  class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"\r
                ></i>\r
                <span class="align-middle">Configuraci\xF3n</span></a\r
              >\r
              <a class="dropdown-item" routerLink="/"\r
                ><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>\r
                <span class="align-middle" data-key="t-logout"\r
                  >Cerrar Sesi\xF3n</span\r
                ></a\r
              >\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </header>\r
\r
  <div class="app-menu navbar-menu">\r
    <div id="scrollbar">\r
      <div class="container-fluid">\r
        <div id="two-column-menu"></div>\r
        <ul class="navbar-nav" id="navbar-nav">\r
          <li class="menu-title"><span data-key="t-menu">Menu</span></li>\r
          <li class="nav-item">\r
            <a class="nav-link menu-link" routerLink="dashboard">\r
              <i class="ri-home-smile-fill"></i>\r
              <span data-key="t-widgets">Dashboard</span>\r
            </a>\r
          </li>\r
          <li class="nav-item">\r
            <a class="nav-link menu-link" routerLink="pacientes">\r
              <i class="ri-parent-fill"></i>\r
              <span data-key="t-widgets">Pacientes</span>\r
            </a>\r
          </li>\r
          <li class="nav-item">\r
            <a class="nav-link menu-link" routerLink="ordenes">\r
              <i class="ri-survey-fill"></i>\r
              <span data-key="t-widgets">Ordenes</span>\r
            </a>\r
          </li>\r
        </ul>\r
      </div>\r
    </div>\r
    <div class="sidebar-background"></div>\r
  </div>\r
\r
  <div class="main-content">\r
    <div class="page-content">\r
      <div class="container-fluid">\r
        <div class="row">\r
          <div class="col-12">\r
            <div\r
              class="page-title-box d-sm-flex align-items-center justify-content-between"\r
            >\r
              <h4 class="mb-sm-0">{{ breadcrumbSecond }}</h4>\r
              <div class="page-title-right">\r
                <ol class="breadcrumb m-0">\r
                  <li class="breadcrumb-item">\r
                    <a href="javascript: void(0);">{{ breadcrumbFirst }}</a>\r
                  </li>\r
                  <li class="breadcrumb-item active">{{ breadcrumbSecond }}</li>\r
                </ol>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <router-outlet></router-outlet>\r
      </div>\r
    </div>\r
    <div class="vertical-overlay"></div>\r
    <footer class="footer">\r
      <div class="container-fluid">\r
        <div class="row">\r
          <div class="col-sm-6">\r
            <script>\r
              document.write(new Date().getFullYear());\r
            <\/script>\r
            \xA9 BioSalud.\r
          </div>\r
        </div>\r
      </div>\r
    </footer>\r
  </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\menu\menu.css
var menu_default2;
var init_menu2 = __esm({
  "angular:jit:style:src\\app\\menu\\menu.css"() {
    menu_default2 = "/* src/app/menu/menu.css */\n/*# sourceMappingURL=menu.css.map */\n";
  }
});

// src/app/menu/menu.ts
var _a, Menu;
var init_menu3 = __esm({
  "src/app/menu/menu.ts"() {
    "use strict";
    init_tslib_es6();
    init_menu();
    init_menu2();
    init_core();
    init_router();
    init_router();
    init_operators();
    Menu = (_a = class {
      router;
      activatedRoute;
      breadcrumbFirst = "Menu";
      breadcrumbSecond = "Dashboard";
      currentTheme = "light";
      iconClass = "bx bx-moon fs-22";
      // Agrega esta propiedad para controlar el estado del menú
      isSidebarOpen = false;
      constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
      }
      ngOnInit() {
        const savedTheme = localStorage.getItem("theme") || "light";
        this.setTheme(savedTheme);
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          const url = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
          if (url === "pacientes") {
            this.breadcrumbSecond = "Pacientes";
          } else if (url === "ordenes") {
            this.breadcrumbSecond = "Ordenes";
          } else if (url === "dashboard") {
            this.breadcrumbSecond = "Dashboard";
          } else {
            this.breadcrumbSecond = "Starter";
          }
        });
      }
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
        if (window.innerWidth <= 991) {
          document.body.classList.toggle("vertical-sidebar-enable", this.isSidebarOpen);
          document.body.classList.remove("vertical-collapsed");
        } else {
          document.body.classList.toggle("vertical-collapsed", this.isSidebarOpen);
          document.body.classList.remove("vertical-sidebar-enable");
        }
      }
      toggleDarkMode() {
        if (this.currentTheme === "dark") {
          this.setTheme("light");
        } else {
          this.setTheme("dark");
        }
      }
      setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute("data-bs-theme", theme);
        if (theme === "dark") {
          document.body.classList.add("dark-layout");
          this.iconClass = "bx bx-sun fs-22";
        } else {
          document.body.classList.remove("dark-layout");
          this.iconClass = "bx bx-moon fs-22";
        }
        localStorage.setItem("theme", theme);
      }
    }, __name(_a, "Menu"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [
      { type: Router },
      { type: ActivatedRoute }
    ], "ctorParameters")), _a);
    Menu = __decorate([
      Component({
        selector: "app-menu",
        imports: [RouterModule],
        template: menu_default,
        styles: [menu_default2]
      })
    ], Menu);
  }
});

// src/app/menu/menu.spec.ts
var require_menu_spec = __commonJS({
  "src/app/menu/menu.spec.ts"(exports) {
    init_testing();
    init_menu3();
    describe("Menu", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Menu]
        }).compileComponents();
        fixture = TestBed.createComponent(Menu);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_menu_spec();
//# sourceMappingURL=spec-menu.spec.js.map
