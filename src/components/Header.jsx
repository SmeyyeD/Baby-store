import React from 'react'

function Header() {
    return (
        <>
            <div className='header'>
                <div className='header1'>
                    FREE SHOPPING ON ORDERS OVER 2024.
                </div>
                <div>
                    <div className='header2'>
                        <p className='p'>EST. <span><img className='image' src="./images/10.png" alt="" /> </span> 2020</p>


                    </div>
                    <div>
                        <h1 className='header3'>OLIVE & AVERY</h1>
                        <p className='header4'> &mdash; LIFESTYLE BOUTIQUE &mdash;</p>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className='header5'>
                            <li> <a href=""> HOME </a></li>
                            <li> <a href=""> LIVE IN</a></li>
                            <li> <a href=""> GIFTS</a></li>
                            <li> <a href=""> BABY</a></li>
                            <li> <a href=""> LIFESTYLE</a></li>
                            <li> <a href=""> BRANDS</a></li>
                            <li> <a href=""> CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header