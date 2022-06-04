import * as Yup from "yup";

export const validateGames = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "muy corto")
    .required("Campo Obligatorio"),
  descripcion: Yup.string()
    .min(3, "muy corto")
    .max(30, "muy largo")
    .required("Campo Obligatorio"),
  file1: Yup.string().required("Campo Obligatorio"),
});
