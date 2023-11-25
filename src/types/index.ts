export interface Dropdown {
  title: string;
  description?: string;
}

export interface Menu {
  title: string;
  dropdowns?: Dropdown[];
}
