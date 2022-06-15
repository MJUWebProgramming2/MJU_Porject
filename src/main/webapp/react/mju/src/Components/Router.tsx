import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage/MyPage";
import Nav from "../Components/common/Nav";
import News from "../Routes/News/News";
import Login from "../Routes/fLogin/Login";
import Register from "../Routes/Register/Register";
import Withdrawal from "../Routes/MyPage/Withdrawal";
import Email from "../Routes/MyPage/Email";
import Password from "../Routes/MyPage/Password";
import MyArticle from "../Routes/MyPage/MyArticle";
import MyRecommend from "../Routes/MyPage/MyRecommend";
import WriteArticleButton from "./common/WriteArticleButton";
import WriteArticle from "../Routes/Article/WriteArticle";
import ArticleDetailContainer from "../Routes/ArticleDetail/ArticleDetailContainer";
import ArticleSortListContainer from "../Routes/ArticleSortList/ArticleSortListContainer";
import PrivateRoute from "../Routes/PrivateRoute";

// @ts-ignore
export default (props) => (
        <Router>
            <Header />
            <Nav />
            {/*<WriteArticleButton />*/}
            <Switch>
                {/*<PrivateRoute exact path="/" component={Main} getRoomList={props.getRoomList}/>*/}
                <Route component={Main} path="/" exact />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/article/write" exact component={WriteArticle}/>
                <Route path="/article/:id" exact component={ArticleSortListContainer}/>
                <Route path="/article/detail/:id" exact component={ArticleDetailContainer}/>

                <Route path="/mypage" exact component={MyPage} />
                <Route path="/mypage/email" exact component={Email} />
                <Route path="/mypage/password" exact component={Password} />
                <Route path="/mypage/withdrawal" exact component={Withdrawal} />
                <Route path="/mypage/myarticle" exact component={MyArticle} />
                <Route path="/mypage/myrecommend" exact component={MyRecommend} />

                <Route path="/news" exact component={News}/>
                <Redirect from="*" to="/" />
            </Switch>
            <Footer />
        </Router>
    );
