import { useEffect, useState } from "react"
import { fetchAllPosts } from "../api/posts"
import { Link } from "react-router-dom"

function HomePage() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            try {
                const allPosts = await fetchAllPosts()
                setPosts(allPosts)
            } catch (error) {
                console.error("Failed to fetch posts: ", error)
            } finally {
                setIsLoading(false)
            }
        }
        getPosts()
    },[])
    
    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FDF6E3]">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A3C34] mx-auto mb-4"></div>
                            <p className="text-[#1A3C34] font-serif text-lg">Loading Posts...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen bg-[#FDF6E3]">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <h1 className="text-4xl font-serif font-bold mb-8 text-[#1A3C34]">Latest Posts</h1>
                <div className="space-y-6">
                    {posts.map(post => (
                        <article 
                            key={post.id} 
                            className="bg-[#FFF8E7] p-6 border border-[#E6D2A2] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-serif font-semibold text-[#1A3C34] hover:text-[#B8860B] transition-colors duration-300 mb-2">
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </h2>
                            <p className="text-[#666] font-serif">by {post.author}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage