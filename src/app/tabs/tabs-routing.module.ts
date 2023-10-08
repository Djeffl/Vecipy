import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RecipesOverviewPage } from 'src/app/pages/recipes-overview/recipes-overview.page';
import { ModifyRecipePage } from 'src/app/pages/modify-recipy/modify-recipy.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'recipes',
        component: RecipesOverviewPage,
      },
      {
        path: 'modify-recipe',
        component: ModifyRecipePage,
      },
      {
        path: '',
        redirectTo: '/tabs/recipes',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
