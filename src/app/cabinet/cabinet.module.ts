import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HistoryComponent } from './history/history.component';
import { InfoComponent } from './info/info.component';
import { CabinetComponent } from './cabinet.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HistoryComponent,
    InfoComponent,
    CabinetComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabinetComponent
  ]
})
export class CabinetModule { }
