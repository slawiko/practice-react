import ReactDOM from 'react-dom';
import { DropdownComponent } from 'practice-react';

function Index(): JSX.Element {
    return <p>
        <DropdownComponent/>
    </p>;
}

const container = document.getElementById('container');
ReactDOM.render(<Index/>, container);
