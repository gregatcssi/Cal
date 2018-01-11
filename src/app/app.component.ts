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
colNames =["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
displayColNames=["DispSa","DispSu","DispMo","DispTu","DispWe","DispTh","DispFr"]
title = 'app';
filterYear = {Year: (new Date()).getFullYear()};
DisplayYear = (new Date()).getFullYear();
Display={ 
  Year:this.DisplayYear,
  DisplayDates:<any>[]
}
constructor(public dataService:GetJsonServiceService) {
}
  ngOnInit(): void
  {
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
      dd[i]["Month"] = dd[i].Title.substr(0,dd[i]["Title"].indexOf(" ",0));
      dd[i]=this.updateQuarters(dd,i)
      dd[i]=this.updateNames(dd,i)
      dd[i]=this.updateColors(dd,i)
    }
    this.testTheStructure(dd);
    return  dd;
  }
  updateQuarters(dd,i){
    dd[i]["Quarter"] =(dd[i].WKS<=13)?'Q1':(dd[i].WKS >13 && dd[i].WKS<=26)?'Q2':(dd[i].WKS >26 && dd[i].WKS<=39)?'Q3':'Q4';
    return dd[i];
  }
  updateNames(dd,i){
    this.colNames.forEach(element => {
      dd[i][element]=dd[i][element].substr(dd[i][element].indexOf("/",0)+1,(dd[i][element].lastIndexOf("/")-dd[i][element].indexOf("/")-1));
  });
  return dd[i];
  }
  updateColors(dd,i){
    for (let index = 0; index < this.displayColNames.length; index++) {
      dd[i][this.displayColNames[index]]=(dd[i][this.colNames[index]]<=10)?'lightgray':(dd[i][this.colNames[index]]>10 && dd[i][this.colNames[index]]<=20)?'lightgreen':'rgb(255, 181, 181)';
  }
  return dd[i];
  }

  testTheStructure(dd){
    let jDD={};
    let jDQ1M ={};
    jDD=this.groupBy(dd,'Year')
    console.log(jDD);
    jDD=this.groupBy(jDD[this.DisplayYear],'Quarter');
    console.log(jDD);
    jDQ1M = this.groupBy(jDD['Q1'],'Month');
    console.log(jDQ1M )
  }
  groupBy(obj:Array<any>,prop) {
    return obj.reduce(function(groups, item) {
      var val = item[prop];
      groups[val] = groups[val] || [];
      groups[val].push(item);
      return groups;
    }, {});
  }

}