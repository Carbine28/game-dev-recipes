import { Component, OnInit} from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private videoService: VideosService) {}

  videoList: Video[] = [];

  ngOnInit(): void
  {
    // Fetch all videos
    this.videoService.getAllVideos()
    .subscribe({
      next: (videos) => {
        this.videoList = videos;
        console.log(`Number of videos: ${this.videoList.length}`)
      },
      error: (res) => {
        console.log(res);
      }
    })
  }
}
