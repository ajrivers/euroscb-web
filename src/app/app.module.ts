import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QuestionFilterPipe } from './faqs/question.pipe';
import { DownloadsComponent } from './downloads/downloads.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './shared/carousel.component';
import { ContactFormComponent } from './contact/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FaqsComponent,
    QuestionFilterPipe,
    DownloadsComponent,
    ContactComponent,
    CarouselComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'welcome', component: WelcomeComponent },
      { path: 'faqs', component: FaqsComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'contact', component: ContactComponent },
      { path:'', redirectTo:'welcome', pathMatch:'full' },
      { path:'**', redirectTo:'welcome', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
