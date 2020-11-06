import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../shared/data-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { BinaryObject } from '../shared/model/BinaryObject';
import { BodyObject } from '../shared/model/BodyObject';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: ElementRef;
  fileProgress = 0;
  fileInProgress = false;
  idFileToRetrieve = 10;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  download(): any {
    this.dataService
      .downloadFile(this.idFileToRetrieve)
      .subscribe((data: any) => {
        // need to do something with the data
        console.log(data);
      });
  }

  upload(): void {
    this.fileUpload.nativeElement.onchange = () => {
      const file = this.fileUpload.nativeElement.files[0];
      console.log(file);
      this.uploadFile(file);
    };
    this.fileUpload.nativeElement.click();
  }

  uploadFile(file: any): void {
    // Still not sure which is the correct body format
    const formDataImage = new FormData();
    formDataImage.append('image', file);
    const binaryObject: BinaryObject = { mimeType: file.type, size: file.size };
    const bodyObject: BodyObject = {
      formData: formDataImage,
      binary: binaryObject,
    };
    // formDataImage.append('root', 'mimeType: ' + file.type);
    // formDataImage.append('root', 'size: ' + file.size);
    this.fileInProgress = true;
    this.dataService.uploadFile(bodyObject).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(event.body.message);
        }
      },
      (err) => {
        this.fileInProgress = false;
        console.log('Could not upload the file!');
      }
    );
  }
}
