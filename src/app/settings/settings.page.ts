import { Component, OnInit } from '@angular/core';

// Menu Import
import { MenuController } from '@ionic/angular';

// Navigation Import
import { NavController } from '@ionic/angular';

// Keyboard Plugin Import
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // Variables
  firstName: string = "";
  lastName: string = "";
  fullName: string = "";

  // Constructor
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

  // Method to save variables to full name and hide keyboard
  saveName() {
    // Hides the keyboard
    this.keyboard.hide();

    // Console message to test if it works
    console.log("SaveName() working.");

    // Connects first name and last name together
    this.fullName = this.firstName + " " + this.lastName;

  }

}
