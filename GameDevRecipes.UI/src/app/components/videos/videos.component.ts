import { Component } from '@angular/core';
import { Video } from 'src/app/models/video.model';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  videos: Video[] = [
    {
      id: "1",
      name: "How to build an AI for FPS",
      description: "Lorem Ipsum",
      gameEngine: "Unity",
      tags: ["AI", "FPS"],
      thumbnailLink: "link",
      videoId: "vid ID"
    },

    {
      id: "2",
      name: "How to build an rpg",
      description: "Lorem Ipsum",
      gameEngine: "Unity",
      tags: ["RPG"],
      thumbnailLink: "link",
      videoId: "vid ID"
    },
  ];
}
