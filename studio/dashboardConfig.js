export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc8661cb35a84ae556eb157',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5qqtxuxd',
                  apiId: 'b448b507-2142-4ff4-846e-a74c20da8201'
                },
                {
                  buildHookId: '5dc8661d3835a8e30baac0c1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-nqp69ft8',
                  apiId: 'e8cc256f-ea9b-4bca-9430-e1d5ce9e300a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zerononce/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-nqp69ft8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
