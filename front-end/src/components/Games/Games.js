import React, { Component } from 'react';
import Game from '../Game/Game';

const DUMMY_GAMES = [
    {
        id: 1,
        gameName: 'Peão',
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Snap_Top_and_Trompo.jpg/375px-Snap_Top_and_Trompo.jpg',
        gameYear: '4000 a.C',
        description:
            'Puxar uma corda enrolada a um objecto afunilado, geralmente de madeira ou plástico e com uma ponta de ferro, colocando-o em rotação no solo, mantendo-se erguido. ',
    },
    {
        id: 2,
        gameName: 'Bola de Gude',
        imagePath: 'https://anosincriveisblog.files.wordpress.com/2014/05/leitosa.jpg?w=584',
        gameYear: '200',
        description:
            'Embora ninguém saiba a data exata da criação do jogo, há registros de brincadeiras com nozes, sementes de frutas e pedras arredondadas desde a antiguidade.',
    },
    {
        id: 3,
        gameName: 'Barra bandeira',
        imagePath: 'https://zinecultural.s3.amazonaws.com/site/uploads/mlib-uploads/full/fotojet-24-5f44356a3dfc1.jpg',
        gameYear: '1947',
        description:
            'Captura à bandeira (também conhecido como Rouba bandeira ou Pique Bandeira)[1] é um jogo tradicional, geralmente exercido por crianças ou às vezes por adultos.',
    },
    {
        id: 4,
        gameName: 'Pega-pega',
        imagePath: 'https://legado.educacaoeparticipacao.org.br/wp-content/uploads/nunca-de-tres.jpg',
        gameYear: '1830',
        description:
            'Uma criança será o pegador, e as outras, os fugitivos. Quem a criança pegar, será o pegador da vez.',
    },
    {
        id: 5,
        gameName: 'Pique-esconde',
        imagePath: 'https://brstatic.guiainfantil.com/pictures/materias/20410-esconde-esconde-brincadeiras-para-criancas.jpg',
        gameYear: '1830',
        description:
            'O pegador conta até um certo número com os olhos fechados e as outras pessoas se escondem.',
    },
    {
        id: 6,
        gameName: 'Amarelinha',
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Amarelinhacefet.jpg/330px-Amarelinhacefet.jpg',
        gameYear: '1600',
        description:
            'O jogador pula com os dois pés, um em cada número, nos retângulos 4/5 e 7/8. ',
    },
];

class Games extends Component{

    render() {
        return (
            <ul>
                {
                    DUMMY_GAMES.map(gameKey => <Game key={gameKey.id} {...gameKey}/>)
                }
            </ul>
        );
    }
}

export default Games;
