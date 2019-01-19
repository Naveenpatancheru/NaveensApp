import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskmeanythingComponent } from './askmeanything.component';

describe('AskmeanythingComponent', () => {
  let component: AskmeanythingComponent;
  let fixture: ComponentFixture<AskmeanythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskmeanythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskmeanythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
