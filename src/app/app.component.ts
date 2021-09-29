import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'secondApp';

  obj = [{ name:"abc"}, {name:"xyz"}]

   sub = new BehaviorSubject('rr');

  constructor(private http: HttpClient){
     this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map(d=>{return d+" p"})).
       subscribe(
       data=>{console.log(data)},
       error=>{console.log("errpr"+error)}
       )
       this.http.get('https://jsonplaceholder.typicode.com/todos/1').
       subscribe(
       data=>{console.log(data)},
       error=>{console.log("errpr"+error)}
       )
       
  }
  ngOnInit(){
    this.sub.subscribe(data=>console.log(data));
    this.sub.next("tt");
  }
  windowAlert(e:any){
   alert("windowAlert")
  }
}
