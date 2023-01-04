import React from "react"
import '../css/templatemo-training-studio.css'
import '../css/bootstrap.min.css'
import sample1 from '../css/line-dec.png'
import sample2 from '../css/training-image-02.jpg'
import sample3 from '../css/training-image-01.jpg'
import sample5 from '../css/training-image-03.jpg'
import sample6 from '../css/training-image-04.jpg'
import sample7 from '../css/features-first-icon.png'
function Clas(){
return(
    <div style={{backgroundColor:"rgb(2, 5, 20)"}} >
    <section class="section" id="our-classes">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Our <em>Classes</em></h2>
                        <img src={sample1}/>
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
                </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li><a href='#tabs-1'><img class="img2" src={sample7}  />First Training Class</a></li>
                  <li><a href='#tabs-2'><img class="img2" src={sample7} />Second Training Class</a></li>
                  <li><a href='#tabs-3'><img class="img2" src={sample7} />Third Training Class</a></li>
                  <li><a href='#tabs-4'><img class="img2" src={sample7} />Fourth Training Class</a></li>
                  <div className="main-rounded-button"><a href="#">View All Schedules</a></div>
                </ul>
              </div>
              <div className="col-lg-8">
                <section class='tabs-content'>
                  <article id='tabs-1'>
                    <img src={sample2} />
                    <h4>First Training Class</h4>
                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
                  <article id='tabs-2'>
                    <img src={sample1} alt="Second Training"/>
                    <h4>Second Training Class</h4>
                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div class="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
                  <article id='tabs-3'>
                    <img src={sample3} alt="Third Class"/>
                    <h4>Third Training Class</h4>
                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                    <div className="main-button">
                        <a href="#">View Schedule</a>
                    </div>
                  </article>
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
        </div>
    </section>
    </div>
)
}
export default Clas;