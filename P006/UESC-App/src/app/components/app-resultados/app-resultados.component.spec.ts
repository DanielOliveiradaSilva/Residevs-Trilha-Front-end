import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResultadosComponent } from './app-resultados.component';

describe('AppResultadosComponent', () => {
  let component: AppResultadosComponent;
  let fixture: ComponentFixture<AppResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppResultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
