// src/components/InfoProfile.jsx

//Testando props como forma de comunicação entre componenes !
function InfoProfile({ dados }) {
  return (
    <div className="perfilTextoContainer">
      <h1 className="nomePerfil">{dados.nome}</h1>
      <dl>
        <dt>Nascimento:</dt>
        <dd>{dados.nascimento}</dd>
        
        <dt>Nascido em:</dt>
        <dd>{dados.localNascimento}</dd>
        
        <dt>Profissão:</dt>
        <dd>{dados.profissao}</dd>
        
        <dt>Origem:</dt>
        <dd>{dados.origem}</dd>
      </dl>
      <p className="perfilDescricao">{dados.descricao}</p>
    </div>
  );
}

export default InfoProfile;