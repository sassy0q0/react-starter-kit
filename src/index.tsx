import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    <App
        onClick={() => alert('test')} // ← onClickがないとエラー
        // onChange={() => {}} // ← 未定義の属性はエラー
    />,
    document.getElementById('app'),
);