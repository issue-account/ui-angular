import { Component, OnInit, signal } from '@angular/core';
import { CabinetService } from './cabinet.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  constructor(private cabinetService: CabinetService) {
  }
  getHistory = this.cabinetService.getHistory()
  ngOnInit(): void {

  }
  // title = signal()

}
