import { Component, OnInit, inject } from '@angular/core';
import { WallStreetService } from '../../../services/wallStreetService';
import { CalendarService } from '../../../services/calendarService';
import { Stock } from '../../../models/stock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wall-street-marquee',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './wall-street-marquee.component.html',
})
export class WallStreetMarqueeComponent implements OnInit {
  private wallStreetService = inject(WallStreetService);
  private calendarService = inject(CalendarService);
  stocks: Stock[] = [];

  ngOnInit(): void {
    this.stocks = this.wallStreetService.getStocks(this.calendarService.getToday());
  }
}
