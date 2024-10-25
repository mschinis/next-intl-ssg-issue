export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;

    const { children } = props;

    return <div>
        {params.slug}
        {children}
    </div>;
}
