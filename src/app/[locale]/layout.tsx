import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

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
    const messages = process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true"? await getMessages() : {};

    return (
        <html lang={locale}>
        <body>
        {process.env.NEXT_PUBLIC_USE_NEXT_INTL === "true" ? (
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        ) : children}

        </body>
        </html>
    );
}
