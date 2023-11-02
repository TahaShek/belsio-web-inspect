            import {
              ChangeDetectorRef,
              Component,
              OnInit,
              ViewEncapsulation,
            } from '@angular/core';
            import { FormBuilder, FormGroup, Validators } from '@angular/forms';
            import { Router } from '@angular/router';
            import { ToastrService } from 'ngx-toastr';
             import { EcryptionDecrytionService } from 'src/app/services/global/ecryption-decrytion.service';

            @Component({
              selector: 'app-login',
              templateUrl: './login.component.html',
              styleUrls: ['./login.component.scss'],
              encapsulation: ViewEncapsulation.None,
            })
            export class LoginComponent implements OnInit {
              form!: FormGroup;
              passwordVisible = false;
              isLoading: boolean = false;

              constructor(
                private formBuiler: FormBuilder,
                private cdr: ChangeDetectorRef,
                private router: Router,
                private toast: ToastrService,
                private encrypt:EcryptionDecrytionService
              ) {}

              ngOnInit(): void {
                this.formInit();
              }

              formInit() {
                this.form = this.formBuiler.group({
                  userName: [
                    '',
                    [
                      Validators.required,
                      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                    ],
                  ],
                  password: [
                    '',
                    [
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(40),
                    ],
                  ],
                });
              }

              get f() {
                return this.form.controls;
              }
              togglePasswordVisibility(): void {
                this.passwordVisible = !this.passwordVisible;
              }

              preventSpaces(event: KeyboardEvent): void {
                if (event.key === ' ') {
                  event.preventDefault();
                }
              }
              submitForm() {
                this.isLoading = true;

                if (!this.form.valid) {
                  return;
                } else {
                  const formData = this.form.value;

                  if (formData.userName === 'admin@root.com' && formData.password === '123456') {
                    setTimeout(() => {
                      this.toast.success('Success: Logged in as admin@root.com', '', {
                        positionClass: 'toast-top-center', // Adjust the position here
                      });
                      this.isLoading = false;
                    }, 2000);
                  } else {
                    setTimeout(() => {
                      this.toast.error('Invalid login credentials', '', {
                        positionClass: 'toast-top-center', // Adjust the position here
                      });
                      this.isLoading = false;
                    }, 2000);

                  }
                }
              }

            }
