import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryUpsertDialogComponent } from './catagory-upsert-dialog.component';

describe('CatagoryUpsertDialogComponent', () => {
  let component: CatagoryUpsertDialogComponent;
  let fixture: ComponentFixture<CatagoryUpsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryUpsertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryUpsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
