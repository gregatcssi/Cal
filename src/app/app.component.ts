import { Component } from '@angular/core';
import {MyFilterPipe} from './myfilter.pipe';

import {GetJsonServiceService} from './get-json-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 Date:any;
 Display:any={};
  constructor(dataService:GetJsonServiceService) {
    
    dataService.getJSON('../assets/dates.json').subscribe(Dat => this.Date =Dat);
    this.Display = {
      Year:this.DisplayYear,
      DisplayDates:this.BuildJson()
    }
  }
  title = 'app';
  filterYear = {Year: (new Date()).getFullYear()};
  DisplayYear = (new Date()).getFullYear();
  
 
BuildJson(){
  let dd =this.Date.filter(item => item.Year=== this.DisplayYear)
  for(var i =0; i< dd.length;i++){
    if(dd[i].WKS<=13){
      dd[i]["Quarter"] = 'Q1';
    }
    if(dd[i].WKS >13 && dd[i].WKS<=26){
      dd[i]["Quarter"] = 'Q2';
    }
    if(dd[i].WKS >26 && dd[i].WKS<=39){
      dd[i]["Quarter"] = 'Q3';
    }
    if(dd[i].WKS >39 && dd[i].WKS<=52){
      dd[i]["Quarter"] = 'Q4';
    }
    dd[i]["Month"] = dd[i].Title.substr(0,dd[i]["Title"].indexOf(" ",0));
    dd[i]["DispSaturday"]=dd[i].Saturday.substr(dd[i].Saturday.indexOf("/",0),(dd[i].Saturday.indexOf("/",dd[i].Saturday.indexOf("/",0)+1)-dd[i].Saturday.indexOf("/",0)))
    dd[i]["Disp Sunday"]=dd[i].Sunday.substr(dd[i].Sunday.indexOf("/",0),(dd[i].Sunday.indexOf("/",dd[i].Sunday.indexOf("/",0)+1)-dd[i].Sunday.indexOf("/",0)))
    dd[i]["Disp Monday"]=dd[i].Monday.substr(dd[i].Monday.indexOf("/",0),(dd[i].Monday.indexOf("/",dd[i].Monday.indexOf("/",0)+1)-dd[i].Monday.indexOf("/",0)))
    dd[i]["Disp Tuesday"]=dd[i].Tuesday.substr(dd[i].Tuesday.indexOf("/",0),(dd[i].Tuesday.indexOf("/",dd[i].Tuesday.indexOf("/",0)+1)-dd[i].Tuesday.indexOf("/",0)))
    dd[i]["Disp Wednesday"]=dd[i].Wednesday.substr(dd[i].Wednesday.indexOf("/",0),(dd[i].Wednesday.indexOf("/",dd[i].Wednesday.indexOf("/",0)+1)-dd[i].Wednesday.indexOf("/",0)))
    dd[i]["Disp Thursday"]=dd[i].Thursday.substr(dd[i].Thursday.indexOf("/",0),(dd[i].Thursday.indexOf("/",dd[i].Thursday.indexOf("/",0)+1)-dd[i].Thursday.indexOf("/",0)))
    dd[i]["Disp Friday"]=dd[i].Friday.substr(dd[i].Friday.indexOf("/",0),(dd[i].Friday.indexOf("/",dd[i].Friday.indexOf("/",0)+1)-dd[i].Friday.indexOf("/",0)))

  } 
  console.log(dd);
  return  dd;
}

}
