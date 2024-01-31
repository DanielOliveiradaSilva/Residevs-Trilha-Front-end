import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoticiasComponent } from './app-noticias.component';

describe('AppNoticiasComponent', () => {
  let component: AppNoticiasComponent;
  let fixture: ComponentFixture<AppNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
