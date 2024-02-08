import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { UserService } from './user.service';
import { User } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent, MainComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from 'styleUrl' to 'styleUrls' and value is now an array
})
export class AppComponent {
  isModalOpen: boolean = false;

  users: User[] = [];



  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  
  deleteUser(userId: number, event: MouseEvent): void {
    event.preventDefault(); // Prevent the anchor tag from navigating
  
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: (resp) => {
          // Filter out the deleted user
          this.users = this.users.filter(user => user.id !== userId);
          console.log('User deleted successfully');
        },
        error: (err) => {
          console.error('Error deleting user:', err);
        }
      });
    }
  }

  

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event: boolean) {
    this.isModalOpen = event;
   
  }
}
