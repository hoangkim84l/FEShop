import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpsertDialogComponent } from './user-upsert-dialog.component';

describe('UserCreateComponent', () => {
  let component: UserUpsertDialogComponent;
  let fixture: ComponentFixture<UserUpsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpsertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
