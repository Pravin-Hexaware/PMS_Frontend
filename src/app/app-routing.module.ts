import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityListComponent } from './security-list/security-list.component';
import {SecurityMasterComponent} from './security-master/security-master.component';

const routes: Routes = [
  { path: '', redirectTo: '/securities', pathMatch: 'full' },
  { path: 'securities', component: SecurityListComponent },
  
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }