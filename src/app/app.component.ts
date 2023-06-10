import { Component } from '@angular/core';
import { CabinetService } from './cabinet/cabinet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ui'
  constructor(private cabinetService: CabinetService){}
  user = this.cabinetService.getHistory()
}
