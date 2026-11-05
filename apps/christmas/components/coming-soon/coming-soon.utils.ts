export interface ComingSoonCopy {
  badge: string;
  title: string;
  message: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export const COMING_SOON_ROUTE = "/proximamente";

export const getComingSoonCopy = (): ComingSoonCopy => ({
  badge: "TALLER DE SANTA EN ACCIÓN",
  title: "¡Estamos trabajando en esta sección!",
  message:
    "Nuestros duendes artesanos están afinando los últimos detalles llenos de magia navideña. ¡Muy pronto estará disponible!",
  primaryCtaLabel: "Volver al Inicio",
  primaryCtaHref: "/",
  secondaryCtaLabel: "Adornar mi Árbol",
  secondaryCtaHref: "/arbol",
});

