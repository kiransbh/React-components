import React,{ useState } from 'react';

// stylesheet
import './Navigation.scss';

function Navigation() {

    // The state is create din numberic datatype
    const[ slide, setSlide ] = useState(1);

    const prevSlide = () => {
        // The condition will set the state in decreasing order on each click event
        setSlide( slide <= 1 ? 5 : slide - 1 )
    }

    const nextSlide = () => {
        // The condition will set the state in increasing order on each click event
        setSlide( slide === 5 ? 1 : slide + 1 )
    }

  return (
    <div className='navigation_container'>
        {/* prev and next arrow button */}
        <div className='prev' onClick={prevSlide}></div>
        <div className='next' onClick={nextSlide}></div>
        {/* Based on the state, the classname will change */}
        <div className={ slide === 1 ? 'active-slide' : 'not-active-slide'}>
            <p>1</p>
        </div>
        <div className={ slide === 2 ? 'active-slide' : 'not-active-slide'}>
            <p>2</p>
        </div>
        <div className={ slide === 3 ? 'active-slide' : 'not-active-slide'}>
            <p>3</p>
        </div>
        <div className={ slide === 4 ? 'active-slide' : 'not-active-slide'}>
            <p>4</p>
        </div>
        <div className={ slide === 5 ? 'active-slide' : 'not-active-slide'}>
            <p>5</p>
        </div>
    </div>
  )
}

export default Navigation