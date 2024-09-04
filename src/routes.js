import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";

const router = Router();

router.get("/categorias", controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);

router.get("/empresas/destaques", controllerEmpresa.Destaques);
router.get("/pedidos", controllerPedido.Listar);
router.get("/pedidos/:id_pedido", controllerPedido.ListarId);

router.get("/usuarios/favoritos", controllerUsuario.Favoritos);
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);

export default router;
