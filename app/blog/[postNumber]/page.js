export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>{params.postNumber}</h1>
        </main>
    );
};