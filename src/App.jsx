import posts from "./assets/posts"
import PostsContext from "./contexts/PostsContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import PostsPage from "./components/PostsPage"
import { AlertProvider } from "./contexts/AlertContext"

function App() {

  return (
    <AlertProvider>
      <PostsContext.Provider value={posts}>
        <BrowserRouter>
          <Routes>
            <Route Component={Layout}>
              <Route path="/">
                <Route index Component={PostsPage} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </AlertProvider>
  )
}

export default App
