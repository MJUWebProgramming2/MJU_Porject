import {getItemsData, itemsApi} from "../../lib/getItemsData";
import {Component, useEffect, useState} from "react";
import styled from "styled-components";
import ArticleDetailPresenter from "./ArticleDetailPresenter";

const Wrap = styled.div`
display: flex;
justify-content: center;
`;

class ArticleDetailContainer extends Component<any, any> {

    constructor(props:any) {
        super(props);
        const {
            location: {pathname},
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
        };
    }

    async componentDidMount(){
        const {
            match: {
                params: {id},
            },
            history: {push},
        } = this.props;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            return push("/");
        }

        let result = null;
        try{
            ({data: result} = await itemsApi.itemDetail(parsedId));
        }catch {
            this.setState({error: "Can't find results."});
        }finally {
            this.setState({loading: false, result});
        }
    }
    render() {
        const { result, error, loading} = this.state;
        return ( <Wrap><ArticleDetailPresenter result={result} error={error} loading={loading}/></Wrap>);
    }
}

export default  ArticleDetailContainer;