export type ItemTextData = {
  id: string;
  imagePath: string;
  text: string;
  title: string;
  fragances: string[]
  ingredients: Ingredients[]

};

export type Ingredients = {
  id: string;
  image: string;
  name: string;
  description: string;
}

export type SetTextData = {
  id: string;
  itemTextData: ItemTextData[];
  name: string;
  description: string;
  imagePath: string;
}