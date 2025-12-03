import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokeComponent } from './randomjoke.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RandomJokeComponent', () => {
  let component: RandomJokeComponent;
  let fixture: ComponentFixture<RandomJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJokeComponent,HttpClientTestingModule,  
        RandomJokeComponent   ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
