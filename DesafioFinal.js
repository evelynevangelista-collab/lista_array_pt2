const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarUsuarios = usuarios.map((usuarios) => `${usuarios.nome} - ${usuarios.cargo}`);

console.log(listarUsuarios);

function buscarUsuariosPorId(IdUsuario) {
    return usuarios.find((u) => u.id === IdUsuario); 
};

console.log(buscarUsuariosPorId(2));

function listarUsuariosAtivos() {
  return usuarios.filter((usuario) => usuario.ativo);
};

console.log(listarUsuariosAtivos());

function existeUsuariosInativos() {
  return usuarios.some((usuario) =>usuario.inativo === false);
}

console.log(existeUsuariosInativos());

const todosUsuariosMaioresDeIdade = usuarios.every(usuarios => usuarios.idade >= 18);

console.log(todosUsuariosMaioresDeIdade);

const calcularMediaIdade = usuarios.reduce((acumulador, usuarios) => {
  return acumulador + usuarios.idade;
}, 0) /usuarios.length;

console.log(calcularMediaIdade);