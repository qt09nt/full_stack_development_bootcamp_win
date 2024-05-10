import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { UserPhoto } from '../user-photo';
// import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  //public photos = [];
  //explicitly defining what the keys going to be:
  public photos: UserPhoto[] = [];

  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
  })

  this.photos.unshift({
    filepath:"",
    webviewPath:capturedPhoto.webPath!
  })
}}
