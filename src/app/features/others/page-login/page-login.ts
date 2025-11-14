import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user-service';

@Component({
  selector: 'app-page-login',
  imports: [ReactiveFormsModule],
  templateUrl: './page-login.html',
  styleUrl: './page-login.scss',
})
export class PageLogin implements OnInit {

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);

  public users: User[] = [];
  public form!: FormGroup;

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: datas => {
        this.users = datas;
        this.form = this.formBuilder.group({
          login: ['', Validators.required],
          password: ['', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
          ])]
        })
      }
    })
  }

// (?=.*[A-Z]) => une majuscule
// (?=.*[a-z]) => une minuscule
// (?=.*\d) => un chiffre
// .{8,} => min 8 caractères

  login(): void {
    const login = this.form.value.login;
    const password = this.form.value.password;
    const userFound = this.users.find(u => u.username == login);

    if (!userFound)
      return;

    if (userFound.password !== password) 
      return;

    localStorage.setItem("userFormation", JSON.stringify(userFound));
    this.router.navigateByUrl("/home");
  }

}


