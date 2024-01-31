import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadComponent } from './pread.component';

describe('PReadComponent', () => {
  let component: PReadComponent;
  let fixture: ComponentFixture<PReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
