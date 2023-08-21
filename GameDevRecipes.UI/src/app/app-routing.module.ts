import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideosComponent } from './components/videos/videos.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { HomeComponent } from './components/home/home.component';
import { EditVideoComponent } from './components/edit-video/edit-video.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
     path: 'videos',
     component: VideosComponent
  },
  {
    path: 'videos/add',
    component: AddVideoComponent
  },
  {
    path: 'videos/edit/:id',
    component: EditVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
