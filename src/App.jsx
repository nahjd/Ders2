import { useState } from 'react'

import './App.css'
import video from "./../public/images/salam.mp4"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="sliders">
        <div className="slide">
          <div className="head">
            <p>coventic</p>
            <button className='btn'> Sign up</button>
          </div>
          <div className="center">
            <div className="left">
              <h5>Welcome to our</h5>
              <h1>Creative <br /> Studio</h1>
              <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Dignissimos quos eos possimus <br /> nam maiores? Aliquam ex voluptas a delectus <br /> voluptate eos illum porro nulla accusantium <br /></p> <br /> <br />
              <button className='btn2'>Take a tour</button>
            </div>
            <div className="right">
              <h2>Meet our Team</h2> <br />
              <video width="400px" controls>
                <source src={video} type='video/mp4' />
              </video>
            </div>

          </div>
          <div className="border">
            <hr />
            <ul>
              Data <br /> Analists
              <div className="v1"></div>
              <li>324 <br /> <p>Lorem ipsum dolor sit amet.</p></li>
              <li>1021 <br /> <p>Lorem ipsum dolor sit amet.</p></li>
              <li>511 <br /> <p>Lorem ipsum dolor sit amet.</p></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsam.</p></li>
              <div className="v1"></div>
              <h5>Wanna join our Team?</h5>
            </ul>
          </div>
        </div>



      </div>

    </>
  )
}

export default App
