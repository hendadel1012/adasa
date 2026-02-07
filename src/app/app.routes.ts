import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blogs } from './components/blogs/blogs';
import { NotFound } from './components/not-found/not-found';
import { BlogDetails } from './components/blog-details/blog-details';

export const routes: Routes = [

{
  path:"",redirectTo:"home", pathMatch:"full"
},
{
  path:"home", component:Home
},
{
  path:"blogs", component:Blogs
},
{
  path:"blog-details/:id", component:BlogDetails
},








{
  path:"**", component:NotFound
}

]
