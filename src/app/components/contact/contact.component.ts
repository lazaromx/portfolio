import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;
  isSuccess = false;
  isError = false;

  constructor(private http: HttpClient) {}

  onSubmit(){
    this.isLoading = true;
    this.isSuccess = false;
    this.isError = false;

    const apiUrl = '/api/send-email.js';

    this.http.post(apiUrl, this.formData).subscribe({
      next: (response) => {
        console.log("Sucesso!", response);
        this.isLoading = false;
        this.isSuccess = true;
        this.formData = {name: '', email: '', subject: '', message: ''};
      },
      error: (error) =>{
        console.error( 'Erro!', error);
        this.isLoading = false;
        this.isError = true;
      }
    });
  }

  }
  // contactForm: FormGroup;
//   isSubmitting = false;
//   submitSuccess = false;
//   submitError = false;

//   constructor(private fb: FormBuilder) {
//     this.contactForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       subject: ['', Validators.required],
//       message: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.contactForm.valid) {
//       this.isSubmitting = true;
//       this.submitSuccess = false;
//       this.submitError = false;

//       // Simulate form submission
//       setTimeout(() => {
//         this.isSubmitting = false;
//         this.submitSuccess = true;
//         this.contactForm.reset();
//       }, 2000);
//     }
//   }

