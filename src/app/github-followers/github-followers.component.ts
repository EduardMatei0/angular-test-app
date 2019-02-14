import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';



@Component({

// tslint:disable-next-line: component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;

  constructor(private route: ActivatedRoute,
              private service: GithubService) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');
      const order = combined[1].get('order');


      console.log(id, page, order);
      return this.service.getAll();

    }))
    .subscribe(folowers => { this.followers = folowers; });

  }

}
