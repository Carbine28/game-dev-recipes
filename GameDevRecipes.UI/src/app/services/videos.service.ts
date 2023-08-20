import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  baseApiUrl: String = "https://localhost:7256";

  constructor(private http: HttpClient) {}


  getAllVideos(): Observable<Video[]>
  {
    return this.http.get<Video[]>(this.baseApiUrl + '/api/videos');
  }

  getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(this.baseApiUrl + '/api/videos/' + id);
  }

  addVideo(newVideo: Video): Observable<Video> {
    newVideo.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Video>(this.baseApiUrl + '/api/Video', newVideo);
  }

  updateVideo(id: string, updateVideoRequest: Video): Observable<Video>
  {
    return this.http.put<Video>(this.baseApiUrl + '/api/Video/' + id, updateVideoRequest);
  }
  
  deleteVideo(id: string): Observable<Video>
  {
    return this.http.delete<Video>(this.baseApiUrl + '/api/Video/' + id);
  }
}

