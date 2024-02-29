import Link from "next/link"

const Links = ()=>{
    const links = [
        {
            title: 'HOME',
            path: '/'
        },
        {
            title: 'ABOUT ME',
            path: '/aboutr'
        },
        {
            title: 'PORTFOLIO',
            path: '/portfolio'
        },
        {
            title: 'SERVICES',
            path: '/services'
        },
        {
            title: 'EXPERIENCE',
            path: '/experience'
        },
        {
            title: 'CONTACT',
            path: '/contact'
        },
        {
            title: 'LOGIN',
            path: '/login'
        },
        {
            title: 'REGISTER',
            path: '/register'
        },
        {
            title: 'LOGOUT',
            path: '/logout'
        },
    ]

    return (
        <ul>
            {links.map((link)=> (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </ul>
    )}

export default Links