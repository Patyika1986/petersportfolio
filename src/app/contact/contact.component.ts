import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../environments/environment.development';
import * as emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [TranslateModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const templateParams = {
        from_name: name,
        email_id: email,
        message: message
      };
      
      emailjs
        .send(
          environment.serviceId,
          environment.templateId,
          templateParams,
          environment.publicKey
        )
        .then((response: EmailJSResponseStatus) => {
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  }
}
