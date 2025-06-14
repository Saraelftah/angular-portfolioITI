import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about'
import { Skills } from './skills/skills'
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Contact, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'demo-project';

}
