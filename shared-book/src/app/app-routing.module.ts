import { NgModule } from "@angular/core";
import {  RouterModule, Routes} from "@angular/router";
import { ListPostsComponent } from "./list-posts/list-posts.component";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { AdminComponent } from "./admin/admin.component";

const routes:Routes=[
    {path : 'posts', component : ListPostsComponent}, 
    {path : '', component : HomeComponent},
    {path : 'form', component : FormComponent}, 
    {path : 'admin', component : AdminComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class appRoutingModule {}