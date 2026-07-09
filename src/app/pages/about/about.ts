import { Component } from '@angular/core';
import { Banner } from '../../components/about/banner/banner';
import { AboutContainer } from '../../components/about/about-container/about-container';

@Component({
  selector: 'app-about',
  imports: [Banner, AboutContainer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
