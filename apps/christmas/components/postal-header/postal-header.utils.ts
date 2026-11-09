export interface PostalHeaderCopy {
  titleMain: string;
  titleAccent: string;
  uploadLabel: string;
  resetLabel: string;
  shareLabel: string;
  downloadLabel: string;
}

export const getPostalHeaderCopy = (): PostalHeaderCopy => ({
  titleMain: "Crea tu Porta Retrato",
  titleAccent: "Navideño",
  uploadLabel: "Cargar Foto",
  resetLabel: "Reiniciar",
  shareLabel: "Compartir",
  downloadLabel: "Descargar Postal",
});

