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
            <nav className="bg-transparent to-black px-4 lg:px-6 py-3">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://i.postimg.cc/RZrxm2s0/ecs-new-logo-1-black-bg-2.png"
                            className="h-[68px]"
                            alt="ECS Logo"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 text-white text-sm font-semibold gap-[67px]">
                        <li
                            onMouseEnter={() => handleHover('annual-attraction')}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <Link
                                to="/annual-attraction"
                            >
                                <img src={hoveredLink === 'annual-attraction' ? "https://i.postimg.cc/XqND1Jng/Group-174-5.png" : "https://i.postimg.cc/BQNn6Hxp/Group-174-2.png"} alt="" />
                            </Link>
                        </li>
                        <li
                            onMouseEnter={() => handleHover('resource-hub')}
                            onMouseLeave={() => handleHover(null)}
                            className='transition-transform duration-1000'
                        >
                            <Link
                                to="/Resource+Hub"
                            >
                                <img src={hoveredLink === 'resource-hub' ? "https://i.postimg.cc/Gpk7cY2Q/Group_174_(4).png" : "https://i.postimg.cc/mgD2Fkjs/Group-174-6.png"} alt="" />
                            </Link>
                        </li>
                        <li
                            onMouseEnter={() => handleHover('members')}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <Link
                                to="/members"
                            >
                                <img src={hoveredLink === 'members' ? "https://i.postimg.cc/Gp0gwzct/Group-174-1.png" : "https://i.postimg.cc/VsWYGnHw/Group-174-7.png"} alt="" />
                            </Link>
                        </li>
                        <li
                            onMouseEnter={() => handleHover('developers')}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <Link
                                to="/developers"
                            >
                                <img src={
                                    hoveredLink === 'developers'
                                        ? "https://i.postimg.cc/2SL9KgNg/Group-174.png"
                                        : "https://i.postimg.cc/jSZwGBgs/Group-174-3.png"
                                } alt="" className='group-hover:hidden' />
                            </Link>
                        </li>
                    </ul>

                    {/* User Icon */}

                    {isLoggedIn ? (<div>
                        <Link to="/profile" className="flex items-center">
                            <img src="https://i.postimg.cc/VLJVrcth/user-svgrepo-com-1.png" alt="" />
                        </Link>
                    </div>) 
                    : 
                    <div>
                        <Link
                            to="/sign-up"
                            className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Sign Up
                        </Link> </div>
                    }

                </div>
            </nav>
            {/* Lines */}
            <div
                id="1"
                className={`absolute top-7 left-[353px] h-[2px] w-[22%] bg-gradient-to-r from-[#048AB2] from-70% to-transparent ${hoveredLink === 'annual-attraction' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="2"
                className={`absolute top-7 left-[580px] h-[2px] w-[25%] bg-gradient-to-r from-transparent from-5% via-[#048AB2] to-transparent to-95% ${hoveredLink === 'resource-hub' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="3"
                className={`absolute top-7 left-[805px] h-[2px] w-[24%] bg-gradient-to-r from-transparent from-5% via-[#048AB2] to-transparent to-95% ${hoveredLink === 'members' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="4"
                className={`absolute top-7 rotate-180 left-[1061px] h-[2px] w-[14.7%] bg-gradient-to-r from-[#048AB2] from-70% to-transparent ${hoveredLink === 'developers' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="5"
                className={`absolute top-[60px] left-[353px] h-[2px] w-[20%] bg-gradient-to-r from-[#048AB2] from-70% to-transparent ${hoveredLink === 'annual-attraction' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="6"
                className={`absolute top-[60px] left-[580px] h-[2px] w-[25%] bg-gradient-to-r from-transparent from-5% via-[#048AB2] to-transparent to-95% ${hoveredLink === 'resource-hub' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="7"
                className={`absolute top-[60px] left-[805px] h-[2px] w-[24%] bg-gradient-to-r from-transparent from-5% via-[#048AB2] to-transparent to-95% ${hoveredLink === 'members' ? 'hidden' : ''
                    }`}
            ></div>
            <div
                id="8"
                className={`absolute top-[60px] rotate-180 left-[1061px] h-[2px] w-[14.7%] bg-gradient-to-r from-[#048AB2] from-70% to-transparent ${hoveredLink === 'developers' ? 'hidden' : ''
                    }`}
            ></div>
        </header>
        <header className='pc:hidden pc:absolute relative' >
            <div className='relative p-2 flex flex-row gap-2 justify-between items-center' style={{flexDirection:"row"}}  >
                <div className=''>

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
      
      {isLoggedIn?
      <li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
        <Link to="/">Home
        </Link>
      </li>:<li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
        <Link to="/sign-in">Login
        </Link>
      </li>
        }
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
      {isLoggedIn?
      <li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
        <Link to="/profile" className="flex items-center justify-center">Profile
      </Link></li>:
      <li className={classNames(styles.liItem,{[styles.popNav]:isActive})}>
      <Link to="/sign-up" className="flex items-center justify-center">Register 
    </Link></li>}
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