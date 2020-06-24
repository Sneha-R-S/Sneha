import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarlinPage } from './carlin.page';

describe('CarlinPage', () => {
  let component: CarlinPage;
  let fixture: ComponentFixture<CarlinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarlinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
