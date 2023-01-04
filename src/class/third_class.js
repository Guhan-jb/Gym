import React from "react"
import sample4 from './cl.webp'
import '../css/templatemo-training-studio.css'
import '../css/bootstrap.min.css'
import sample2 from '../css/training-image-02.jpg'
import sample3 from '../css/training-image-01.jpg'
import sample5 from '../css/training-image-03.jpg'
import sample6 from '../css/training-image-04.jpg'
import sample1 from '../css/line-dec.png'
function Tc(){
    return(<div className="row" id="tabs">
        <div className="col-lg-8">
                <section class='tabs-content'>
                <article id='tabs-3'>
                    <img src={sample3} alt="Third Class"/>
                    <h4>Third Training Class</h4>
                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
                  </section>
                  </div>
                  </div>
    )
}
export default Tc;