/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/basic',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
