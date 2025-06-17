
export interface ThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export type LogoPropsTypes = {
  theme: string;
};

export interface ButtonPropsType  {
  label: string;
  theme: string;
  styles?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};


export type ExtensionType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}; 


