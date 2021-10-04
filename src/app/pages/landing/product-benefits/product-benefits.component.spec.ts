import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBenefitsComponent } from './product-benefits.component';

describe('ProductBenefitsComponent', () => {
  let component: ProductBenefitsComponent;
  let fixture: ComponentFixture<ProductBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
