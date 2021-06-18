import React, { useContext } from 'react'
import { Context } from './Context'

const Upload = (props) => {
    const { posts } = useContext(Context);

    const createPost = e => {
        e.preventDefault()

        // check for title
        if (e.target.title.value === '') alert('Please enter a title')

        

        alert(e.target.file.value)
    }

    return (
        <section className="upload-section">
            <h1>create post</h1>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={createPost}>
                            <div className="mb-3">
                                <input className="form-control" type="text" id="title" name="title" placeholder="enter the title..." />
                            </div>

                            <div className="mb-3">
                                <input className="form-control" type="file" id="form-file" name="file" />
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary mb-3">create post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upload