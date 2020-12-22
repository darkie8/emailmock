import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreBackgroundComponent } from './email-search/core-background/core-background.component';

const routes: Routes = [{path: 'emailArchive', component: CoreBackgroundComponent}, {path:'**', redirectTo: '/emailArchive', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
