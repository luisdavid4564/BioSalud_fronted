import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCanceladas } from './ordenes-canceladas';

describe('OrdenesCanceladas', () => {
  let component: OrdenesCanceladas;
  let fixture: ComponentFixture<OrdenesCanceladas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesCanceladas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesCanceladas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
