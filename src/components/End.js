import './End.css'

const End = ({retry, score}) => {
  return (
    <div>
        <div className="endContainer">
        <div className='end'>
            <h1>Fim de jogo!</h1>
            <h3>Caro Jogador, sua pontuação total foi:</h3>
            <h2 className='score'>{score}</h2>
            {score <= 0 ? (
              <p>Não desanime, mantenha o foco e tente mais uma vez 😊</p>
            ) : (
              <p>🥳🥳🥳 Parabéns!!! você foi excelente</p>
            )}
            <p>Clique no botão abaixo para iniciar outro jogo</p>
            <button onClick={retry}>JOGAR NOVAMENTE</button>
        </div>
    </div>
        
    </div>
  )
}

export default End