import {setRequestLocale} from "next-intl/server";

export default async function Page(props: { params: Promise<{ locale: string; slug: string }>;}) {
    const params = await props.params;

    if (process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true") {
        setRequestLocale(params.locale);

    }
return (<h1>
    {params.slug}
</h1>)
}

export const dynamicParams = false;

export async function generateStaticParams() {
    return Promise.resolve([
        { locale: "en", slug: ["a"] },
        { locale: "en", slug: ["b"] },

        { locale: "de", slug: [] },
        { locale: "de", slug: ["c"] },
    ])
}
