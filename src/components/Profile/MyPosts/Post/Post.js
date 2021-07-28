import { Typography } from '@material-ui/core';
import React from 'react';

const Post = (props) => (
    <div>
        <Typography>{props.message}</Typography>
    </div>
)
export default Post;