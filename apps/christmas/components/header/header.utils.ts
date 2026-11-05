export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const getHeaderNavItems = (): NavItem[] => [
  {
    id: "experiencias",
    label: "Experiencias Navideñas",
    href: "/proximamente",
  },
  { id: "musica", label: "Música & Villancicos", href: "/proximamente" },
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

