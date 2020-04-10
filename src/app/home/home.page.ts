import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private nav: NavController) { }

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

  homePage() {
    this.nav.navigateBack('/home');
  }
}