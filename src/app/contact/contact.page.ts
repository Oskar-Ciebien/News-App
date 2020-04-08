import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

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
