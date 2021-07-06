import {Component, Fragment} from "react";

class Test extends Component{
    name = "Tilek"
    submit = ()=>{
        this.setState({a: this.name = "World"})
        console.log(this.name)
    }
    render() {
        return (
            <Fragment>
                <p>Hello {this.name}</p>
                <button onClick={this.submit}>submit</button>
            </Fragment>
        );
    }
}

export default Test