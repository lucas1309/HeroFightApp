import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainSelectComponent } from './villain-select.component';

describe('VillainSelectComponent', () => {
  let component: VillainSelectComponent;
  let fixture: ComponentFixture<VillainSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillainSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
