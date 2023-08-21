import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  baseApiUrl: String = "https://localhost:7150";

  constructor(private http: HttpClient) {}

  // GET
  getAllVideos(): Observable<Video[]>
  {
    return this.http.get<Video[]>(this.baseApiUrl + '/api/videos');
  }
  // GET
  getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(this.baseApiUrl + '/api/videos/' + id);
  }
  // POST
  addVideo(newVideo: Video): Observable<Video> {
    newVideo.id = '00000000-0000-0000-0000-000000000000'; // Assign empty guid to video. Will be replaced in aspnet core
    return this.http.post<Video>(this.baseApiUrl + '/api/videos', newVideo);
  }
  // PUT
  updateVideo(id: string, updateVideoRequest: Video): Observable<Video>
  {
    return this.http.put<Video>(this.baseApiUrl + '/api/videos/' + id, updateVideoRequest);
  }
  // DELETE
  deleteVideo(id: string): Observable<Video>
  {
    return this.http.delete<Video>(this.baseApiUrl + '/api/videos/' + id);
  }
}

