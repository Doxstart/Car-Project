import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCarComponent } from './put-car.component';

describe('PutCarComponent', () => {
  let component: PutCarComponent;
  let fixture: ComponentFixture<PutCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PutCarComponent]
    });
    fixture = TestBed.createComponent(PutCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
