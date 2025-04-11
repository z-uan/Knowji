export type TableSize = 'small' | 'medium' | 'large';

export interface TableContainerProps {
  maxHeight?: string | number;
}

export interface TableProps extends TableContainerProps {
  size?: TableSize;
  stickyHeader?: boolean;
  caption?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  selectable?: boolean;
}

export interface TableHeadProps {
  size?: TableSize;
}

export interface TableBodyProps {
  size?: TableSize;
}

export interface TableFooterProps {
  size?: TableSize;
}

export interface TableRowProps {
  selected?: boolean;
  hover?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
}

export interface TableCellProps {
  align?: 'left' | 'center' | 'right';
  padding?: 'normal' | 'none' | 'checkbox';
  size?: TableSize;
  component?: string;
  colSpan?: number;
  rowSpan?: number;
  width?: string | number;
  variant?: 'head' | 'body' | 'footer';
  checkbox?: boolean;
}

export interface TablePaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  size?: TableSize;
}

export interface TableSortLabelProps {
  active?: boolean;
  direction?: 'asc' | 'desc';
  hideSortIcon?: boolean;
  onClick?: () => void;
}

export interface TableSelectAllCellProps {
  indeterminate?: boolean;
  checked?: boolean;
  hidden?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface TableCheckboxCellProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface CollapsibleRowProps {
  expanded: boolean;
  onToggle: () => void;
}
