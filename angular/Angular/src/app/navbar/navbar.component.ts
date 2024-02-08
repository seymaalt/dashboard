import { Component } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isModalOpen = false;

  constructor() { }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(event: boolean) {
    this.isModalOpen = event;
  }
}