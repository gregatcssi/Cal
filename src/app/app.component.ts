import { Component ,OnInit} from '@angular/core';
import {MyFilterPipe} from './myfilter.pipe';
import {NYearComponent} from './n-year/n-year.component'

import {GetJsonServiceService} from './get-json-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 Date:any;
 colNames =[
  "Saturday"
  ,"Sunday"
  ,"Monday"
  ,"Tuesday"
  ,"Wednesday"
  ,"Thursday"
  ,"Friday"]
  displayColNames=[
     "DispSa"
    ,"DispSu"
    ,"DispMo"
    ,"DispTu"
    ,"DispWe"
    ,"DispTh"
    ,"DispFr"]
 title = 'app';
 filterYear = {Year: (new Date()).getFullYear()};
 DisplayYear = (new Date()).getFullYear();
Display={ 
  Year:this.DisplayYear,
  DisplayDates:<any>[]
 }
  constructor(public dataService:GetJsonServiceService) {
    
    
  }
  ngOnInit(): void{
    this.dataService.getJSON('../assets/dates.json')
                    .subscribe(Dat =>
                      { 
                        this.Date=Dat;
                        this.Display.DisplayDates =Dat;
                      },
                      error=>console.log(error));
  }

  
 
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
    

   this.colNames.forEach(element => {
    dd[i][element]=dd[i][element].substr(dd[i][element].indexOf("/",0)+1,(dd[i][element].lastIndexOf("/")-dd[i][element].indexOf("/")-1));
   });
   for (let index = 0; index < this.displayColNames.length; index++) {
    dd[i][this.displayColNames[index]]=(dd[i][this.colNames[index]]<=10)?'lightgray':(dd[i][this.colNames[index]]>10 && dd[i][this.colNames[index]]<=20)?'lightgreen':'rgb(255, 181, 181)';
   }

    // dd[i]["DispSa"]=(dd[i]["Saturday"]<=10)?'lightgray':(dd[i]["Saturday"]>10 && dd[i]["Saturday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispSu"]=(dd[i]["Sunday"]<=10)?'lightgray':(dd[i]["Sunday"]>10 && dd[i]["Sunday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispMo"]=(dd[i]["Monday"]<=10)?'lightgray':(dd[i]["Monday"]>10 && dd[i]["Monday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispTu"]=(dd[i]["Tuesday"]<=10)?'lightgray':(dd[i]["Tuesday"]>10 && dd[i]["Tuesday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispWe"]=(dd[i]["Wednesday"]<=10)?'lightgray':(dd[i]["Wednesday"]>10 && dd[i]["Wednesday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispTh"]=(dd[i]["Thursday"]<=10)?'lightgray':(dd[i]["Thursday"]>10 && dd[i]["Thursday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    // dd[i]["DispFr"]=(dd[i]["Friday"]<=10)?'lightgray':(dd[i]["Friday"]>10 && dd[i]["Friday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
  } 

  return  dd;
}

}
