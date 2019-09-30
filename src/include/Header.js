import React from 'react';

const Header = () => (
    <section className="header">
        <div className="wrap_fix">
            <h1>QuoraKR</h1>
            <ul className="gnb">
                <li><a href="#none">Home</a></li> 
                <li><a href="#none">Answer</a></li> 
                <li><a href="#none">Spaces</a></li>
                <li><a href="#none">Notifications</a></li>
            </ul>
            <div className="searchBox">
                <input type="text" name="sh_txt" placeholder="Search QuoraKr" />
            </div>
            <div className="addBox">
                <button type="button">Add Question</button>
            </div>
        </div>
    </section>
)

export default Header;