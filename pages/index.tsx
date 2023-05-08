import type { NextPage, NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

import Navbar from '../components/Navbar'
import Billboard from '../components/Billboard'
import MovieList from '../components/MovieList'
import useMovieList from '../hooks/useMovieList'


export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const Home: NextPage = () => {
  const { data: movies = []} = useMovieList();

  return (
    <>
      <Navbar/>
      <Billboard/>
      <div className="pb-40"> 
        <MovieList title="Trending Now" data={movies}/>
      </div>
    </>
    
    
  )
}

export default Home
