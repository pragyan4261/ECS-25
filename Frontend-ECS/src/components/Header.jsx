import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { FaUser } from "react-icons/fa6";
import styles from './Nav.module.css'
import classNames  from "classnames";
export default function Header() {
    const [isActive, setIsActive] = useState(false);
    
        // Toggle the active state
        const toggleActive = () => {
            setIsActive(!isActive);
        };
    const [hoveredLink, setHoveredLink] = useState(null);
    const { isLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn);

    const handleHover = (link) => {
        setHoveredLink(link);
    };

    return (
        <>
        <header className="mobile:hidden mobile:absolute xl:block shadow sticky z-50 top-0">
        <nav className='flex absolute w-full justify-between items-center p-2'>
                <div>
                    
                <div className='pl-3'>
                <Link to="/" className="flex items-center ">
                        <img
                            src="https://i.postimg.cc/RZrxm2s0/ecs-new-logo-1-black-bg-2.png"
                            className="h-[50px]"
                            alt="ECS Logo"
                            />
            </Link>
                </div>
                </div>
                <div className="flex  justify-center navUl ">

                <div className={styles.Naveffect} >
                    <Link to={"/annual-attraction"}>Annual Attraction
                    </Link></div>
                <div className={styles.Naveffect}>
                    <Link to={"/members"}>Members
                    </Link></div>
                <div className={styles.Naveffect}>
                    <Link to={"./developers"}>Developers
                    </Link></div>
                <div className={styles.Naveffect}>
                    <Link to={"./Resource+Hub"}>Resource Hub
                    </Link></div>
                </div>

                {/* <div className='pr-4'>
                <Link to="/" className="flex items-center justify-center ">
                        <FaUser size={38}/>
            </Link> */}
                {/* </div> */}
        {isLoggedIn ? (<div className='pr-4'>
                        <Link to="/profile" className="flex items-center">
                            <FaUser size={38}/>
                        </Link>
                    </div>) 
                    : 
                    <div className='pr-4'>
                        <Link to="/sign-up" className="flex items-center">
                            <FaUser size={38}/>
                        </Link> </div>
                    }
            </nav>
        </header>
        <header className='pc:hidden pc:absolute relative' >
            <div className='relative p-2 flex flex-row gap-2 justify-between items-center' style={{flexDirection:"row"}}  >
                <div className='absolute left-5 z-10 top-5'>

            <Link to="/" className="flex items-center ">
                        <img
                            src="https://i.postimg.cc/RZrxm2s0/ecs-new-logo-1-black-bg-2.png"
                            className="h-[45px]"
                            alt="ECS Logo"
                            />
            </Link>
                            </div>
                            
             <div>

                <div className='absolute -top-3 right-20 z-20'>
        
        <div className={classNames(styles.dots, { [styles.active]: isActive })} onClick={toggleActive}>
  <div className={styles.dot}></div>
  <div className={styles.dot}></div>
  <div className={classNames(styles.shadow, styles.cut,{ [styles.popNav]: isActive })}></div>
  <div className={classNames(styles.container ,styles.cut, { [styles.popNav]: isActive })}>
    <div className={classNames(styles.drop, styles.cut2, { [styles.popNav]: isActive })}></div>
  </div>
  <div className={classNames(styles.list,  styles.popNav)}>
    <ul className='flex gap-3 '>
      
      
      <li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
        <Link to="/">Home
        </Link>
      </li>

      <li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
        <Link to="Annual-Attraction">Annual Attraction</Link>
      </li>
      <li  className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
      <Link to="/Members">Members</Link>
      </li>
      <li  className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
      <Link to="/Developers">Developers</Link>
      </li>
      <li  className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
      <Link to="/Resource+Hub">Resource Hub</Link>
      </li>
    </ul>
  </div>
  <div className={styles.dot}></div>
</div>
<div className={classNames(styles.dots, { [styles.active]: isActive })} onClick={toggleActive}></div>
    </div>
                        
                    </div>
                    
                    

            </div>
        
        </header>
    </>
    
    );
}
''