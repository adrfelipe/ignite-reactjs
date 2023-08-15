import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="André" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam consequuntur ullam saepe molestias odio, perferendis ratione quasi, ea sunt praesentium sint voluptatum modi? Ea culpa ad accusantium aliquid sed." 
      />
      <Post
        author="João"
        content="Um texto bem top"
      />
    </div>
  )
}

