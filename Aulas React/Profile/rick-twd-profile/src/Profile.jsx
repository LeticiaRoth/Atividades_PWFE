// src/Profile.jsx
import rickGrimesFoto from './assets/RickGrimes.jpg';
import rickGrimesHoverFoto from './assets/RickGrimes_quadrinhos.jpg'; 
import ImageProfile from './components/ImageProfile';
import InfoProfile from './components/InfoProfile';

function Profile() {
    //Dados do Rick Grimes
  const dadosRickGrimes = {
    nome: 'Rick Grimes',
    nascimento: '14 de Setembro de 1973', 
    localNascimento: 'Cynthiana, Kentucky',
    profissao: 'Vice-xerife do Condado de King (pré-apocalipse), Líder de grupo (pós-apocalipse)',
    origem: 'King County, Georgia',
    descricao: 'Um vice-xerife que acorda de um coma em um mundo pós-apocalíptico dominado por "caminhantes" (zumbis). Ele se torna o líder de um grupo de sobreviventes, protegendo sua família e amigos e enfrentando dilemas morais constantes.',
    imagem: rickGrimesFoto,
    imagemHover: rickGrimesHoverFoto 
  };

  //Dando props como forma de comunicação entre componentes
  return (
    <article id="perfilCard">
      <div className="cardContent">
        <ImageProfile 
          imagem={dadosRickGrimes.imagem} 
          nome={'Rick Grimes foto, personagem de The Walking Dead, com cabelos até o ombro e barba branca por fazer um efeito hover, a imagem muda para Rick Grimes dos quadrinhos, com cabelo curto e sem barba.'} 
          imagemHover={dadosRickGrimes.imagemHover} 
        />
        <InfoProfile dados={dadosRickGrimes} />
      </div>
    </article>
  );
}

export default Profile;