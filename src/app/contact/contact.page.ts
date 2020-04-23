import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private menu: MenuController, private nav: NavController, private keyboard: Keyboard) { }

  ngOnInit() {
  }

  // Open Menu
  openMenu() {
    this.menu.enable(true, 'sideMenu');
    this.menu.open('sideMenu');
  }

  // Redirect to about page
  aboutPage() {
    this.nav.navigateRoot('/about');
  }

  // Redirect to contact page
  contactPage() {
    this.nav.navigateRoot('/contact');
  }

  // Redirect to settings page
  settingsPage() {
    this.nav.navigateRoot('/settings');
  }

  // Redirect to home page
  homePage() {
    this.nav.navigateBack('/home');
  }

  openKeyboard() {
    // Console Output to check if the method is properly called out
    console.log("Keyboard working");
    
    // Opens the keyboard
    this.keyboard.show();
  }

}
