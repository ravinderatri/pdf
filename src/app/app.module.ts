import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { Template1Component } from './template/template1/template1.component';
import { Template2Component } from './template/template2/template2.component';  
import { Template3Component } from './template/template3/template3.component'; 
import { Template4Component } from './template/template4/template4.component';  
import { Template5Component } from './template/template5/template5.component';
import { Template6Component } from './template/template6/template6.component';
import { Template7Component } from './template/template7/template7.component';
import { Template8Component } from './template/template8/template8.component'; 
import { SanitizeHtmlPipe } from './shared/pipes/sanitizeHtml.pipe';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,  
    SanitizeHtmlPipe,
    Template1Component,
    Template2Component, 
    Template3Component, 
    Template4Component, 
    Template5Component,
    Template6Component,
    Template7Component,
    Template8Component 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,  
    BrowserAnimationsModule,  
    FormsModule, 
    ReactiveFormsModule,  
    HttpClientModule, 
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
