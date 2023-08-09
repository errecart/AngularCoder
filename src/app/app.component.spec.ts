import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  //antes de cada prueba
  //TestBed.configureTestingModule => configura el modulo de pruebas
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  //define cada caso de pruebas, tiene q haber muchos
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // define una expectativa a evaluar => no sea ni null ni undefined
    expect(app).toBeTruthy();
  });

  //deberia tener tal titulo....
  it(`should have as title 'Errecart-proyectFinalAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Errecart-proyectFinalAngular');
  });

  //renderizar el titulo en el HTML
  // it('should render title', () => {
  //   //detectan los cambios ocurridos
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   //berifica el contenido q tiene q ser
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Errecart-proyectFinalAngular app is running!');
  // });

});
