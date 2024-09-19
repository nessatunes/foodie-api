import serviceUsuario from "../services/service.usuario.js";

async function Favoritos(req, res) {
  try {
    const id_usuario = req.id_usuario; // pegar do token jwt
    const favoritos = await serviceUsuario.Favoritos(id_usuario);

    res.status(200).json(favoritos);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Login(req, res) {
  const { email, senha } = req.body;
  const usuario = await serviceUsuario.Login(email, senha);
  if (usuario.length == 0)
    res.status(401).json({ error: "Email ou senha inválida" });
  else res.status(200).json(usuario);
}

async function Inserir(req, res) {
  try {
    const {
      nome,
      email,
      senha,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
    } = req.body;
    const usuario = await serviceUsuario.Inserir(
      nome,
      email,
      senha,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      cep
    );

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error });
  }
}
async function Perfil(req, res) {
  try {
    const id_usuario = req.id_usuario; // pegar do token jwt
    const usuario = await serviceUsuario.Perfil(id_usuario);

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default { Favoritos, Login, Inserir, Perfil };
