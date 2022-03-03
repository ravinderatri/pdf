import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavigationStart, Router } from "@angular/router";  
declare var $: any; 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit { 
  constructor() {  
  }
   
  ngOnInit(): void {
    // this.dialogService.register(this.appDialog);
   
    // this.storage.removeItem('user_id');
  }
 
  
}
