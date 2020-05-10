import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: "landingPage",
  //   loadChildren: "src/app/landing-page/landing-page.module#LandingPageModule"
  // }
  { path: '**', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
