import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectComponentRootComponent } from './direct-component-root.component';

describe('DirectComponentRootComponent', () => {
  let component: DirectComponentRootComponent;
  let fixture: ComponentFixture<DirectComponentRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectComponentRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectComponentRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
