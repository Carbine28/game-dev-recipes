import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos: Video[] = [];

  constructor(private videoService: VideosService, private router: Router) {}


  ngOnInit(): void
  {
    this.videoService.getAllVideos()
      .subscribe({
        next: (videos) => {
          this.videos = videos;
        },
        error: (response) => {
          console.log(response);
        }
    });
  }

  deleteVideo(id: string)
  {
    this.videoService.deleteVideo(id)
    .subscribe({
      next: (response) => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: false})
        .then(() => {
          this.router.navigate([currentUrl]);
        })
      }
    });
  }
}
