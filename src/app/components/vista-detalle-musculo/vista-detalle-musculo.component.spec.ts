import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetalleMusculoComponent } from './vista-detalle-musculo.component';

describe('VistaDetalleMusculoComponent', () => {
  let component: VistaDetalleMusculoComponent;
  let fixture: ComponentFixture<VistaDetalleMusculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaDetalleMusculoComponent]
    });
    fixture = TestBed.createComponent(VistaDetalleMusculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
