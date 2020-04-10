import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

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

  homePage() {
    this.nav.navigateBack('/home');
  }
}
