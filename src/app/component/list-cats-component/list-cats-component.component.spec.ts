import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatsComponentComponent } from './list-cats-component.component';

describe('ListCatsComponentComponent', () => {
  let component: ListCatsComponentComponent;
  let fixture: ComponentFixture<ListCatsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCatsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
