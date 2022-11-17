import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public desc: string,
    public place: string,
    public imagePath: string,
    public userId: string,
    public ingredients: Ingredient[]
  ) {}
}
