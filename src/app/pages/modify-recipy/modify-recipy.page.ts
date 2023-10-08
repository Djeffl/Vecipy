import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Recipy, RecipyService } from 'src/app/services/recipy.service';

@Component({
  selector: 'app-modify-recipe',
  templateUrl: 'modify-recipy.page.html',
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class ModifyRecipePage implements OnInit {
  public recipyService = inject(RecipyService);
  public router = inject(Router);

  recipyForm!: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    score: FormControl<string | null>;
    prepTime: FormControl<string | null>;
    steps: FormArray<
      FormControl<{
        step: string;
      } | null>
    >;
  }>;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.recipyForm = this.fb.group({
      title: [''],
      description: [''],
      score: [''],
      prepTime: [''],
      steps: this.fb.array([{ step: '' }]),
    });
  }

  pinFormatter(value: number) {
    return `${value}`;
  }

  goRecipyHome() {
    this.router.navigateByUrl('/tabs/recipes');
  }

  onSubmit() {
    console.log(this.recipyForm.value);

    this.recipyService
      .addItem({
        id: 'da68e37e-0d42-40df-a0ef-0d7c2093a78e',
        title: this.recipyForm.value.title,
        preperationTimeInMinutes: Number(this.recipyForm.value.prepTime),
        score: Number(this.recipyForm.value.score),
        scoreTotal: 10,
      } as Recipy)
      .subscribe();
  }
}
