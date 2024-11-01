export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string; slug: string }>;
}) {
    const params = await props.params;

    const { children } = props;
    return <div>
        {params.slug}
        {children}
    </div>;
}

export async function generateStaticParams() {
    return Promise.resolve([
        { locale: "en", slug: ["a"] },
        { locale: "en", slug: ["b"] },

        { locale: "de", slug: [] },
        { locale: "de", slug: ["c"] },
    ])
}
