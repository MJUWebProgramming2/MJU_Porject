import styled from 'styled-components';

const MyRecommendWrap = styled.div`

    .board {margin: 30px auto 0; padding: 30px; max-width: 1200px; border: 1px solid ${props => props.theme.color.black}; border-radius: 5px;}
    .board-title {padding-left: 10px; border-left: 3px solid ${props => props.theme.color.black};}
    .board-group {margin: 30px 0 0; padding: 0; }
    .board-item {overflow: hidden; padding: 20px 0;border-top: 1px solid ${props => props.theme.color.lightgray};}
    .board-item__header {float: left; margin-right: 10px;}
    .board-item__main {float: left;}
    .board-item__link {text-decoration: none; color: ${props => props.theme.color.black}}
    .board-item__footer {float: right;}
`;

function MyRecommend(){
    return (
        <MyRecommendWrap>
            <div className="board">
                <h2 className="board-title">내가 추천한 글</h2>
                <ul className="board-group">
                    <li className="board-item">
                        <div className="board-item__header">num</div>
                        <div className="board-item__main">
                            <a className="board-item__link" href="">subject</a>
                        </div>
                        <div className="board-item__footer">
                            <span className="board-item__unit">작성자</span>
                            <span className="board-item__unit">조회수</span>
                            <span className="board-item__unit">추천수</span>
                        </div>
                    </li>
                    <li className="board-item">
                        <div className="board-item__header">num</div>
                        <div className="board-item__main">
                            <a className="board-item__link" href="">subject</a>
                        </div>
                        <div className="board-item__footer">
                            <span className="board-item__unit">작성자</span>
                            <span className="board-item__unit">조회수</span>
                            <span className="board-item__unit">추천수</span>
                        </div>
                    </li>
                    <li className="board-item">
                        <div className="board-item__header">num</div>
                        <div className="board-item__main">
                            <a className="board-item__link" href="">subject</a>
                        </div>
                        <div className="board-item__footer">
                            <span className="board-item__unit">작성자</span>
                            <span className="board-item__unit">조회수</span>
                            <span className="board-item__unit">추천수</span>
                        </div>
                    </li>
                </ul>
            </div>
        </MyRecommendWrap>
    );
}

export default MyRecommend;