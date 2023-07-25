import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDealerComponent } from './put-dealer.component';

describe('PutDealerComponent', () => {
  let component: PutDealerComponent;
  let fixture: ComponentFixture<PutDealerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PutDealerComponent]
    });
    fixture = TestBed.createComponent(PutDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
