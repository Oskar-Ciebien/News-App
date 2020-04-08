import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contact: ContactPage;

  constructor(private menu: MenuController, private nav: NavController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  contactPage() {
    this.nav.setRoot(this.contact);
  }

}