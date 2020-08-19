import React from 'react';
import Menu from './Menu';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: {},
            menu: [],
            data: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }

    // componentDidMount() {
    //     if(localStorage.getItem('noteApp') !== null) {
    //         this.setState({
    //             notes: JSON.parse(localStorage.getItem("noteApp"))
    //         });
    //     }
    // }

    getMenu(){
        for(let i = 0; i < Object.keys(this.state.notes).length; i++) {
            console.log(Object.keys(this.state.notes)[i]);
            this.state.menu.push(Object.keys(this.state.notes)[i]);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }));
        console.log(this.state.data)
    }

    handleSave() {
        if(this.state.data.title) {
            if(localStorage.getItem('noteApp') === null) {
                this.setState({
                    notes: {
                        [this.state.data.title]: this.state.data
                    }
                });
                // this.notes = {};
                // this.notes[this.state.title] = this.state;

                localStorage.setItem('noteApp', JSON.stringify(this.state.notes));
            } else {
                this.setState({
                    notes: {
                        ...JSON.parse(localStorage.getItem("noteApp")),
                        [this.state.data.title]: this.state.data
                    }
                });
                // this.notes = JSON.parse(localStorage.getItem("noteApp"));
                // this.notes[this.state.title] = this.state;

                localStorage.setItem('noteApp', JSON.stringify(this.state.notes));
            }
        }
        else {
            console.log('No title');
        }
    }

    handleDel() {

    }

    render(){
        // console.log(this.state.menu);
        // console.log(this.state.notes);
        console.log(this.state);

        const buttonClass = {
            backgroundColor: "green",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            cursor: "pointer"
        }
    
        const rowClass = {
            marginTop: "4rem"
        }

        // this.getMenu();
        let menus = [];
        for(let i = 0; i < this.state.menu.length; i++) {
            menus.push(<Menu key={this.state.menu[i]} menu={this.state.menu[i]} />);
        }

        return (
            <div className="container">
                <div className="row h-100" style={rowClass}>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-white text-success">
                                Notes
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {menus}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <button name="save" className="btn btn-sm btn-outline-success mb-1 float-right" onClick={this.handleDel}>Delete</button>
                                <button name="delete" className="btn btn-sm btn-outline-success mb-1 mr-2 float-right" onClick={this.handleSave}>Save</button>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control form-control-sm"
                                            placeholder="Title"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="note"
                                            className="form-control"
                                            rows="15"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <h4>{this.state.data.title}</h4>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={buttonClass}>
                    <h2>+</h2>
                </div>
            </div>
        )
    }
}

export default Content;