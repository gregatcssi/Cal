import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app-component/app.component';
import { MyFilterPipe } from './pipes/myfilter.pipe';
import { GetJsonServiceService } from './Services/get-json-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NWeekComponent } from './n-week/n-week.component';
import { NMonthComponent } from './n-month/n-month.component';
import { NDayComponent } from './n-day/n-day.component';
import { NQuarterComponent } from './n-quarter/n-quarter.component';
import { NYearComponent } from './n-year/n-year.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    NWeekComponent,
    NMonthComponent,
    NDayComponent,
    NQuarterComponent,
    NYearComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [GetJsonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
