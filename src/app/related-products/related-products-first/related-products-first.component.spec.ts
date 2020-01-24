import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsFirstComponent } from './related-products-first.component';

describe('RelatedProductsFirstComponent', () => {
  let component: RelatedProductsFirstComponent;
  let fixture: ComponentFixture<RelatedProductsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedProductsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedProductsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
