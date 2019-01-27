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
import { AskmeanythingComponent } from './askmeanything/askmeanything/askmeanything.component';
import{ HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { QuestionService } from './shared/question.service';




const appRoutes: Routes = [
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Technologies', component: TechnologiesComponent},
  { path: 'Travel', component: TravelComponent },
  { path: 'LikesComponent', component: LikesComponent},
  { path: 'Askmeanything', component: AskmeanythingComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ExperienceComponent,
    TechnologiesComponent,
    TravelComponent,
    LikesComponent,
    AskmeanythingComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [

    
    // added new 
    QuestionService,
    { provide: 'BASE_URL', useFactory : getBaseUrl }

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function getBaseUrl()
{
  return document.getElementsByTagName('base')[0].href;
}
