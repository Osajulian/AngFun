import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { Routes } from '@angular/router';

export const appRoutes = [
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailsComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]