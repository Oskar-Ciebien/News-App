import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private menu: MenuController, private nav: NavController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.enable(true, 'sideMenu');
    this.menu.open('sideMenu');
  }

  aboutPage() {
    this.nav.navigateRoot('/about');
  }

  contactPage() {
    this.nav.navigateRoot('/contact');
  }

  settingsPage() {
    this.nav.navigateRoot('/settings');
  }

}
