import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';

interface GameEngine{
  value: string,
  viewValue: string
}

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
    tagsAsString: '',
    thumbnailLink: '',
    videoId: '', 
  }

  
  gameEngines: GameEngine[] = [
    {value: 'unity', viewValue: 'Unity'},
    {value: 'unreal', viewValue: 'Unreal'},
    {value: 'godot', viewValue: 'Godot'},
  ];

  isValidInput = false;
  selectedGameEngine: string = "";
  inputLength: number = 0;

  constructor(private videoService: VideosService, private router: Router){}

  // Checks input when adding a new video into Db.
  validateInput() {
    this.isValidInput = this.newVideo.videoId.startsWith('https://youtu.be/');
    this.inputLength = this.newVideo.videoId.length;
  }

  addVideo(){
    this.newVideo.gameEngine = this.selectedGameEngine;
    this.videoService.addVideo(this.newVideo)
    .subscribe({
      next: (video) => {
        this.router.navigate(['videos']);
      },
      error: (res) => {console.log(res);}
    });
  }
}
