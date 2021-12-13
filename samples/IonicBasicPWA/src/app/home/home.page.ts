import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType } from '@capacitor/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
  image: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
      '../../assets/capgemini-logo.png'
    );
  }

  async takePicture() {
    try {
      const image = await Plugins.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      // Change last picture shown
      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
    } catch (e) {
      this.show('Closing camera');
    }
  }

  async show(message: string) {
    await Plugins.Toast.show({
      text: message,
    });
  }
}
