import React from 'react'
import Article from '../Article/Article'
import Banner from '../banner/Banner'

const Welcome = () => {
  return (
    <div>
      {/* <header className="header header-inverse" style={{backgroundImage: 'url(assets/img/bg-gift.jpg)'}} data-overlay={8}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>Latest Blog Posts</h1>
              <p className="fs-20 opacity-70">Read and get updated on how we progress.</p>
            </div>
          </div>
        </div>
      </header> */}

      <Banner
        title="Latest Blog Posts"
        subtitle="Read and get updated on how we progress"
        backgroundImage= {`url(${process.env.PUBLIC_URL}/assets/img/bg-gift.jpg)`}
      />

      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3">
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Welcome