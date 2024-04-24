import './index.css';

const Header = () => { 
    return (
        <div className='navbar-container'>
            <div>
                <h1 className='text'>Good Afternoon, Dhanush</h1>
                <span className='sub-text'>You are subscribed to Retail plan.</span>
            </div>
            <div className='navbar-info'>
                <i className='bx bx-calendar-alt'></i>
                <h1 className='text'>Today, 23 April</h1>
                <i className='bx bx-time-five'></i>
                <h1 className='text'>16:42</h1>
                <i className='bx bx-bell bell-icon'></i>
            </div>
        </div>
    );
}

export default Header;