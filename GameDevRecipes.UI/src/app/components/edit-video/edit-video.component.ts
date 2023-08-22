import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';

interface GameEngine{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent {
  updatedVideo: Video = {
    id: '',
    name: '',
    description: '',
    gameEngine: '',
    tagsAsString: '',
    thumbnailLink: '',
    videoId: ''
  }

  gameEngines: GameEngine[] = [
    {value: 'unity', viewValue: 'Unity'},
    {value: 'unreal', viewValue: 'Unreal'},
    {value: 'godot', viewValue: 'Godot'},
  ];

  constructor(
    private videoService: VideosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  tagInput: string = "";
  tagInputLength: number = 0;
  tagsArr: string[] = [];
  maxTagLength: number = 12;
  isValidTagInput = false;
  resultString: string = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.videoService.getVideo(id).subscribe({
            next: (video) => {
              this.updatedVideo = video;
              this.processTags();
            },
          });
        }
      },
    });
  }

  public updateVideo() {
    this.videoService
      .updateVideo(this.updatedVideo.id, this.updatedVideo)
      .subscribe({
        next: (response) => {
          this.router.navigate(['videos']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  validateTagInput(){
    this.tagInputLength = this.tagInput.length;
    if (this.tagInputLength < 12 && this.tagInputLength >= 3)
      this.isValidTagInput = true;
    else
      this.isValidTagInput = false;
  }
  submitTag(){
    this.resultString = this.tagInput.replace(/[^a-zA-Z]/g, ''); // Filter input with regex to only take alphabetical letters
    this.tagsArr.push(this.resultString);
    this.tagInput = ''; // Clear Tag Input
    // console.log(this.tagsArr);
  }
  processTags()
  {
    this.tagsArr  = this.updatedVideo.tagsAsString.split(',');
    // console.log(this.updatedVideo.tagsAsString);
  }
}
