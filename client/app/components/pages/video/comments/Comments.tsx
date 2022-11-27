import React, { FC } from 'react'

import styles from './Comments.module.scss'

import { useAuth } from '../../../../hooks/useAuth'
import AddCommentForm from './AddCommentForm'
import { useQuery } from 'react-query'
import { CommentService } from '../../../../services/comment/commentService'
import CommentItem from './CommentItem'
import Loader from '../../../ui/Loader'

const Comments: FC<{ videoId: string }> = ({ videoId }) => {
  const { user } = useAuth()

  const {
    refetch,
    data: comments,
    isLoading,
  } = useQuery(
    ['get comments', videoId],
    () => CommentService.getByVideoId(videoId),
    {
      select: (data) => data.data,
    }
  )

  return (
    <>
      <div>
        {user && <AddCommentForm videoId={videoId} refetch={refetch} />}
      </div>
      {isLoading ? (
        <Loader count={4} />
      ) : comments?.length ? (
        <>
          <div className={styles.grid}>
            {comments.map((comment) => (
              <CommentItem key={comment._id} comment={comment} />
            ))}
          </div>
        </>
      ) : (
        <p>There are no comments</p>
      )}
      <h2>{}</h2>
    </>
  )
}

export default Comments
