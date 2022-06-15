import {itemsApi} from "../../lib/getItemsData";
import {Component} from "react";
import ArticleSortListPresenter from "./ArticleSortListPresenter";

class ArticleSortListContainer extends Component<any, any>{
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
            ({data: result} = await itemsApi.allItem());
        }catch {
            this.setState({error: "Can't find results."});
        }finally {
            this.setState({loading: false, result});
        }
    }
    render() {
        const { result, error, loading} = this.state;
        return ( <><ArticleSortListPresenter result={result} error={error} loading={loading}/></>);
    }
}

export default ArticleSortListContainer;