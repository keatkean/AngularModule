import { Component, OnInit } from '@angular/core';
import {repos} from '../../../../core/models';
import {GitHubService} from '../../../../core/models/services';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  userName = 'angular';
  repos: repos[];

  loading = false;
  errorMessage;

  constructor(private githubService: GitHubService) {
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName)
      .subscribe((response) => {this.repos = response; },
        (error) => {this.errorMessage = error; this.loading = false; },
        () => {this.loading = false; });
  }

  ngOnInit(): void {
  }

}
