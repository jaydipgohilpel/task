import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private imageUploadService: HttpClient) { }

}
