import { Component, OnInit} from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public streamurl:string=""
  
  constructor(private fetch: FetchService) { }

  ngOnInit(): void {
    this.fetch.api3.subscribe(message => {this.streamurl= message

       });  
  }
  
 
}
