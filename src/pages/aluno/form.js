import React, { Component } from "react";
import { TextInput, Button } from "react-materialize";

class AlunoForm extends Component {
  constructor() {
    super();

    this.state = {
      update: false,
      data: {
        id: 0,
        nome: "",
        curso: ""
      }
    };
  }

  componentWillMount() {
    const { match } = this.props;
    let edit = false;
    let id = 0;

    if (!isNaN(match.params.id)) {
      edit = true;
      id = match.params.id;
    }

    this.setState({
      update: edit,
      isLoading: false,
      data: this.getData(id)
    });
  }

  componentDidMount() {
    const { update, data } = this.state;
    if (update) {
      this.getById(data.id);
    }
  }

  getData(id, nome, curso) {
    id = id === undefined ? 0 : id;
    nome = nome === undefined ? "" : nome;
    curso = curso === undefined ? "" : curso;

    return {
      id: id,
      nome: nome,
      curso: curso
    };
  }

  getById(id) {
    this.setState({ isLoading: true });
    //Request para API

    const data = this.getData(
      id,
      "Caio Sanchez",
      "Desenvolvimento de Sistemas"
    );
    this.setState({
      data: data,
      isLoading: false
    });
  }

  renderTitle() {
    const { update } = this.state;

    return update ? "Editar" : "Cadastar";
  }

  renderForm() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return (
        <div>
          <span>Carregando...</span>
        </div>
      );
    }

    return (
      <div>
        <form>
          <TextInput id="nome" label="Nome:" defaultValue={data.nome} />
          <TextInput id="curso" label="Curso:" defaultValue={data.curso} />
          <Button id="btnSalvar">Salvar</Button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.renderTitle()}</h1>
        {this.renderForm()}
      </div>
    );
  }
}

export default AlunoForm;
