import Link from "next/link";

const inLineCss = { color: "white", borderRadius: '40%', textDecoration: 'none', fontSize: '1.5rem' }
export default function Blog() {
    return (
        <main>
            <h1>blogs</h1>
            <p><Link href='/blog/post-1'>Post 1</Link></p>
            <p><Link href='/blog/post-2'>Post 2</Link></p>
            <Link style={inLineCss} href='../'>Back</Link>
        </main>
    );
}