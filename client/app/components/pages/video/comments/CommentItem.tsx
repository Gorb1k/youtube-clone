import React, {FC} from 'react';
import {IComment} from "../../../../types/comment.interface";
import ChannelInfoShort from "../../../ui/channel-info-short/ChannelInfoShort";

import styles from './Comments.module.scss'

const CommentItem:FC<{comment:IComment}> = ({comment}) => {
    return (
        <div className={styles.commentItem}>
            <ChannelInfoShort channel={comment.user}/>
            {<p>{comment.message}</p>}
        </div>
    );
};

export default CommentItem;