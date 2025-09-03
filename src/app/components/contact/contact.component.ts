import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
}
