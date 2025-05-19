import posts from "./assets/posts"
import PostsContext from "./contexts/PostsContext"

function App() {

  return (
    <PostsContext.Provider value={posts}>
    </PostsContext.Provider>
  )
}

export default App
