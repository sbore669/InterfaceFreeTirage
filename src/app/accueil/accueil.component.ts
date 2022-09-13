import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  content!: string

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total liste Postulants', cols: 1, rows: 1,content: 'Bonjour', },
          { title: 'Total Tirage effectuer', cols: 1, rows: 1, content: 'tu vas' },
          { title: 'Total Postulants', cols: 1, rows: 1 , content: 'bien'},
        ];
      }

      return [
        { title: 'Total liste Postulants', cols: 1, rows: 1,content: 'Bonjour', },
        { title: 'Total Tirage effectuer', cols: 1, rows: 1,content: 'tu vas' },
        { title: 'Total Postulants', cols: 1, rows: 1,content: 'bien' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
