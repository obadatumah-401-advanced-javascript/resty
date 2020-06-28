import React from "react";
import './style.scss';

const Header = () => {
    return (
        <header>
            <h1> RESTy </h1>
        </header>
    );
};

const Footer = () => <footer>&copy;2020 CodeFellows</footer>;
class Main extends React.Component {
    constructor(cop) {
        super(cop);
        this.state = {
            url: '',
            method: ''
        }
    }

    submitHandler = e => {
        e.preventDefault();
        let words = this.state;
        // console.log(this.state);
        this.setState({ words })

    }
    urlHandler = e => {
        let url = e.target.value;
        this.setState({ url });
    }
    methodsHandler = e => {
        let method = e.target.value;
        this.setState({ method });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        URL:
			    <input type='text' name='url' onChange={this.urlHandler} />
                        <input type="submit" value='GO!' />
                    </label><br></br>

                    <input type="radio" name='method' value='GET' onChange={this.methodsHandler} />
                    <label >GET</label>
                    <input type="radio" name='method' value='PUT' onChange={this.methodsHandler} />
                    <label >PUT</label>
                    <input type="radio" name='method' value='POST' onChange={this.methodsHandler} />
                    <label >POST</label>
                    <input type="radio" name='method' value='DELETE' onChange={this.methodsHandler} />
                    <label >DELETE</label>

                </form>
                <section><h3><span>{this.state.method}</span>    {this.state.url}</h3></section>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;