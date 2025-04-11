export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;
export type Size = number | 'auto' | 'grow';
export type Offset = number | 'auto';

export interface GridProps {
  container?: boolean;
  columns?: number | ResponsiveValue<number>;
  spacing?: number | string;
  rowSpacing?: number | string;
  columnSpacing?: number | string;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  display?: string;
  minHeight?: number | string;
}

export interface GridItemProps {
  size?: ResponsiveValue<Size>;
  offset?: ResponsiveValue<Offset>;
  columns?: number;
  display?: string;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}
