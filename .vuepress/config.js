// .vuepress/config.js
module.exports = {
  title: "MHCC Code Academy 2018",
  serviceWorker: true,  
  themeConfig: {          
    editLinks: false,      
    nav: [
        
        // { text: 'Resources', link: '/resources/' },        
        { text: 'Treehouse', link: 'http://teamtreehouse.com/' },
        { text: 'Slack', link: 'https://mhcccodeacademy2018.slack.com/' },        
        { text: 'Logs', link: 'https://codeacademymhcc.github.io/learning-logs/' },
        { text: 'GitHub', link: 'https://github.com/CodeAcademyMHCC/codeacademymhcc.github.io' },        
      ],
      sidebar: [
        ['current','★ This Week'],                
        
        {
          title: 'Assignments',
          collapsable: true,
          children: [
            ['syllabus/week1', "Week 1"],
            ['syllabus/week2', "Week 2"],
            ['syllabus/week3', "Week 3"],
            ['syllabus/week4', "Week 4"],
            // ['syllabus/week5', "Week 5"],
            // ['syllabus/week6', "Week 6"],
            // ['syllabus/week7', "Week 7"],
            // ['syllabus/week8', "Week 8"],
            // ['syllabus/week9', "Week 9"],
            // ['syllabus/week10', "Week 10"],
          ]
        },
        {
          title: 'Class Projects',
          collapsable: true,
          children: [
            ['projects/github-study-notes',  'GitHub Study Notes']
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
          ["resources", "Resources"],
          
      ]
    }
}