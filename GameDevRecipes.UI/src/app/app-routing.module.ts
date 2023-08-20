import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent
  },
  {
     path: 'videos',
     component: VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
