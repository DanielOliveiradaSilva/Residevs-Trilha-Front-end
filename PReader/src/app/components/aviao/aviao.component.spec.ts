import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviaoComponent } from './aviao.component';

describe('AviaoComponent', () => {
  let component: AviaoComponent;
  let fixture: ComponentFixture<AviaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AviaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AviaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
