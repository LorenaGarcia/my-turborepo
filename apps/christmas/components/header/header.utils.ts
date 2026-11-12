export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const getHeaderNavItems = (): NavItem[] => [
  {
    id: "arbol",
    label: "Adorna tu árbol",
    href: "/arbol",
  },
  { id: "postal", label: "Crea tu postal", href: "/postal" },
];

export const isNavItemActive = (
  pathname: string,
  itemHref: string
): boolean => {
  if (itemHref === "/") {
    return pathname === "/" || pathname === "";
  }
  return pathname.startsWith(itemHref);
};

