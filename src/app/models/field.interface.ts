export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface Option {
  label?: string;
  name?: string; 
  value?: any;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  optionsArray?: Option[];
  collections?: any;
  type: string;
  value?: any;
  location?: string;
  validations?: Validator[];
}
