// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', '@pinia/nuxt'],
    app: {
        head: {
            title: 'Timothy Cleveland',
            link: [{rel: 'icon', type: 'image/x-icon', href: '/profile32x32.png'}]
        },
    }

    // fonts: {
    //     // provider: 'google', // sets default provider
    //     families: [
    //         {
    //             name: 'Inter-A', // the 'canonical' name of the font used to look it up in a provider database
    //             // as: 'montserrat-family', // allow registering a font family with a different name
    //             // provider: 'local', // you can override the provider on a per-family basis
    //             // provider specific options can be provided
    //             src: '~/public/Inter-Variable.ttf', // you can specify a source within your project
    //             // specific configuration will be used to generate `@font-face` definitions
    //             // subsets: ['latin', 'greek'],
    //             // display: 'swap', // or 'block'
    //             // style: 'normal',
    //             // and produce CSS overrides to reduce layout shift (using fontaine)
    //             // fallbacks: ['Arial'],
    //         },
    //     ]
    // }
})