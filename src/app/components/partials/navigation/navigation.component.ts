import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  userName!: string | null;
  userRole!: string | null;
  isLogged!: boolean;

  constructor(public _http: HttpService, private route: Router) {}

  ngOnInit(): void {
    if(this._http.getUserName() != null) {
      this.userName = this._http.getUserName()
    }
    if(this._http.getRole() != null) {
      this.userRole = this._http.getRole()
    }
    this._http.usuario.subscribe((resultat) => {
      if (resultat != null) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }
  logout() {
    this._http.logout();
    this.route.navigate(['/home']);
  }
}
