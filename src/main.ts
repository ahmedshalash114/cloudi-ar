import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule, // Add BrowserAnimationsModule for Angular Material
  ],
}).catch((err) => console.error(err));
