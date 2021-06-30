import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItSelfComponent } from './admin-it-self.component';

describe('AdminItSelfComponent', () => {
  let component: AdminItSelfComponent;
  let fixture: ComponentFixture<AdminItSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItSelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
