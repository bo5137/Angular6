import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
    <h2 > Name</h2>
    <h2 class = "text-success">
       Welcome {{name}}
    </h2>

    <h2 [class] = "successClass">Welcome</h2>
    <h2> {{2+2}}</h2>
    <h2> {{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{name.toLowerCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2> 

    <input type = "text" value = "Dean">
    <br>
    <br>
    <input [disabled] ="isDisabled" [id] = "myId" type = "text" value = "Dean">

    <h2 [class.text-danger] = "hasError" > DangerName</h2>
    <h2 [ngClass] = "messageClasses" > Color Choice</h2>
    <h2 [style.color] = "hasError ? 'highlightColor' : 'green'" > Style Binding</h2>
    <h2 [style.color] = "highlightColor" > Style Binding 2</h2>
    <h2 [ngStyle] = "titleStyles" > Style Binding 3</h2>
    

    <button (click) = "onClick($event)">Greet</button>
    <button (click) = "greeting = 'Welcome Dean'">Greet</button>
    {{greeting}}
   `,   

  // styleUrls: ['./test.component.css']
  styles: [`
.text-success{ 
  color: green;
}

.text-danger{ 
  color: red;
}
`]

})
export class TestComponent implements OnInit {

  public name = "Dean"
  public siteUrl = window.location.href;
  public myId = "TestId";
  public isDisabled = true;
  public successClass = "text-success";
  public isSpecial = true;
  public highlightColor = "Orange";

  public hasError = false;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError
  }
   public titleStyles = {
     color: "blue",
     fontStyle: "italic"
   }

   public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

}
