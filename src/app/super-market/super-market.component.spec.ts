import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMarketComponent } from './super-market.component';

describe('SuperMarketComponent', () => {
  let component: SuperMarketComponent;
  let fixture: ComponentFixture<SuperMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperMarketComponent]
    });
    fixture = TestBed.createComponent(SuperMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
