import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '12/07/2018',
    time: '10:00am',
    price: 599.99,
    imageUrl: 'assets/images/anhularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
