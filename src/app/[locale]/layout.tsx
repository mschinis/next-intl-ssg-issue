export const dynamicParams = false;

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
}) {
    const locale = (await params).locale

    // Providing all messages to the client
    // side is the easiest way to get started
    let messages = {};

    return (
        <html lang={locale}>
        <body>
        {children}
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    return Promise.resolve([
        { locale: "en" },
        { locale: "de" },
    ])
}
