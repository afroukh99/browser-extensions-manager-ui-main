import type { Dispatch, SetStateAction } from "react";

export interface ContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  filter: "all" | "active" | "inactive";
  setFilter: (filter: "all" | "active" | "inactive") => void;
  getFilteredExtensions: ExtensionType[];
};
export type LogoPropsTypes = {
  theme: string;
};

export interface ButtonPropsType  {
  label: string;
  theme: string;
  styles?: string;
  onClick?: (label : string) => void;
  icon?: React.ReactNode
  filter : 'active' | 'inactive' | 'all'
};


export type ExtensionType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}; 




export interface ImportMetaEnv {
  readonly REACT_APP_API_URL: string;
}
