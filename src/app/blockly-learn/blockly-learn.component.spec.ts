import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyLearnComponent } from './blockly-learn.component';

describe('BlocklyLearnComponent', () => {
  let component: BlocklyLearnComponent;
  let fixture: ComponentFixture<BlocklyLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
