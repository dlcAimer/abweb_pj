import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRootComponent } from './overview-root.component';

describe('OverviewRootComponent', () => {
  let component: OverviewRootComponent;
  let fixture: ComponentFixture<OverviewRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
