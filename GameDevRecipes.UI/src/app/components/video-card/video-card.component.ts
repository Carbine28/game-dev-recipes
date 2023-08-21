import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from 'src/app/models/video.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-video-card',
  template: `
    <div class="card-container">
      <div class="card text-bg-secondary mb-3" style="width: 19rem;">
        <img class="card-img-top" [src]="videoCard.thumbnailLink" alt="Thumbnail image of video: {{videoCard.name}} ">
        <div class="card-header-box">
          <h6 class="card-header">{{videoCard.name}}</h6>
        </div>
        <div class="card-body">
          <div class="card-text">{{videoCard.description}}</div>
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {
@Input() videoCard!: Video;
}
