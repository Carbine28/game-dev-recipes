import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {
  newVideo: Video = {
    id: '',
    name: '',
    description: '',
    gameEngine: '',
    tagsAsStrings: '',
    thumbnailLink: '',
    videoId: '', 
  }

  isValidInput = true;

  constructor(private videoService: VideosService, private router: Router){}

  // Checks input when adding a new video into Db.
  validateInput() {
    this.isValidInput = this.newVideo.videoId.startsWith('https://youtu.be/');
  }

  addVideo(){
    this.videoService.addVideo(this.newVideo)
    .subscribe({
      next: (video) => {
        this.router.navigate(['videos']);
      },
      error: (res) => {console.log(res);}
    });
  }
}
