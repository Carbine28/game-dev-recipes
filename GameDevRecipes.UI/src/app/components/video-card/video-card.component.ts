import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from 'src/app/models/video.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-card',
  template: `
    <div class="card-container">
      <!-- <div class="card text-bg-secondary mb-3" style="width: 19rem;">
        <img class="card-img-top" [src]="videoCard.thumbnailLink" alt="Thumbnail image of video: {{videoCard.name}} ">
        <div class="card-header-box">
          <h6 class="card-header">{{videoCard.name}}</h6>
        </div>
        <div class="card-body">
          <div class="card-text">{{videoCard.description}}</div>
        </div>
      </div> -->
      <div class="card">
        <div class="card-header">
          <img [src]="videoCard.thumbnailLink" alt="Thumbnail image of video {{videoCard.name}}" />
        </div>
        <div class="card-body">
          <!-- <span class="tag tag-teal">Technology</span> -->
          
          <div class="tagContainer">
          
            <!-- <a (click)="onTagClick(tag)"> <span class="tag tag-purple" *ngFor="let tag of tags">{{ tag }}</span> </a> -->
            <a *ngFor="let tag of tags" >
              <span class="tag tag-purple" (click)="onTagClick(tag)">{{ tag }}</span>
            </a>
          </div>
          
          <h4>{{videoCard.name}}</h4>
          <!-- <p class="card-description">
            {{videoCard.description}}
          </p> -->
          <div class="user">
            <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
            <div class="user-info">
              <h5>Auther Name</h5>
              <small>{{videoCard.gameEngine}}</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {
  @Input() videoCard!: Video;
  @Output() tagClick = new EventEmitter<string>();
  tags: string[] = [];

  constructor(private videoService: VideosService){}
  ngOnInit(): void 
  {
    this.tags = this.videoCard.tagsAsString.split(',');
  }

  onTagClick(tag: string)
  {
    this.tagClick.emit(tag);
  }
}
