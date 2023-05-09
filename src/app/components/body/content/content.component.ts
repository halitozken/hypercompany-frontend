import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  formData = {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  };

  resetForm() {
    this.formData = {
      text1: '',
      text2: '',
      text3: '',
      text4: ''
    };
  }

}
