import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNascComponent } from './data-nasc.component';

describe('DataNascComponent', () => {
  let component: DataNascComponent;
  let fixture: ComponentFixture<DataNascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataNascComponent]
    });
    fixture = TestBed.createComponent(DataNascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
