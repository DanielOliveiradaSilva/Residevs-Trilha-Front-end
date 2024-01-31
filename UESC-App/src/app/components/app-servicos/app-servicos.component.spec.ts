import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppServicosComponent } from './app-servicos.component';

describe('AppServicosComponent', () => {
  let component: AppServicosComponent;
  let fixture: ComponentFixture<AppServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
