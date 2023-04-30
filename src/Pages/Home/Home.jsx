import React, { useContext } from 'react'
import { searchContext } from '../../App'
import ProfileMain from '../../Components/Profile/ProfileMain'
import Messaging from '../../Components/Messaging/Messaging'
import RecommendationMain from '../../Components/Recommendation/RecommendationMain'
import PostMain from '../../Components/Post/PostMain'

const Home = () => {
  const SearchContext = useContext(searchContext)

  return (
    <main onClick={() => SearchContext.searchDispatch('close')} className='md:mt-5 sm:px-12 md:px-7 xl:px-24 pt-16'>
        <div className='md:flex items-start gap-5'>
            <ProfileMain />
            <PostMain />
            <Messaging />
            <RecommendationMain />
        </div>
    </main>
  )
}

export default Home