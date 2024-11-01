import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default function middleware() {
    if (process.env.NEXT_PUBLIC_USE_NEXT_INTL !== 'true') {
        return createMiddleware(routing)
    }

    return;
};

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en)/:path*']
};
