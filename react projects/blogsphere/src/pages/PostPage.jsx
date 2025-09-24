import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchPostById } from "../api/posts"

function PostPage() {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getPost = async () => {
            try {
                setIsLoading(true)
                const postData = await fetchPostById(postId)
                setPost(postData)
            } catch (error) {
                console.error("Failed to fetch post: ", error)
                setError("Failed to load post. Please try again.")
            } finally {
                setIsLoading(false)
            }
        }
        
        if (postId) {
            getPost()
        }
    }, [postId])
    
    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#FDF6E3]">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1A3C34] mx-auto mb-4"></div>
                            <p className="text-[#1A3C34] font-serif text-lg">Loading post...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-[#FDF6E3]">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="text-center py-12">
                        <div className="bg-[#FFF8E7] border border-[#E6D2A2] rounded-lg p-8 shadow-md">
                            <svg 
                                className="w-16 h-16 text-[#8B0000] mx-auto mb-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                            <h2 className="text-2xl font-serif font-bold text-[#1A3C34] mb-2">Post Not Found</h2>
                            <p className="text-[#666] font-serif mb-6">
                                {error || "The post you're looking for doesn't exist or has been removed."}
                            </p>
                            <Link 
                                to="/" 
                                className="inline-flex items-center px-6 py-3 bg-[#1A3C34] text-[#FFF8E7] font-serif rounded-md hover:bg-[#15312A] transition-colors duration-300"
                            >
                                <svg 
                                    className="w-4 h-4 mr-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen bg-[#FDF6E3]">
            <div className="max-w-4xl mx-auto px-6 py-8">
                <nav className="mb-8">
                    <div className="flex items-center space-x-2 text-sm font-serif text-[#666]">
                        <Link 
                            to="/" 
                            className="hover:text-[#B8860B] transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-[#1A3C34]">Post</span>
                    </div>
                </nav>
                <article className="bg-[#FFF8E7] border border-[#E6D2A2] rounded-lg shadow-lg overflow-hidden">
                    <header className="bg-gradient-to-r from-[#1A3C34] to-[#15312A] text-[#FFF8E7] p-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center space-x-4 text-[#E6D2A2]">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="font-serif text-lg">by {post.author}</span>
                            </div>
                            {post.publishedAt && (
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="font-serif">{new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                            )}
                        </div>
                    </header>
                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg max-w-none">
                            <div className="text-[#333] font-serif leading-relaxed text-lg whitespace-pre-wrap">
                                {post.content}
                            </div>
                        </div>
                    </div>
                    <footer className="bg-[#F5F0E8] border-t border-[#E6D2A2] p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-serif text-[#666]">Tags:</span>
                                        {post.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 bg-[#E6D2A2] text-[#1A3C34] text-sm font-serif rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link 
                                to="/" 
                                className="inline-flex items-center px-4 py-2 bg-[#1A3C34] text-[#FFF8E7] font-serif text-sm rounded-md hover:bg-[#15312A] transition-colors duration-300"
                            >
                                <svg 
                                    className="w-4 h-4 mr-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                Back to Posts
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default PostPage