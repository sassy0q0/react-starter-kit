import * as React from 'react';

interface OuterProps {
    onClick(): void;
}
interface AppState {
    sec: number;
    // message: string;
}

class App extends React.Component<OuterProps, AppState> {
    state: AppState = {
        sec: 0,
        // message:'',
    };

    // thisを縛るためにはTypeScriptだとBindは使わず
    // アロー関数を定義する
    incrementeSec = () => {
        this.setState({
            sec: this.state.sec + 1, // ← ここで補完が効く!あと型が違うとエラーになる！
            // message: 'unknown fields...', // ← AppStateに定義されていないのでエラー！
        });
    };
    componentDidMount() {
        setInterval(this.incrementeSec, 1000);
    }

    render() {
        // const msg = this.state.message;
        const sec = this.state.sec; // ← ここで補完が効く！！
        // console.log(this.state.hoge); // ← AppStateに定義されていないのでエラー
        // console.log(this.props.fuga); // ← OuterPropsに定義されていないのでエラー
        return (
            <div>
                <span>いま...{sec}秒経過しました</span><br />
                <button onClick={this.props.onClick}>ボタンです</button>
            </div>
        );
    }
}
export default App;

// StatelessFunctionComponent(SFC)の場合はこんな感じ
const App2: React.SFC<OuterProps> = props => (
    <button onClick={props.onClick}>ボタン</button>
);
// export default App2;