import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PageAlunoList from "../pages/aluno/list";
import PageAlunoForm from "../pages/aluno/form";
import PageHome from "../pages/home";
import PageNotFound from "../pages/notFound";

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/aluno/list" component={PageAlunoList} />
          <Route path="aluno/new" component={PageAlunoForm} />
          <Route path="/aluno/:id" component={PageAlunoForm} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
