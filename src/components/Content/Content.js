import React, {useState, useEffect} from 'react';

import "./Content.css";

const Content = () => {

    const initialNotes = [
        {
            title: "Come alive",
            body: "Come alive, when you come alive!...heheheh, come here"
        },
        {
            title: "Oceans - Hillsong",
            body: "You called me out upon the waters, the great unknown..."
        },
        {
            title: "Reckless Love",
            body: "Before I spoke a word you were singing over me, you have been so so kind to me..."
        },
    ];

    const initialMenu = initialNotes.map(content => content.title);

    const [notes, setNotes] = useState(initialNotes);
    const [menu, setMenu] = useState(initialMenu);
    const [note, setNote] = useState({
        title: '',
        body: ''
    });

    const displayContent = (event) => {
        const dataArr = notes.filter(content => content.title === event.target.textContent);
        const dataContent = dataArr[0];
        setNote(dataContent);
    }

    const handleChange = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value, 
        });
        console.log(note);
    }

    return (
        <div className="container">
            <div className="row h-100 row-custom">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-white text-success">
                            Notes
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                {
                                    menu.map((menuItem, i) => (
                                        <li 
                                            key={i + 1}
                                            className="list-group-item"
                                            onClick={displayContent}
                                        >
                                            {menuItem}
                                        </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <button name="delete" className="btn btn-sm btn-outline-success mb-1 float-right">Delete</button>
                            <button name="save" className="btn btn-sm btn-outline-success mb-1 mr-2 float-right">Save</button>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control form-control-sm"
                                        placeholder="Title"
                                        onChange={handleChange}
                                        value={note.title}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="body"
                                        className="form-control"
                                        rows="15"
                                        onChange={handleChange}
                                        value={note.body}
                                    />
                                </div>
                                <h4>{note.title}</h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-round">
                <h2>+</h2>
            </div>
        </div>
    )
}

export default Content;