

export interface DataModel {
    id: string;
}

export interface BeverageModel extends DataModel {
    ingredients_list: Array<BeverageIngredientModel>;
}

export interface BeverageIngredientModel extends DataModel {
    quantity: number;
}

export interface IngredientModel extends DataModel {
    type: string; 
    quantity: number;
    low_quantity: number;   
}