import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsListesComponent } from './details-listes.component';

describe('DetailsListesComponent', () => {
  let component: DetailsListesComponent;
  let fixture: ComponentFixture<DetailsListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsListesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
