import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UescAppComponent } from './uesc-app.component';

describe('UescAppComponent', () => {
  let component: UescAppComponent;
  let fixture: ComponentFixture<UescAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UescAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UescAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
