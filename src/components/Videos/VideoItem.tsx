import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';
import { deleteVideo } from '../../api';
import { Video } from '../../interfaces/reqRes';

interface Props {
    video: Video;
    loadVideos: () => void;
}

export const VideoItem = ({video, loadVideos}: Props) => {

    const history = useHistory();

    const handleDelete = async(id: string) =>{

        await deleteVideo(id);
        loadVideos();

    }

    return (
        <div className="col">
            <div className="card bg-light" style={{cursor: 'pointer'}} >
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h6 className="text-center" onClick={() => history.push(`/update/${video._id}`)} >{video.title}</h6>
                        <span className="text-danger" onClick={() => video._id && handleDelete(video._id)} >X</span>
                    </div>
                </div>
                <div className="card-body">
                    
                    <p className="fs-6">{video.description}</p>
                    <div className="ratio ratio-16x9">
                        <ReactPlayer width='100%' height='100%' url={video.url} />
                    </div>
                </div>
            </div>
        </div>
    )
}
