import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmertaComponent } from './omerta.component';

describe('OmertaComponent', () => {
  let component: OmertaComponent;
  let fixture: ComponentFixture<OmertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
