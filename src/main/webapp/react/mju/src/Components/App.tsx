import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage/MyPage";
import Nav from "./Nav";
import News from "../Routes/News";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Withdrawal from "../Routes/MyPage/Withdrawal";
import Email from "../Routes/MyPage/Email";
import Password from "../Routes/MyPage/Password";
import MyArticle from "../Routes/MyPage/MyArticle";
import MyRecommend from "../Routes/MyPage/MyRecommend";
import WriteArticleButton from "./common/WriteArticleButton";
import WriteArticle from "../Routes/WriteArticle";


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <WriteArticleButton />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/mypage" exact component={MyPage} />
        <Route path="/article/write" exact component={WriteArticle}/>
        <Route path="/mypage/email" exact component={Email} />
        <Route path="/mypage/password" exact component={Password} />
        <Route path="/mypage/withdrawal" exact component={Withdrawal} />
        <Route path="/mypage/myarticle" exact component={MyArticle} />
        <Route path="/mypage/myrecommend" exact component={MyRecommend} />
        <Route path="/news" exact component={News}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
