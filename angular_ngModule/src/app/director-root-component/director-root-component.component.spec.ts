import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorRootComponentComponent } from './director-root-component.component';

describe('DirectorRootComponentComponent', () => {
  let component: DirectorRootComponentComponent;
  let fixture: ComponentFixture<DirectorRootComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectorRootComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectorRootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
