export interface BaseListProps {
  dense?: boolean;
  disablePadding?: boolean;
  subheader?: boolean;
}

export interface BaseListItemProps {
  dense?: boolean;
  disableGutters?: boolean;
  disablePadding?: boolean;
  selected?: boolean;
}

export interface BaseListItemButtonProps {
  dense?: boolean;
  disableGutters?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export interface BaseListItemTextProps {
  primary?: string;
  secondary?: string;
  inset?: boolean;
}

export interface BaseListDividerProps {
  inset?: boolean;
}

export interface BaseListSubheaderProps {
  inset?: boolean;
}
