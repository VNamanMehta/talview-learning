const storage = 'blobsphere_posts'

let initialPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    author: 'Alex Doe',
    content: 'React Hooks are functions that let you “hook into” React state and lifecycle features from function components...',
  },
  {
    id: 2,
    title: 'A Guide to Tailwind CSS',
    author: 'Jane Smith',
    content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces...',
  },
  {
    id: 3,
    title: 'The Power of Nested Routes',
    author: 'Alex Doe',
    content: 'React Router v6 makes creating nested layouts with a shared UI easier than ever with the Outlet component...',
  },
];

const getPostsFromStorage = () => {
  const posts = localStorage.getItem(storage)
  if (!posts) {
    localStorage.setItem(storage, JSON.stringify(initialPosts))
    return initialPosts
  }
  return JSON.parse(posts)
}

export const fetchAllPosts = async () =>{
    console.log("Fetching posts")
    await new Promise((res) => setTimeout(res, 500))
    const posts = getPostsFromStorage()
    console.log("All posts fetched")
    return posts
}

export const fetchPostById = async (id) =>{
    console.log("fetching for number", id)
    await new Promise((res) => setTimeout(res, 500))
    const posts = getPostsFromStorage()
    const post = posts.find(p => p.id === parseInt(id))
    console.log("Post found")
    return post
}

export const createPost = async (postData) => {
  console.log("Creating new post")
  await new Promise(res => setTimeout(res, 1000))

  if(!postData.title || !postData.content) {
    throw new Error("Title and content are required")
  }
  const posts = getPostsFromStorage()
  const newPost = {
    id: Date.now(),
    author: postData.author,
    title: postData.title,
    content: postData.content,
  }
  const updatePosts = [...posts, newPost]
  localStorage.setItem(storage, JSON.stringify(updatePosts))
  console.log("Post created successfully")
  return newPost
}

export const fetchMyPost = async (author_name) => {
  console.log('fetching my posts')
  await new Promise(res => setTimeout(res, 500))
  const posts = getPostsFromStorage()
  const myposts = posts.filter(p => p.author === author_name)
  console.log('Found my posts')
  return myposts
}

export const deletePost = async (pid) => {
  console.log('Deleting post')
  await new Promise(res => setTimeout(res, 500))
  let posts = getPostsFromStorage()
  posts = posts.filter(p=> p.id !== pid)
  localStorage.setItem(storage, JSON.stringify(posts))
  console.log('Post Deleted successfully')
}