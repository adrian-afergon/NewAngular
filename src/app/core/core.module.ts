import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from './../shared/shared.module';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

const routes: Routes = [
   { path:'', loadChildren: './../home/home.module#HomeModule'},
   { path:'about', loadChildren:'./../about/about.module#AboutModule'},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent],
  exports:[ShellComponent]
})
export class CoreModule { }
