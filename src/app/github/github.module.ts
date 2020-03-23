import {RepoListComponent} from './pages';
import {GithubRoutingModule} from './github-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    GithubRoutingModule, SharedModule
  ],
  providers: [
  ],
  declarations: [RepoListComponent]
})
export class GithubModule { }
