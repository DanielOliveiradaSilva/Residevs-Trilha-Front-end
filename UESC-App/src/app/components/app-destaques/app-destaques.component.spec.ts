import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDestaquesComponent } from './app-destaques.component';

describe('AppDestaquesComponent', () => {
  let component: AppDestaquesComponent;
  let fixture: ComponentFixture<AppDestaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDestaquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
