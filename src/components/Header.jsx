import '../styles/style.css'
import myImg from '../images/Group110.svg'
import myImg1 from '../images/Group111.svg'
import myImg2 from '../images/Group112.svg'

function Header(){
   
    return(
        <>
        <div className="flex-container"> 
     <div className='one'></div>
     <div className='two'></div>
     <div className='three'></div>
     <div className="flex-four">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</p>
     </div>
     <div className="flex-five">
       <img alt="" src={myImg} />
     </div>
     <div className="footer">
        <div className="img1"><img alt="" src={myImg1}></img> </div>
        <div className="img2"><img alt="" src={myImg2} /> </div>
     </div>
     </div>
        
        </>
    )
}
export default Header;