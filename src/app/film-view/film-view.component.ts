import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../interfaces/film';
import { StarWarsService } from '../star-wars.service';


@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {

  film: Film;
  @Input() url:string;

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getFilm(this.url).subscribe(
      (data: Film) =>
        this.film = data
    );
  }

}
