import React from "react"

export default function Main() {
    return (
        <main>
            <img className="main--photo" src="./images/main_photo.JPG" alt="The profile photo of the developer"/>
            <div className="title--info">
            <h1 className="main--title">Kristina Korzhenevskaya</h1>
            <h2>Frontend Developer</h2>
            <a className="website--link" href="https://kristinkor.github.io/kristinkor/">kristinkor.website</a>
            </div>
            <div className="buttons--container">
                <button className="email--btn"><i className="fa fa-envelope"></i>Email</button>
                <button className="linkedin--btn"><i className="fa fa-linkedin-square"></i>LinkedIn</button>
            </div>
            <h3> About </h3>
            
            <p className="main--facts">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3> About </h3>
            <p  className="main--facts">Snowboarder. Music lover. Reader. Travel geek. Trivia amateur. Coffee fanatic.</p>
        </main>
    )
}