import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { GetaquoteComponent } from '../pages/getaquote/getaquote.component';
import { HomeComponent } from '../pages/home/home.component';
import { HowitworksComponent } from '../pages/howitworks/howitworks.component';
import { TransportComponent } from '../pages/transport/transport.component';
import { WhoweserveComponent } from '../pages/whoweserve/whoweserve.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'howitworks', component: HowitworksComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'whoweserve', component: WhoweserveComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'quote', component: GetaquoteComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
