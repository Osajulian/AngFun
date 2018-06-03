import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  template: `<div><h1>Upcoming Angular Events</h1>
  <hr/>
  <div class="row">
  <div class="col-md-5" *ngFor="let event of events">
  <app-event-thumbnail [event] = 'event'></app-event-thumbnail> 
  </div>
  </div>
  </div>`
})
export class EventsListComponent implements OnInit {
  


  
events:any[]
  constructor(private eventService: EventService) {
   
   }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
