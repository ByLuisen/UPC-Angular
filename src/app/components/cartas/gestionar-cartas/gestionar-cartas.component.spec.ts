import { ComponentFixture, TestBed } from '@angular/core/testing';

import GestionarCartasComponent from './gestionar-cartas.component';

describe('GestionarCartasComponent', () => {
  let component: GestionarCartasComponent;
  let fixture: ComponentFixture<GestionarCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarCartasComponent],
    });
    fixture = TestBed.createComponent(GestionarCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
