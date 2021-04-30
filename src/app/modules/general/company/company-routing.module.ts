import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '', component: CompanyComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./department/department.module`)
          .then(m => m.DepartmentModule)
      },
      {
        path: 'department',
        loadChildren: () => import(`./department/department.module`)
          .then(m => m.DepartmentModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import(`./portfolio/portfolio.module`)
          .then(m => m.PortfolioModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./department/department.module`)
          .then(m => m.DepartmentModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
