import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksContainerComponent } from './app.component';
import { GettingStartedComponent } from './getting_started/getting-started.component';

const routes: Routes = [
    {
        path: '**',
        redirectTo: '/started',
        pathMatch: 'full'
    },
    {
        path: 'started',
        component: GettingStartedComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [GettingStartedComponent];
