import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};


const withIntl = withNextIntl(nextConfig);

// With next-intl
export default (function() {
    if (process.env.NEXT_PUBLIC_USE_NEXT_INTL === 'true') {
        return withNextIntl(nextConfig)
    }

    return nextConfig;
})();

// Without next-intl
// export default nextConfig;

