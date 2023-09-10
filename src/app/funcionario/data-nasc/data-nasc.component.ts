import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbDatepicker, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data-nasc',
  templateUrl: './data-nasc.component.html',
  styleUrls: ['./data-nasc.component.css']
})
export class DataNascComponent {
  @ViewChild('dp', { static: false }) private dp: NgbDatepicker | undefined;
  @Output() dateRangeSelected = new EventEmitter<Date[]>();

  startDate: NgbDate | null = null; 
  endDate: NgbDate | null = null;   

  constructor() { }

  ngOnInit(): void {
  }

  onDateSelected(date: NgbDate) {
    this.startDate = date;
}

  

  confirmSelection() {
    if (this.startDate) {
      const startDateAsDate = new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day || 1);
      this.dateRangeSelected.emit([startDateAsDate]);
      console.log(this.startDate);
    }
  }
}
