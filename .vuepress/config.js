// .vuepress/config.js
module.exports = {
  title: "MHCC Code Academy 2018",
  serviceWorker: true,  
  themeConfig: {  
    repo: 'CodeAcademyMHCC/codeacademymhcc.github.io',
    editLinks: true,      
    nav: [
        
        // { text: 'Resources', link: '/resources/' },
        { text: 'Treehouse', link: 'http://teamtreehouse.com/' },
        { text: 'Slack', link: 'https://mhcccodeacademy2018.slack.com/' },        
      ],
      sidebar: [
        ['current','This Week'],
        {
          title: 'Syllabus',
          collapsable: true,
          children: [
            ['syllabus/week1', "Week 1"],
            // ['#', "Week 2"],
            // ['#', "Week 3"],
            // ['#', "Week 4"],
            // ['#', "Week 5"],
            // ['#', "Week 6"],
            // ['#', "Week 7"],
            // ['#', "Week 8"],
            // ['#', "Week 9"],
            // ['#', "Week 10"],
          ]
        },
        {
            title: 'Reference Materials',
            collapsable: true,
            children: [
              ['reference/html', "HTML"],
              ['reference/css', "CSS"],
              ['reference/javascript', "JavaScript"],              
              // ['#', "Week 2"],
              // ['#', "Week 3"],
              // ['#', "Week 4"],
              // ['#', "Week 5"],
              // ['#', "Week 6"],
              // ['#', "Week 7"],
              // ['#', "Week 8"],
              // ['#', "Week 9"],
              // ['#', "Week 10"],
            ]
          },        
      ]
    }
}