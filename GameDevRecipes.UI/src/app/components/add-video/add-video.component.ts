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
  tagInput: string = "";
  tagInputLength: number = 0;
  tagsArr: string[] = [];
  maxTagLength: number = 12;
  isValidTagInput = false;

  gameEngines: GameEngine[] = [
    {value: 'unity', viewValue: 'Unity'},
    {value: 'unreal', viewValue: 'Unreal'},
    {value: 'godot', viewValue: 'Godot'},
  ];

  isValidInput = false;
  selectedGameEngine: string = "";
  inputLength: number = 0;
 
  constructor(private videoService: VideosService, private router: Router){}

  // Checks ID input to ensure Db validity
  validateInput() {
    this.isValidInput = this.newVideo.videoId.startsWith('https://youtu.be/');
    this.inputLength = this.newVideo.videoId.length;
  }
  // Check tags for validity
  validateTagInput(){
    this.tagInputLength = this.tagInput.length;
    if (this.tagInputLength < 12 && this.tagInputLength >= 3)
      this.isValidTagInput = true;
    else
      this.isValidTagInput = false;
  }
  // Sends new video data to server
  addVideo(){
    this.newVideo.gameEngine = this.selectedGameEngine;
    this.processTags()
    this.videoService.addVideo(this.newVideo)
    .subscribe({
      next: (video) => {
        this.router.navigate(['videos']);
      },
      error: (res) => {console.log(res);}
    });
  }

  // Store local array of tags
  submitTag(){
    this.resultString = this.tagInput.replace(/[^a-zA-Z]/g, ''); // Filter input with regex to only take alphabetical letters
    this.tagsArr.push(this.resultString);
    this.tagInput = ''; // Clear Tag Input
    console.log(this.tagsArr);
  }
  resultString: string = "";

  // Change list of tags into a string for later processing
  processTags()
  {
    this.newVideo.tagsAsString = this.tagsArr.join(',');
    console.log(this.newVideo.tagsAsString);
  }

  removeTag(tag: string) : void
  {
    const index = this.tagsArr.indexOf(tag);
    if (index > -1)
      this.tagsArr.splice(index, 1);
    console.log(this.tagsArr);
  }
}
