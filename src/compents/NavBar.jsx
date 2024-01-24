import React, { useRef } from 'react';
function NavBar() {
    const sideBar = useRef()
    const buttons = useRef()
    const closeIcon = useRef()



    const handleSignUp = ()=> {
        const signUpContainer = document.querySelector('.sign-up-container')
        const signUp = document.getElementById('signUp')
        signUpContainer.classList.toggle('block')
        signUp.classList.toggle('flexx')
    }
    const handlelogIn = ()=> {
        const signUpContainer = document.querySelector('.sign-up-container')
        const logIn = document.getElementById('login')
        signUpContainer.classList.toggle('block')
        logIn.classList.toggle('flexx')
    }
   const handleOpenList = ()=>{
    sideBar.current.classList.toggle('flex')
    buttons.current.classList.toggle('flex')
}
    return ( 
        <>
            <nav>
                <div className="left-side">
                    <p><span className="logo">KS</span> Kemit Stream</p>
                </div>
                <div className="mid-side" ref={sideBar}>
                    <div ref={closeIcon} className="close-icon" onClick={handleOpenList}>
                        <div className="line l-1"></div>
                        <div className="line l-2"></div>
                    </div>
                    <div className="buttons" ref={buttons}>
                        <button onClick={handleSignUp}  className="primary-button">Sign up</button>
                        <button onClick={handlelogIn} className="socndary-button">Login</button>
                    </div>
                    <ul>
                        <li><a href="#k" className="active">Home</a></li>
                        <li><a href="#k">Discover</a></li>
                        <li><a href="#k">Movie Release</a></li>
                        <li><a href="#k">Forum</a></li>
                        <li><a href="#k">About</a></li>
                    </ul>
                </div>
                <div className="right-side">
                    <i className="fa fa-search"></i>
                    <div className="list-icon" onClick={handleOpenList}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line l-3"></div>
                    </div>

                    <div className="buttons" ref={buttons}>
                        <button onClick={handleSignUp}  className="primary-button">Sign up</button>
                        <button onClick={handlelogIn} className="socndary-button">Login</button>
                    </div>
                </div>
            </nav>

        </>
     );

     
}

export default NavBar;