import React, { Component } from 'react';

class History extends Component {
  render() { 
    return (
      <div>
        <img src='https://vinidipaula92.github.io/lindao.JPG' alt="Vinicius de Paula - Foto principal" width="300px"/>
        <h1>Vinicius de Paula Martins dos Anjos</h1>
        <span><em>Nascido no dia 05 de março de 1992, morador do grande Brasil e estou localizado no estado de São Paulo, Capital.</em></span>
        <div>
          <a href='https://vinidipaula92.github.io/IMG_6912.jpg' alt='Familia'>Casado com uma linda esposa e com dois filhos maravilhosos!</a>
        </div>
        <div>
          <p>Estudando da Trybe</p>
        </div>
        <div>
          <span>Atualmente, estou em formação em DEV. Meu sonho sempre foi trabalhar na área de tecnologia, hoje posso dizer que está sendo um começo de um sonho. Estou me realizando nos estudos com a TRYBE, alta qualidade na matéria que estudamos, didática de aulas ótimas, treinamentos de softkills, entre tantas coisas que realizamos durante o dia-a-dia. Espero aprender cada vez mais e que no futuro próximo estar exercendo na área!</span>
        </div>
        <div>
          <span>Praticante de um futevôlei de boa qualidade.</span>
        </div>
        <div>
          <span>Lugares que pretendo conhecer:</span>
          <ul>
            <li>Vale do Silicio</li>
            <li>Madrid</li>
            <li>Ilhas Maldivas</li>
            <li>Cancún</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default History;