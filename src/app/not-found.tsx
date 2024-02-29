import Link from 'next/link'

const NotFound = ()=>{
    return (
        <section className="error-page">
        <h2>not found</h2>
        <Link href={'/'}>Return Home</Link>
        </section>
    )
}

export default NotFound