import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdmComponent } from './product-adm.component';

describe('ProductAdmComponent', () => {
  let component: ProductAdmComponent;
  let fixture: ComponentFixture<ProductAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
