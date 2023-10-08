import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipyService } from 'src/app/services/recipy.service';

@Component({
  selector: 'app-recipes-overview',
  templateUrl: 'recipes-overview.page.html',
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  standalone: true,
})
export class RecipesOverviewPage {
  public recipyService = inject(RecipyService);

  public recipes$ = this.recipyService.getList();

  constructor(private router: Router) {}

  public async gotoNewRecipe() {
    await this.router.navigate(['tabs/modify-recipe']);
  }
}
