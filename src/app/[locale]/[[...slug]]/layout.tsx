import {getMessages, setRequestLocale} from "next-intl/server";

export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string; slug: string }>;
}) {
    const params = await props.params;

    const { children } = props;

    if (process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true") {
        setRequestLocale(params.locale);
    }

    return <div>
        {params.slug}
        {children}
    </div>;
}
