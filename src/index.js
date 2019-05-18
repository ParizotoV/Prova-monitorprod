import React from "react";
import ReactDOM from "react-dom";

// Array que salvara cada objeto
const circulos = [];

// Criando o circulo
class Circulo extends React.Component {
  // Renderiza
  render() {
    // Recebe as propriedades da classe Pai - Click
    const { x, y } = this.props.mouse;

    console.log(x, y);

    // CSS
    const estiloCirculo = {
      width: "75px",
      height: "75px",
      borderRadius: 75 / 2,
      position: "absolute",
      left: x - 30,
      top: y - 30,
      backgroundColor: "#189ad3"
    };

    // Retorna o circulo dentro da div
    return <div style={estiloCirculo} />;
  }
}

class Click extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    // Estados das variaveis
    this.state = { x: 0, y: 0, contador: 0 };
  }

  //Evento do click
  onDown = event => {
    // Adicionando objeto dentro da Array
    circulos.push(<Circulo key={this.state.contador} mouse={this.state} />);
    // Listando cada objeto no console
    console.log({ circulos });
    // Setando KEY com o tamanho da lista - (Iniciada em 0)
    this.setState({ contador: circulos.length });
  };

  // Extraindo informacoes da pagina ( X, Y )
  extracaoXY(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  //Renderização
  render() {
    // Mapeando cada item
    var listaCirculos = circulos.map(circulo => <div>{circulo}</div>);

    //retorno na tela
    return (
      <div
        onPointerDown={this.onDown}
        onPointerMove={this.extracaoXY.bind(this)}
        style={{ width: "100%", height: 800 }}
      >
        {listaCirculos}
      </div>
    );
  }
}

ReactDOM.render(<Click />, document.getElementById("root"));
