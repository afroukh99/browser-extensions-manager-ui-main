
export interface ContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  filter: FilterState;
  setFilter: (filter: FilterState) => void;
  getFilteredExtensions: ExtensionType[];
  removeExtension : (name : string) => void
  toggleActiveExtension : (isActive : boolean , name : string) => void
};
export type LogoPropsTypes = {
  theme: string;
};

export interface ButtonPropsType {
  label: string;
  theme: string;
  styles?: string;
  onClick?: (label: string) => void;
  filter?: FilterState;
}

export type ExtensionType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}; 


export enum FilterState {
  All = "all",
  Active = "active",
  Inactive = "inactive"
}


export interface ImportMetaEnv {
  readonly REACT_APP_API_URL: string;
}
