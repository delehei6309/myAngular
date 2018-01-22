import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

/*const About = require('./about/about.module');
console.log('0',About);*/

import { RouterModule,Routes } from '@angular/router';
console.log(FormsModule);
const appRoutes:Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'about',
        //component:AboutComponent
        /*loadChildren:()=> new Promise(resolve => {
            require.ensure([],(require:any) => {
                resolve(require('./about/about.module').AboutModule);
            })
        })*/
        loadChildren:'./about/about.module#AboutModule'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        //AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
