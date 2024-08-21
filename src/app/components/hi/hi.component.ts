import { Component } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrl: './hi.component.css'
})
export class HIComponent {

  images: string[] = [
    'https://media.glassdoor.com/l/f3/17/ad/0f/meeting-room-in-noida-india.jpg',
    'https://media.glassdoor.com/l/30/f8/6e/6c/ukg-offices-in-noida-india.jpg',
    'https://media.glassdoor.com/l/39/6b/3c/da/ukg-offices-in-noida-india.jpg',
    'https://pbs.twimg.com/media/Eq-w1MMWMAEWzU4?format=jpg&name=large',
    'https://pbs.twimg.com/media/Eq-w1MIW8AIR-pJ.jpg',
    'https://media.glassdoor.com/l/0a/f8/68/6e/employees-enjoying-a-fun-lunch-at-a-new-office-unveiling.jpg'
  ];
}