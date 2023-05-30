import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaMusculosComponent } from './vista-musculos.component';

describe('VistaMusculosComponent', () => {
  let component: VistaMusculosComponent;
  let fixture: ComponentFixture<VistaMusculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaMusculosComponent]
    });
    fixture = TestBed.createComponent(VistaMusculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
