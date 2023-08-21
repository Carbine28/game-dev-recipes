import { Component } from '@angular/core';
import { Video } from 'src/app/models/video.model';

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

  validateInput() {
    this.isValidInput = this.newVideo.videoId.startsWith('https://youtu.be/');
  }

  addVideo(){

  }
}
