import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('projects/app1/src/app/app.module')
  },
  {
    path: 'app2',
    loadChildren: '../../projects/app2/src/app/app.module'
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
