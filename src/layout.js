import { Link,Outlet } from "react-router-dom";
import './css/templatemo-training-studio.css'
import './css/bootstrap.min.css'
function Layout(){
    return (
        <>
            <header class="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <p class="logo">Gym <em>Town</em></p>
                        <ul class="nav">
                            <li class="scroll-to-section"><Link to="/" class="active">Home</Link></li>
                            <li class="scroll-to-section"><Link to="/intro/intro">About</Link></li>
                            <li class="scroll-to-section"><Link to="/class/class">Classes</Link></li>
                            <li class="scroll-to-section"><Link to="/sch" >Schedules</Link></li>
                            <li class="scroll-to-section"><Link to="/contact/contact">Contact</Link></li> 
                            <li class="main-button"><Link to="/Login/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
   <Outlet /> 
    </>
    )
}
export default Layout