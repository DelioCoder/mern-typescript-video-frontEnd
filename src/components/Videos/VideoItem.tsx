import React from 'react';
import { Video } from '../../interfaces/reqRes';

interface Props {
    video: Video
}

export const VideoItem = ({video}: Props) => {
    return (
        <div>
            <h1>{video.title}</h1>
        </div>
    )
}
