interface AppState {
  foods: Food[];
}

interface Food {
  item_id: string;
  brand_id: string;
  brand_name: string;
  brand_logo: string;
  item_type: number;
  item_name: string;
  upc?: number;
  ingredient_statement?: any;
  serving_qty: number;
  serving_unit: string;
  metric_qty: number;
  metric_unit: string;
  calories: number;
  calories_from_fat?: number
  total_fat: number;
  saturated_fat: number;
  trans_fat: number;
  cholesterol: number;
  sodium: number;
  total_carb: number;
  dietary_fiber: number;
  sugars: number;
  protein: number;
  potassium: number;
  vitamin_a: number;
  vitamin_c: number;
  calcium_dv: number;
  iron_dv: number;
  updated_at: string;
  created_at: string;
  section_id?: any;
  scans_30day?: any;
  thumbnail?: any;
  tag_id?: any;
  tag_name?: any;
  parent_tag_id?: any;
  parent_tag_name?: any;
  remote_db_id: number;
  remote_db_key: number;
  data_source: string;
  sizes: Size[];
  related: RelatedFood[];
}

interface Size {
  item_id: string;
  item_name: string;
  brand_name: string;
  calories: number;
}

interface RelatedFood {
  item_id: string;
  item_name: string;
  nf_calories: number;
}