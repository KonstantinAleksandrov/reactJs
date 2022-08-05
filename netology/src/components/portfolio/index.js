import React from 'react';
import {useState, useMemo} from 'react'
import ProjectList from '../projectList/index'
import '../portfolio/style.scss'

 const Portfolio = () => {

    const listTitle = ["All", "Websites", "Flayers", "Business Cards"]
    const [category, setCategory] = useState('All')
    const [activeListImg, setActiveListImg] = useState([])

   const listImg = useMemo(() => [{
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
     category: "Business Cards"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
     category: "Business Cards"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
     category: "Business Cards"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
     category: "Flayers"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
     category: "Business Cards"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
     category: "Business Cards"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
     category: "Websites"
   }, {
     img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
     category: "Flayers"
   }], [category])


   const changeProjects = (title) =>{
      setCategory(title)
      setActiveListImg(listImg.filter((item)=>item.category === title))
      console.log(activeListImg)
    }

      return (
        <div className='portfolio'>
            <div className='nav'>
                {listTitle.map((title) => {
                    return (
                        <div key={title} onClick={((event)=>changeProjects(event.target.textContent))} className={title === category? 'active link' : 'link'}>{title}</div>
                    )
                })}
            </div>
            {/* почему  activeListImg пустой массив?*/}
            {console.log(activeListImg)}
             <ProjectList projects={category==='All'? listImg : listImg.filter((item)=>item.category === category)}/>
        </div>
      )
 } 


export default Portfolio;