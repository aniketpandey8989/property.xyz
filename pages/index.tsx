import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="row textcenter">
        <div className="col-lg-6">
          <h1 className="heading">Limitless learning at your fingertips</h1>
          <p>Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
        </div>
        <div className="col-lg-6">
          {/* <img src="/images/indeximg.jpeg" className="indeximg" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
