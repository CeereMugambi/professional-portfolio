import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBodyComponent } from './contact-body.component';

describe('ContactBodyComponent', () => {
  let component: ContactBodyComponent;
  let fixture: ComponentFixture<ContactBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
