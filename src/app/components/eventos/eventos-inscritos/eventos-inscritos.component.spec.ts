import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosInscritosComponent } from './eventos-inscritos.component';

describe('EventosInscritosComponent', () => {
  let component: EventosInscritosComponent;
  let fixture: ComponentFixture<EventosInscritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosInscritosComponent]
    });
    fixture = TestBed.createComponent(EventosInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
