import React from "react"
import sample4 from './cl.webp'
import '../css/templatemo-training-studio.css'
import '../css/bootstrap.min.css'
import sample2 from '../css/training-image-02.jpg'
import sample3 from '../css/training-image-01.jpg'
import sample5 from '../css/training-image-03.jpg'
import sample6 from '../css/training-image-04.jpg'
import sample1 from '../css/line-dec.png'
function Foc(){
    return(
        <div className="row" id="tabs">
        <div className="col-lg-8">
                <section class='tabs-content'>
                <article id='tabs-4'>
                    <img src={sample5}/>
                    <h4>Fourth Training Class</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
                  </section>
                  </div>
                  </div>
    )
}
export default Foc;