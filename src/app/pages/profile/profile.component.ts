import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.http
      .get('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
      })
      .subscribe({
        next: (res) => (this.profile = res),
        error: () => this.router.navigate(['/login']),
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
