import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

  constructor(private router : Router){

  }
  tools = [
    { name: 'Envato Elements', icon: '/assets/envato.jpeg', buttonText: 'Envato Access' },
    { name: 'Flaticon', icon: '../assets/images/flaticon.png', buttonText: 'Flaticon' },
    { name: 'Storyblocks', icon: '../assets/images/storyblocks.png', buttonText: 'Storyblocks' },
    { name: 'Vecteezy', icon: '../assets/images/vecteezy.png', buttonText: 'Vecteezy' },
    { name: 'LovePik', icon: '../assets/images/lovepik.png', buttonText: 'LovePik' },
    { name: 'Prime Video', icon: '../assets/images/prime.png', buttonText: 'Prime Video' },
    { name: 'Netflix', icon: '../assets/images/netflix.png', buttonText: 'Netflix' },
    { name: 'Talking.network', icon: '../assets/images/talking.png', buttonText: 'Talking.network' },
  ];

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/assets/envato.jpeg'; // Default fallback image
  }

  redirect(){
   this.router.navigate([])
  }
}
