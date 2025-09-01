import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
    {mywork_data.map((work,index)=>{
        return (
            <div key={index} className="work-item">
                <img src={work.w_img} alt={work.w_name}/>
                <div className="work-info">
                    <h3>{work.w_name}</h3>
                    <p>{work.w_desc}</p>
                    <div className="work-tech">
                        <span>{work.w_tech}</span>
                    </div>
                </div>
            </div>
        )
    })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
<img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork