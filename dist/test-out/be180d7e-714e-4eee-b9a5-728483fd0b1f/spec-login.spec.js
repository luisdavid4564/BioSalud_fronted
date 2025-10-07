import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-3G2DWQVO.js";
import {
  Router,
  init_router
} from "./chunk-Z634IAKH.js";
import "./chunk-XIFYQ7I6.js";
import "./chunk-SR3UVXSK.js";
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

// angular:jit:template:src\app\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\login\\login.html"() {
    login_default = '<div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">\r\n    <div class="bg-overlay"></div>\r\n    <div class="auth-page-content overflow-hidden pt-lg-5">\r\n        <div class="container">\r\n            <div class="row">\r\n                <div class="col-lg-12">\r\n                    <div class="card overflow-hidden">\r\n                        <div class="row g-0">\r\n                            <div class="col-lg-6">\r\n                                <div class="p-lg-5 p-4 auth-one-bg h-100">\r\n                                    <div class="position-relative h-100 d-flex flex-column">\r\n                                        <div class="mb-4">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class="col-lg-6">\r\n                                <div class="p-lg-5 p-4">\r\n                                    <div>\r\n                                        <h5 class="text-primary">Bienvenido !</h5>\r\n                                        <p class="text-muted">Inicia Sesi\xF3n Para Continuar.</p>\r\n                                    </div>\r\n\r\n                                    <div class="mt-4">\r\n                                        <form [formGroup]="loginForm" (ngSubmit)="onLogin()">\r\n\r\n                                            <div class="mb-3">\r\n                                                <label for="username" class="form-label">Usuario</label>\r\n                                                <input type="text" class="form-control" id="username"\r\n                                                    placeholder="Enter username" formControlName="username">\r\n                                            </div>\r\n\r\n                                            <div class="mb-3">\r\n                                                <div class="float-end">\r\n                                                    <a href="auth-pass-reset-cover.html" class="text-muted">Contrase\xF1a Olvidada?</a>\r\n                                                </div>\r\n                                                <label class="form-label" for="password-input">Contrase\xF1a</label>\r\n                                                <div class="position-relative auth-pass-inputgroup mb-3">\r\n                                                    <input type="password" class="form-control pe-5"\r\n                                                        placeholder="Enter password" id="password-input" formControlName="password">\r\n                                                    <button\r\n                                                        class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"\r\n                                                        type="button" id="password-addon"><i\r\n                                                            class="ri-eye-fill align-middle"></i></button>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class="form-check">\r\n                                                <input class="form-check-input" type="checkbox" value=""\r\n                                                    id="auth-remember-check">\r\n                                                <label class="form-check-label" for="auth-remember-check">Recuerdame</label>\r\n                                            </div>\r\n\r\n                                            <div class="mt-4">\r\n                                                <button class="btn btn-success w-100" type="submit">Inicia Sesi\xF3n</button>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\login\\login.css"() {
    login_default2 = "/* src/app/login/login.css */\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/login/login.ts
var _a, Login;
var init_login3 = __esm({
  "src/app/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_router();
    Login = (_a = class {
      fb;
      router;
      loginForm;
      constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.loginForm = this.fb.group({
          username: ["Luis", Validators.required],
          password: ["Luis", Validators.required]
        });
      }
      onLogin() {
        if (this.loginForm.valid) {
          this.router.navigate(["/menu"]);
        } else {
          alert("Por favor, completa los campos.");
        }
      }
    }, __name(_a, "Login"), __publicField(_a, "ctorParameters", /* @__PURE__ */ __name(() => [
      { type: FormBuilder },
      { type: Router }
    ], "ctorParameters")), _a);
    Login = __decorate([
      Component({
        selector: "app-login",
        standalone: true,
        imports: [ReactiveFormsModule],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
