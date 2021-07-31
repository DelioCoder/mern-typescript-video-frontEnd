import React, { FormEvent, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createVideo, getData, updateVideo } from '../../api';
import { useForm } from '../../hooks/useForm';
import { Video, Params } from '../../interfaces/reqRes';

//NOTIFY
import { toast } from 'react-toastify';

export const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();

    const { title, url, description, onChange, setState } = useForm({
        title: '',
        url: '',
        description: ''
    });

    const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!params.id) {
            const video: Video = {
                title,
                url,
                description
            }
            await createVideo(video);
            toast.success('New video added');
        } else {
            const video: Video = {
                title,
                url,
                description
            }
            await updateVideo(params.id, video);
        }

        history.push('/');
        setState({title: '', url: '', description: ''});
    };

    useEffect(() => {

        const getVideo = async(id: string) => {
            const rest = await getData(id);
            rest && setState({title: rest.title, url: rest.url, description: rest.description});
        }
        
        if(params.id) {
            getVideo(params.id);
        }

    }, [params.id, setState]);

    return (
        <div className="col-md-12 mt-4">
        
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3> New Video </h3>
                            <form onSubmit={onSubmit}>
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
                                    {
                                        params.id ? (<button className="btn btn-info">Update Video</button>) : (<button className="btn btn-primary">Create</button>)
                                    }
                                </div>
                            </form>
                            {/* <code>
                                <pre>
                                    {
                                        JSON.stringify(formulario, null, 2)
                                    }
                                </pre>
                            </code> */}
                        </div>
                    </div>
                </div>
      
        </div>
    )
}
