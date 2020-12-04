export interface Validator {
  name?: string;
  validator?: any;
  message?: string;
  type?: string;
  value?: string;
}

export interface FieldConfig {
  code?: string;
  visible?: boolean;
  editable?: boolean;
  dataType?: string;
  renderingHints?: any;
  name?: string;
  description?: string;
  inputType?: string;
  index?: number;
  placeholder?: string;
  required?: boolean;
  label?: string;
  options?: string[];
  collections?: any;
  value?: any;
  validations?: Validator[];
}
