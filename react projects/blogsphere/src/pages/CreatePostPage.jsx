import { useContext, useReducer } from "react"
import { initialState, postFormReducer } from "../reducers/postFormReducer"
import { useNavigate } from "react-router-dom"
import { createPost } from "../api/posts"
import AuthContext from "../contexts/AuthContext"

function CreatePostPage() {
    const [state, dispatch] = useReducer(postFormReducer, initialState)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    
    const handleFieldChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: 'SUBMIT_START'})
        try {
            await createPost({title: state.title, content: state.content, author: user.name})
            dispatch({type: 'SUBMIT_SUCCESS'})
            alert("Post Created Successfully")
            navigate(`/`)
        } catch (error) {
            dispatch({type: 'SUBMIT_ERROR', error: error.message})
        }
    }

    const isSubmitting = state.status === 'submitting'
    return (
    <div className="max-w-2xl mx-auto pt-10">
      <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={state.title}
            onChange={handleFieldChange}
            disabled={isSubmitting}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            rows="10"
            value={state.content}
            onChange={handleFieldChange}
            disabled={isSubmitting}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Publishing...' : 'Publish Post'}
          </button>
        </div>
        {state.status === 'error' && (
          <p className="text-red-500 text-center">{state.error}</p>
        )}
      </form>
    </div>
  );
}

export default CreatePostPage