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
  __name
} from "./chunk-NQCZYNRZ.js";

// angular:jit:template:src\app\ordenes\ordenes.html
var ordenes_default;
var init_ordenes = __esm({
  "angular:jit:template:src\\app\\ordenes\\ordenes.html"() {
    ordenes_default = "<p>ordenes works!</p>\r\n";
  }
});

// angular:jit:style:src\app\ordenes\ordenes.css
var ordenes_default2;
var init_ordenes2 = __esm({
  "angular:jit:style:src\\app\\ordenes\\ordenes.css"() {
    ordenes_default2 = "/* src/app/ordenes/ordenes.css */\n/*# sourceMappingURL=ordenes.css.map */\n";
  }
});

// src/app/ordenes/ordenes.ts
var _a, Ordenes;
var init_ordenes3 = __esm({
  "src/app/ordenes/ordenes.ts"() {
    "use strict";
    init_tslib_es6();
    init_ordenes();
    init_ordenes2();
    init_core();
    Ordenes = (_a = class {
    }, __name(_a, "Ordenes"), _a);
    Ordenes = __decorate([
      Component({
        selector: "app-ordenes",
        imports: [],
        template: ordenes_default,
        styles: [ordenes_default2]
      })
    ], Ordenes);
  }
});

// src/app/ordenes/ordenes.spec.ts
var require_ordenes_spec = __commonJS({
  "src/app/ordenes/ordenes.spec.ts"(exports) {
    init_testing();
    init_ordenes3();
    describe("Ordenes", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Ordenes]
        }).compileComponents();
        fixture = TestBed.createComponent(Ordenes);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ordenes_spec();
//# sourceMappingURL=spec-ordenes.spec.js.map
