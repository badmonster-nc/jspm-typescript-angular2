import {OnInit, Component} from 'angular2/core';
import { UtilisateurService } from './utilisateur.service';
import {Utilisateur} from "./utilisateur";
import { Router } from 'angular2/router';


@Component({
  selector: 'utilisateurs',
  templateUrl: 'app/components/utilisateurs/utilisateurs-list.html',
  styleUrls: ['app/components/utilisateurs/utilisateurs-list.css'],
  directives: [],
  providers: [UtilisateurService],
  pipes: []
})
export class UtilisateursListComponent implements OnInit {

  heroes: Utilisateur[] = [];

  constructor(private _router: Router,
      private _heroService: UtilisateurService) { }

  ngOnInit() {
    this._heroService.getUtilisateurs().then(heroes => this.heroes = heroes);
  }

  getUtilisateurs() {
    this._heroService.getUtilisateurs().then(heroes => this.heroes = heroes);
  }

  addUtilisateur() {
    this._router.navigate(['UtilisateursNew']);
  }
}
