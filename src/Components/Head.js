import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { WiDayCloudy } from "react-icons/wi";

export default function Head(){
    return(
        <div className="p-4 m-auto style-color shadow m-4">
            <div className="ms-5 ">
            <div className="d-flex justify-content-space-between ms-5">
            <h1><WiDayCloudy style={{fontSize:"50px",color:"yellow"}}/></h1>
            <h1>43 ^C|F</h1>
            <div className="ms-2">
            <div>Precipitation:0%</div>
            <div>Humidity:16%</div>
            <div>Wind:8 km/h</div>
            </div>
            </div>
            <div className="d-flex justify-content-space-between ms-5 ">
            <h5 className="ms-2 buttom-border styletemp"><Link to='/temparature' className="text-decoration-none" >Temparature</Link></h5>
            <h5 className="ms-2 buttom-border"> |  <Link to='/precipitation' className="text-decoration-none">Precipitation</Link></h5>
            <h5 className="ms-2 buttom-border"> | <Link to='/Wind' className="text-decoration-none">Wind</Link></h5>
            </div>
            </div>
           
        </div>
    )
}