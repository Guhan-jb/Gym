import React from "react"
import sample4 from './cl.webp'
import '../css/templatemo-training-studio.css'
import '../css/bootstrap.min.css'
import sample2 from '../css/training-image-02.jpg'
import sample3 from '../css/training-image-01.jpg'
import sample5 from '../css/training-image-03.jpg'
import sample6 from '../css/training-image-04.jpg'
import sample1 from '../css/line-dec.png'
function Sc(){
    return(
        <div className="row" id="tabs">
        <div className="col-lg-8" id="tabs">
                <section class='tabs-content'>
                <article id='tabs-2'>
                    <img src={sample6} alt="Second Training"/>
                    <h4>Second Training Class</h4>
                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
                  </section>
                  </div>
                  </div>
    )
}
export default Sc;