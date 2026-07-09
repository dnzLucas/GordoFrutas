import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Fruits } from './pages/fruits/fruits';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "fruits",
    component: Fruits
  },
  {
    path: "about",
    component: About
  },
  {
    path: "contact",
    component: Contact
  }

];
