import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QuestionFilterPipe } from './faqs/question.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FaqsComponent,
    QuestionFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'welcome', component: WelcomeComponent },
      { path: 'faqs', component: FaqsComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' },
      { path:'**', redirectTo:'welcome', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
