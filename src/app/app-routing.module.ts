import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
const routes: Routes = [
 {path:"",component:LoginpageComponent},
 {path:"fileupload",component:FileuploadComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }