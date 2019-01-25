import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import {ArticleListPage} from "./routes/ArticleListPage";
import {ArticlePage} from "./routes/ArticlePage";
import {NewArticlePage} from "./routes/NewArticlePage";


export class App extends Component {
    render() {
        return (
            <div className="page">
                <Switch>
                    <Redirect from="/" exact to="/articles"/>
                    <Route path="/articles" component={ArticleListPage}/>
                    <Route path="/articles/article:id" component={ArticlePage}/>
                    <Route path="/articles/new-article" component={NewArticlePage}/>
                </Switch>
            </div>
        );
    }
}
