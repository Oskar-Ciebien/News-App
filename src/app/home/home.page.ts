import { Component, OnInit } from '@angular/core';

// Menu Import
import { MenuController } from '@ionic/angular';

// NavigationController Import
import { NavController } from '@ionic/angular';

// 
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  NewsArticles:any=[];

  constructor(private menu: MenuController, private nav: NavController, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.GetLatestNews().subscribe(
      (data)=>{
        this.NewsArticles = data.articles;
      }
    );
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



}