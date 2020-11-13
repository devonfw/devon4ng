import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from './service/data-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { BinaryObject } from '../core/interfaces/BinaryObject';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: ElementRef;
  fileProgress = 0;
  fileInProgress = false;
  idFileToRetrieve = 1000116;
  uploadSuccess = false;
  uploadFail = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  download(): void {
    this.dataService
      .downloadFile(this.idFileToRetrieve)
      .subscribe((blob: Blob) => {
        // Missing the binaryObject data from backend
        console.log(blob);
      });
  }

  upload(): void {
    this.fileUpload.nativeElement.click();

    this.fileUpload.nativeElement.onchange = () => {
      const file = this.fileUpload.nativeElement.files[0];
      console.log(file);
      this.uploadFile(file);
    };
    this.uploadSuccess = false;
    this.uploadFail = false;
  }

  uploadFile(file: File): void {
    const formDataBody = this.getFormData(file);
    this.dataService.uploadFile(formDataBody).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(event);
          this.idFileToRetrieve = event.body.id;
          this.fileInProgress = false;
          this.uploadSuccess = true;
          // this.download();
        }
      },
      (err) => {
        this.fileInProgress = false;
        this.uploadFail = true;
        console.log('Could not upload the file!');
      }
    );
  }

  getFormData(file: File): FormData {
    const formData = new FormData();
    formData.append('image', file);
    const binaryObject: BinaryObject = { mimeType: file.type, size: file.size };
    const jsonBinaryObject = JSON.stringify(binaryObject);
    const blobBinaryObject = new Blob([jsonBinaryObject], {
      type: 'application/json',
    });
    formData.append('root', blobBinaryObject);
    this.fileInProgress = true;

    return formData;
  }
}
