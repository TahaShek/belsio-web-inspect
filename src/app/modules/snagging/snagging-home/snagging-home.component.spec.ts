import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaggingHomeComponent } from './snagging-home.component';

describe('SnaggingHomeComponent', () => {
  let component: SnaggingHomeComponent;
  let fixture: ComponentFixture<SnaggingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnaggingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnaggingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
