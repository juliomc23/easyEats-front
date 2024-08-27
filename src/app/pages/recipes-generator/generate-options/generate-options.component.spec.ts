import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOptionsComponent } from './generate-options.component';

describe('GenerateOptionsComponent', () => {
  let component: GenerateOptionsComponent;
  let fixture: ComponentFixture<GenerateOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
