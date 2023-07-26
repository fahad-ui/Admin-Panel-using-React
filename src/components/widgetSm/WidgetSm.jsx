import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
       <span className="widgetSmTitle">New Join Members</span>
       <ul className="widgetSmList">
        <li className='widgetSmListItem'>
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jaffer</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><VisibilityIcon/> Display</button>
        </li>
        <li className='widgetSmListItem'>
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jaffer</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><VisibilityIcon/> Display</button>
        </li>
        <li className='widgetSmListItem'>
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jaffer</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><VisibilityIcon/> Display</button>
        </li>
        <li className='widgetSmListItem'>
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jaffer</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><VisibilityIcon/> Display</button>
        </li>
        <li className='widgetSmListItem'>
            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Jaffer</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton"><VisibilityIcon/> Display</button>
        </li>
       </ul>
    </div>
  )
}

export default WidgetSm