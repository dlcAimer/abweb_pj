import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocklyProgramComponent } from './blockly-program.component';

describe('BlocklyProgramComponent', () => {
  let component: BlocklyProgramComponent;
  let fixture: ComponentFixture<BlocklyProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocklyProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocklyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
