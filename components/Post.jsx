import {React, useState} from 'react'
import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';


function Post({id,username,userImg,image,caption}) {

    const {data: session} = useSession();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    
    const sendComment = async (e) =>{
        e.preventDefault();
        
        const commentToSend = comment;
        setComment('');
                                //order
        await addDoc(collection(db,'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            timestamp: serverTimestamp(),
        })

    }

    return (
    <div className='bg-white my-7 border rounded-sm'>      
        
        {/* Header */}
        
        <div className='flex items-center p-5 '>
            <img src={userImg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' alt='pikachuProfile' />
            <p className='flex-1 font-bold'>{username}</p>
            <EllipsisHorizontalIcon className='h-5'/>
        </div>

        {/* img */}
        <img src={image} className='object-cover w-full' alt="" />

        {/* Buttons */}
        {session && (
            <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-4 '>
                  <HeartIcon className='btn' />
                  <ChatBubbleBottomCenterIcon className='btn' />
                  <PaperAirplaneIcon className='btn' />
            </div>

            <BookmarkIcon className='btn'/>
        </div>
        )}
        

        {/* caption */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>{username}</span>
            {caption}
        </p >

        {/* comments */}

            {/* input box */}

            {session && (

                <form className='flex items-center p-4'>
                    <FaceSmileIcon className='h-7' />
                    <input
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        type='text'
                        placeholder='Add a comment...'
                        className='border-none flex-1 focus:ring-0 outline-none'
                    />
                    <button type='submit' 
                    disable={!comment.trim()}
                    onClick={sendComment}
                    className='font-semibold text-blue-400'>Post</button>
                </form>

            )}


    </div>
  )
}

export default Post