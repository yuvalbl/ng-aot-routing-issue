import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeDesktopComponent} from './home-desktop/home-desktop.component';
import {HomeMobileComponent} from './home-mobile/home-mobile.component';

const isMobile = window.innerWidth < 768;

const desktopRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: `home`, component: HomeDesktopComponent },
];

const mobileRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: `home`, component: HomeMobileComponent },
];

@NgModule({
  // works in JIT but not in AOT
  // in AOT isMobile is always true
  imports: [RouterModule.forRoot(isMobile ? mobileRoutes : desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
