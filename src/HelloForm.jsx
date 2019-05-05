import React from 'react';
import { Text, Color } from 'scenegraph';

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }; 

        this.onInputChange = e => {
            this.setState({ name: e.target.value });
        };

        this.onDoneClick = e => {
            const selection = this.props.selection;
            const root = this.props.root;

            const newText = new Text();
            newText.text = this.state.name;
            newText.styleRanges = [
                {
                    length: newText.text.length,
                    fill: new Color('#00F'),
                    fontSize: 50,
                    fontFamily: 'Roboto',
                    fontStyle: 'Regular',
                    charSpacing: 15,
                    underline: false,
                }
            ];

            selection.insertionParent.addChild(newText);
            newText.moveInParentCoordinates(100, 100);
            props.dialog.close();
        };
    }

    render() {
        return (
            <form style={{ width: 300 }} onSubmit={this.onDoneClick}>
                <h1>React with JSX Components</h1>
                <label>
                    <span>What is your name?</span>
                    <input onChange={this.onInputChange} />
                </label>
                <p>{`Hello ${this.state.name}`}</p>
                <footer>
                    <button type="submit" uxp-variant="cta">
                        Done
                    </button>
                </footer>
            </form>
        );
    }
}

export default HelloForm;