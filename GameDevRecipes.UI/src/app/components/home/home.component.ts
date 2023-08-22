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
  searchTag: string = '';

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

  getFilteredVideos(tag: string)
  {
    if(tag == ""){
      this.filteredVideoList = this.videoList; // Empty search means show all videos fetched on init
    }
    else{
      this.clearSearchBar();
      console.log("getFilteredVideo called with tag: " + tag);
      this.videoService.getTaggedVideos(tag).subscribe({
        next: (videos) => {
          this.filteredVideoList = videos;
          console.log(this.filteredVideoList);
        },
        error: (res) => {
          console.log(res);
        } 
      });
      
    }
    
  }

  clearSearchBar()
  {
    this.searchTag = '';
  }


  handleTagClick(tag: string)
  {
    // console.log(tag);
    this.getFilteredVideos(tag);
  }
}
