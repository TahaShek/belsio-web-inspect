            import { HttpClient } from '@angular/common/http';
import {
              ChangeDetectorRef,
              Component,
              OnInit,
              ViewEncapsulation,
            } from '@angular/core';
            import { FormBuilder, FormGroup, Validators } from '@angular/forms';
            import { Router } from '@angular/router';
            import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/api';
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
              encryptedLoginData: any;

              constructor(
                private formBuiler: FormBuilder,
                private cdr: ChangeDetectorRef,
                private router: Router,
                private toast: ToastrService,
                private base:BaseService,
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
                  programType:['Web'],
                  rememberMe:[],
                  DeviceToken: [''],
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
                // this.isLoading = true;

                if (!this.form.valid) {
                  return;
                }

                const loginData = this.form.value;
                const timestamp = Date.now(); // Get the current timestamp in milliseconds

                const formattedData = {
                  login: {
                    username: loginData.userName,
                    password: loginData.password,
                    programType: loginData.programType,
                    DeviceToken: loginData.DeviceToken,
                    rememberMe: loginData.rememberMe === null ? false : loginData.rememberMe,
                  },
                  timeStamp: {
                    responseDate: timestamp.toString(), // Convert the timestamp to a string
                  },
                };


                console.log('Formatted Login Data:', formattedData);
                this.encryptedLoginData = this.encrypt.encrypt(formattedData); // Storing encrypted data
                console.log('Encrypted Login Data:', this.encryptedLoginData);
                this.base.PostByPromise('AuthenticationWS/LoginWS',this.encryptedLoginData).then((res)=>{

                } )

                // else {
                //   const formData = this.form.value;

                //   if (formData.userName === 'admin@root.com' && formData.password === '123456') {
                //     setTimeout(() => {
                //       this.toast.success('Success: Logged in as admin@root.com', '', {
                //         positionClass: 'toast-top-center', // Adjust the position here
                //       });
                //       this.isLoading = false;
                //     }, 2000);
                //   } else {
                //     setTimeout(() => {
                //       this.toast.error('Invalid login credentials', '', {
                //         positionClass: 'toast-top-center', // Adjust the position here
                //       });
                //       this.isLoading = false;
                //     }, 2000);

                //   }
                // }
              }

              // decryptLoginData() {
              //   if (this.encryptedLoginData) {
              //     const decryptedData = this.encrypt.decrypt(this.encryptedLoginData);
              //     console.log('Decrypted Login Data:', decryptedData);
              //   } else {
              //     console.error('No encrypted login data available.');
              //   }
              // }


            }


