import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule, Router} from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: 'users', component:UserComponent },
    { path: 'create-user', component:CreateUserComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full'},
   // { path: 'update-user', component:UpdateUserComponent },
    { path: 'update-user/:id', component:UpdateUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
