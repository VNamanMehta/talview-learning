import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchMyPost, deletePost } from '../api/posts';
import AuthContext from '../contexts/AuthContext';

function UserPostPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    if (user) {
      const getMyPosts = async () => {
        try {
          const myPostsData = await fetchMyPost(user.name);
          setPosts(myPostsData);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        } finally {
          setIsLoading(false);
        }
      };
      getMyPosts();
    }
  }, [user]); 

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(postId);
        setPosts(currentPosts => currentPosts.filter(p => p.id !== postId));
      } catch (error) {
        console.error("Failed to delete post:", error);
        alert("There was an error deleting the post.");
      }
    }
  };

  if (isLoading) {
    return <div>Loading your posts...</div>;
  }

  return (
    <div className='pt-10'>
      <h2 className="text-3xl font-bold mb-6">My Posts</h2>
      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  <Link to={`/dashboard/my-post/${post.id}`} className="hover:text-indigo-600">{post.title}</Link>
                </h3>
              </div>
              <button 
                onClick={() => handleDelete(post.id)}
                className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't created any posts yet. <Link to="/dashboard/create" className="text-indigo-600 font-semibold">Write your first one!</Link></p>
      )}
    </div>
  );
}

export default UserPostPage;