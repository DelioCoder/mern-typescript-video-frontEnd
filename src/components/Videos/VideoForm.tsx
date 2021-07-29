import React from 'react';
import { useForm } from '../../hooks/useForm';

export const VideoForm = () => {

    const { formulario, title, description, url,onChange } = useForm({
        title: '',
        description: '',
        url: ''
    });

    return (
        <div className="col-md-12 mt-4">
        
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3> New Video </h3>
                            <form>
                                <div className="mb-3 mt-4">
                                    <input 
                                        type="text"
                                        value={title}
                                        onChange={({ target }) => onChange(target.value, 'title')}
                                        placeholder="Write a title for this video" 
                                        className="form-control"
                                        autoFocus
                                    />
                                </div>

                                <div className="mb-3">
                                    <input 
                                        type="text"
                                        value={url}
                                        onChange={({ target }) => onChange(target.value, 'url')}
                                        placeholder="https://somesite.com" 
                                        className="form-control"    
                                    />
                                </div>

                                <div className="mb-3">
                                    <textarea 
                                        value={description}
                                        onChange={({ target }) => onChange(target.value, 'description')}
                                        rows={3} 
                                        className="form-control" 
                                        placeholder="Write a description" 
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <button className="btn btn-primary">Create Video</button>
                                </div>
                            </form>
                            <code>
                                <pre>
                                    {
                                        JSON.stringify(formulario, null, 2)
                                    }
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
      
        </div>
    )
}
