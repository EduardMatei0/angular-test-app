import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubService } from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {  RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      }
    ]),
    HttpClientModule

  ],
  providers: [
    GithubService,
    PostService,
    { provide: ErrorHandler,
      useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
