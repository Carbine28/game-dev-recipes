import { Component, OnInit} from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';
import { VideoCardComponent } from '../video-card/video-card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private videoService: VideosService) {}

  videoList: Video[] = [];
  filteredVideoList: Video[] = [];

  ngOnInit(): void
  {
    // Fetch all videos
    this.videoService.getAllVideos()
    .subscribe({
      next: (videos) => {
        this.videoList = videos;
        this.filteredVideoList = videos;
        console.log(`Number of videos: ${this.videoList.length}`)
      },
      error: (res) => {
        console.log(res);
      }
    })
  }
}
