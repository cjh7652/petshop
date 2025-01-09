import React,{useState, useEffect} from 'react';
import './CommentList.scss';
/* import {createComment, getComments} from '../api/api'; */
import CommentForm from './CommentForm';
import { API_URL } from '../config/constants';
import axios from 'axios';


const CommentList = ({post_id, user_id, comment}) => {
  const [comments, setComments]=useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding]=useState(false)

 useEffect(() => {
    axios.get(`${API_URL}/comments`).then((result)=>{
      const comments=result.data.comments;
      setComments(comments)
     setLoading(false)
    }).catch((error)=>{
      console.log(error)
    })
  }, []);
  

/*   const handleAddComment = async (content) =>{
      try{
        console.log("sending comment datat:", {post_id, content});
        const newComment = await createComment(content.post_id, content.content);
        setComments((prevComments) => [newComment.comment, ...prevComments]);
        setIsAdding(false);
      }catch(error){
        console.error('댓글 추가 오류', error);
        alert('댓글 추가에 실패했습니다')
      }
  } */

  if(loading){
    return <p>댓글을 불러오는 중입니다....</p>
  }
  return (
    <div className='commentList'>
      <h3>댓글</h3>
      {isAdding ? ( <CommentForm 
      setComments={setComments} 
      post_id={post_id}
      user_id={user_id}
    /*   onSubmit={handleAddComment} */
      onCancel={() => setIsAdding(false)}
       />): (
        <button onClick={() => setIsAdding(true)}>댓글 작성</button>
      )}
     
      
      <hr />
      <div className="comment-list">
          {
            comments.length ===0 ? (
              <p>댓글을 작성해 보세요</p>
            ) : (
              comments.map((comment) => (
                <div className="itemList" key={comment.id}>
                  <p>{comment.content}</p>
                  <p>{comment.createdAt}</p>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              ))
            )
          }
      </div>
    </div>
  );
};

export default CommentList;