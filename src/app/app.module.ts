import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TravelComponent } from './travel/travel.component';
import { LikesComponent } from './likes/likes.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Technologies', component: TechnologiesComponent},
  { path: 'Travel', component: TravelComponent },
  { path: 'LikesComponent', component: LikesComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ExperienceComponent,
    TechnologiesComponent,
    TravelComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), 
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
