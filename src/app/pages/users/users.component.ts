import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/users').subscribe((res) => {
      this.users = res.users;
      this.filteredUsers = this.users;
      console.log(res);
    });
  }

  search(event: any) {
    const lowerTerm = event.target.value.toLowerCase();

    this.filteredUsers = this.users.filter((user: any) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(lowerTerm)
    );
  }
}
