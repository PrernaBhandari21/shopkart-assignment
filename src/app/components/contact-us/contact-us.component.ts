import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData: { name: string, email: string, message: string } = { name: '', email: '', message: '' };

  onSubmit() {
    // Handle form submission here, e.g., send the data to a server or perform other actions.
    console.log('Form data:', this.formData);
  }
}
