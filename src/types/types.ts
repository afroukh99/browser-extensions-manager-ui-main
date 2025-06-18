
export interface ContextType {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme : () => void;
  data : ExtensionType [];
  getActiveExtensions  : () => void; 
  getInactiveExtensions  : () => void; 
}

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
