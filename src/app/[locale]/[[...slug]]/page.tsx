export default async function Page(props: { params: Promise<{ slug: string }>;}) {
    const params = await props.params;
return (<h1>
    {params.slug}
</h1>)
}

export const dynamicParams = false;

export async function generateStaticParams() {
    return Promise.resolve([
        { locale: "en-gb", slug: ["a"] },
        { locale: "en-gb", slug: ["b"] },

        { locale: "en-gr", slug: [] },
        { locale: "en-gr", slug: ["c"] },
    ])
}
