import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumsComponent } from './albums/albums.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent, children: [
    {path: ':location', component: AlbumComponent} 
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: "**", redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
