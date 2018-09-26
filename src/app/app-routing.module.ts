import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedComponent } from './getting_started/getting-started.component';
import { TaskListComponent } from './task_list/task-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/started',
        pathMatch: 'full'
    },
    {
        path: 'started',
        component: GettingStartedComponent,
        pathMatch: 'full'
    },
    {
        path: 'list/:id',
        component: TaskListComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    GettingStartedComponent,
    TaskListComponent
];
