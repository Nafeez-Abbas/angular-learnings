import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// array of route objects
const routes: Routes = [
  // { path: 'login', component: component to be loaded for the path
      // redirectTo: '/path to redirect', pathMatch: 'prefix{default}/full'
  // }

  // path variable
  // { path: 'login/:id', component: AppComponent }

];

@NgModule({
  imports: [
    // create the route array in the memory
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
