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
    
    dd[i]["DispSaturday"]=dd[i].Saturday.substr(dd[i].Saturday.indexOf("/",0)+1,(dd[i].Saturday.lastIndexOf("/")-dd[i].Saturday.indexOf("/")-1));
    dd[i]["DispSunday"]=dd[i].Sunday.substr(dd[i].Sunday.indexOf("/",0)+1,(dd[i].Sunday.lastIndexOf("/")-dd[i].Sunday.indexOf("/")-1));
    dd[i]["DispMonday"]=dd[i].Monday.substr(dd[i].Monday.indexOf("/",0)+1,(dd[i].Monday.lastIndexOf("/")-dd[i].Monday.indexOf("/")-1));
    dd[i]["DispTuesday"]=dd[i].Tuesday.substr(dd[i].Tuesday.indexOf("/",0)+1,(dd[i].Tuesday.lastIndexOf("/")-dd[i].Tuesday.indexOf("/")-1));
    dd[i]["DispWednesday"]=dd[i].Wednesday.substr(dd[i].Wednesday.indexOf("/",0)+1,(dd[i].Wednesday.lastIndexOf("/")-dd[i].Wednesday.indexOf("/")-1));
    dd[i]["DispThursday"]=dd[i].Thursday.substr(dd[i].Thursday.indexOf("/",0)+1,(dd[i].Thursday.lastIndexOf("/")-dd[i].Thursday.indexOf("/")-1));
    dd[i]["DispFriday"]=dd[i].Friday.substr(dd[i].Friday.indexOf("/",0)+1,(dd[i].Friday.lastIndexOf("/")-dd[i].Friday.indexOf("/")-1));

    // dd[i]["DispSa"]=(dd[i]["DispSaturday"]<=10)?"myStyle={'background-color':'lightgray'}" : (dd[i]["DispSaturday"]>10 && dd[i]["DispSaturday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispSu"]=(dd[i]["DispSunday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispSunday"]>10 && dd[i]["DispSunday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispMo"]=(dd[i]["DispMonday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispMonday"]>10 && dd[i]["DispMonday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispTu"]=(dd[i]["DispTuesday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispTuesday"]>10 && dd[i]["DispTuesday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispWe"]=(dd[i]["DispWednesday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispWednesday"]>10 && dd[i]["DispWednesday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispTh"]=(dd[i]["DispThursday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispThursday"]>10 && dd[i]["DispThursday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    // dd[i]["DispFr"]=(dd[i]["DispFriday"]<=10)?"myStyle={'background-color':'lightgray'}":(dd[i]["DispFriday"]>10 && dd[i]["DispFriday"]<=20)?"myStyle={'background-color':'lightgreen'}":"myStyle={'background-color':'rgb(255, 181, 181)'}";
    dd[i]["DispSa"]=(dd[i]["DispSaturday"]<=10)?'lightgray':(dd[i]["DispSaturday"]>10 && dd[i]["DispSaturday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispSu"]=(dd[i]["DispSunday"]<=10)?'lightgray':(dd[i]["DispSunday"]>10 && dd[i]["DispSunday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispMo"]=(dd[i]["DispMonday"]<=10)?'lightgray':(dd[i]["DispMonday"]>10 && dd[i]["DispMonday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispTu"]=(dd[i]["DispTuesday"]<=10)?'lightgray':(dd[i]["DispTuesday"]>10 && dd[i]["DispTuesday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispWe"]=(dd[i]["DispWednesday"]<=10)?'lightgray':(dd[i]["DispWednesday"]>10 && dd[i]["DispWednesday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispTh"]=(dd[i]["DispThursday"]<=10)?'lightgray':(dd[i]["DispThursday"]>10 && dd[i]["DispThursday"]<=20)?'lightgreen':'rgb(255, 181, 181)';
    dd[i]["DispFr"]=(dd[i]["DispFriday"]<=10)?'lightgray':(dd[i]["DispFriday"]>10 && dd[i]["DispFriday"]<=20)?'lightgreen':'rgb(255, 181, 181)';





  } 
  console.log(dd);
  return  dd;
}

}
