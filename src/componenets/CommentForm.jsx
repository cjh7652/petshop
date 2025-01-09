import React,{useState, useEffect} from 'react';
import { API_URL } from '../config/constants';

const CommentForm = ({setComments, user_id, post_id}) => {
   /* const {post_id} = useParams(); */
   const [content, setContent] = useState('');
   const [postId, setPostId] = useState('');

  const hanleSubmit = (e)=>{
    e.preventDefault();
  
    if(!postId){
      alert("게시글 id를 입력해주세요!");
      return;
    }

    console.log("요청URL===", `${API_URL}/comment`);
    console.log("요청내용===", { post_id: postId, content });

    fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post_id : postId,
        content,
      })
    })
    .then((response)=>{
      if(!response.ok){ // 응답 200 이상이면 정상, 400 이상이면 에러
        console.error("응답상태", response.status);
        throw new Error("댓글 작성 실패");
      }
      return response.json();
    })
    .then((data)=>{
      console.log("작성성공", data);
      setComments((prevComments) => [...prevComments, data.comment]);
    })
    .catch((err)=>{ console.log(err); })
    if(content.trim() === ""){
      alert("댓글을 입력해주세요!");
      return;
    }
  }
  return (
    <form  onSubmit={hanleSubmit}>
        <input className='commentInput'  type="text" placeholder='게시글 Id를 입력해주세요' value={postId} onChange={(e) => setPostId(e.target.value)} />
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        className='commentText' placeholder='댓글을 작성해주세요'></textarea>
        <button className='commentbtn1' type="submit">댓글 작성</button>
        <button className='commentInput2' type="button" > 취소</button>
      </form>
  );
};

export default CommentForm;