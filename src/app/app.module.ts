import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFilterPipe } from './myfilter.pipe';
import { GetJsonServiceService } from './get-json-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [GetJsonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
