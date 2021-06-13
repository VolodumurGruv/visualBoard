import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PurposesComponent } from './purposes/purposes.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'todolist',
        component: TodoListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'purpose',
        component: PurposesComponent,
      },
      { path: '**', redirectTo: '/' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
