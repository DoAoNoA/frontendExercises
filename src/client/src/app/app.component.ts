import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  cities = [
    {city:"nome", region:"ak"},
    {city:"dallas", region:"tx"},
    {city:"chicago", region:"il"}
  ];

  userCities = [
    {userId: "1", city:"nome", region: " TX", code: "23", date: "Tue, 24 Apr 2018 08:00 PM AKDT", temp: "34", day: "Tue", high: "35", low: "31", text: "Cold"},
    {userId: "1", city:"dallas", region: " TX", code: "23", date: "Tue, 24 Apr 2018 08:00 PM AKDT", temp: "34", day: "Tue", high: "35", low: "31", text: "Cold"},
    {userId: "1", city:"dallas", region: " TX", code: "23", date: "Tue, 24 Apr 2018 08:00 PM AKDT", temp: "34", day: "Tue", high: "35", low: "31", text: "Cold"}
  ];

}
