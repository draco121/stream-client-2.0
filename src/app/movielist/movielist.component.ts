import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { imovie } from '../imovie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
   items:string[]
  constructor(private fetch: FetchService ) { }

  ngOnInit(): void {
    this.fetch.getMovies().subscribe(data => this.items = data);
  }

  stream(event: any)
  {
  
    this.fetch.getStream('/stream/movie/'+event.target.id)
    //console.log(event.target.id)
  }
}
