import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className="featuredtitle">Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.55 <ArrowDownwardIcon className='featuredIcon Negative'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className="featuredtitle">Sales</span>
            <div className='featuredMoneyContainer'>
                <span className="featuredMoney">$1,415</span>
                <span className="featuredMoneyRate">-1.55 <ArrowDownwardIcon className='featuredIcon Negative'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        <div className='featuredItem'>
            <span className="featuredtitle">Cost</span>
            <div className='featuredMoneyContainer'>
                <span className="featuredMoney">$5,115</span>
                <span className="featuredMoneyRate">+9.55 <ArrowUpwardIcon className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo