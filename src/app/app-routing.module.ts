import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { Template1Component } from './template/template1/template1.component'; 
import { Template2Component } from './template/template2/template2.component';
import { Template3Component } from './template/template3/template3.component';
import { Template4Component } from './template/template4/template4.component';
import { Template5Component } from './template/template5/template5.component';
import { Template6Component } from './template/template6/template6.component';
import { Template7Component } from './template/template7/template7.component';
import { Template8Component } from './template/template8/template8.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'template1', pathMatch: 'full' },
  { path: 'template1', component: Template1Component }, 
  { path: 'template2', component: Template2Component }, 
    { path: 'template3', component: Template3Component }, 
    { path: 'template4', component: Template4Component }, 
    { path: 'template5', component: Template5Component }, 
    { path: 'template6', component: Template6Component }, 
    { path: 'template7', component: Template7Component }, 
      { path: 'template8', component: Template8Component } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
