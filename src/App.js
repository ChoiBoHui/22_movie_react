import React from 'react';
import List from './List';
import './common.scss';

const App = () => {
    ;
    return (
        <div>
            <List genre='Drama' limit={20} />
            <List genre='Action' limit={20} />
            <List genre='Horror' limit={20} />
        </div>
    );
}
    ;
export default App;