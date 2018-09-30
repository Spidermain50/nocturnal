// comment
// Demonstration of a constant

// string
const message = "This is a string demonstration";

// string with escape character
const multiLine = 'This is a \n multiline string';

// constants
const check = false;
const num = 46;
const undef = undefined;
const n = null;

// entity.name
export class Entity extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNames = () => this.props.names.map(
        (name, i) => (
            <li key={i} className="item">{name}</li>
        )
    )

    render = () => (
        <div>
            {this.props.names && this.props.names.length > 0 ?
                <ul>
                    {this.renderNames}
                </ul> :
                <h3>No Names Available</h3>
            }
        </div>
    )
}

ReactDOM.render(Entity, document.getElementById('root'));