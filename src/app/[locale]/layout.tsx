import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';

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

    if (process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true") {
        messages = await getMessages()
        setRequestLocale(locale);
    }

    return (
        <html lang={locale}>
        <body>
        {process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true" ? (
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        ) : children}

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
