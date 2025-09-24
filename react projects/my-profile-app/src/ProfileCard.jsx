import React from "react";
import Bio from "./components/Bio";
import Contact from "./components/Contact";

function ProfileCard({user}) {
    return (
        <>
            <header>
                <h1>Profile Page</h1>
                <p>Hi, I am {user.name}.</p>
            </header>
            <main>
                <section>
                    <Bio biotext={user.bio}/>
                </section>
                <section>
                    <Contact email={user.email} phone={user.phone} />
                </section>
            </main>
        </>
    )
}