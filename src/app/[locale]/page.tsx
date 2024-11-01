export default function Page() {
    return <h1>Homepage</h1>
}

export function generateStaticParams() {
    return [
        { locale: "en" },
        { locale: "de" }
    ]
}
