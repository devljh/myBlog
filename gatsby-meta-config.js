module.exports = {
  hometitle: `지환블로그`, // 브라우저 탭에 표시될 블로그 이름.(조금만 길어도 짤리므로, 짧고 강한 이름 추천 ^^;)
  title: `지환블로그`, //메인페이지에 표시될 블로그 이름
  description: `지환 블로그`,
  author: `지환`, // 메인페이지 > Written by 뒤에 들어갈 이름
  introduction: `지환 블로그에 오신것을 환영합니다.`,
  siteUrl: `https://devljh.netlify.app/`, // Your blog site url
  social: {
    github: `devljh/myBlog`, // Your GitHub account
    portfolio: ``, // Your Portfolio Url
  },
  othersite: [
    //블로그 설명 글 밑에 표시될 타사이트들을 추가해보세요. 예:) name : 표시될이름, url : 연결될 사이트 주소
    {
      name: `Blog OpenSource Github`,
      url: `https://github.com/devljh/myBlog`,
    },
  ],
  icon: `content/assets/React.js_logo-512.png`, // Add your favicon
  keywords: [`blog`, `지환`, 'devljh'],
  comment: {
    disqusShortName: '', // Your disqus-short-name. check disqus.com.
    utterances: 'devljh/myBlog', // Your repository for archive comment
  },
  configs: {
    countOfInitialPost: 10, // Config your initial count of post
  },
  sponsor: {
    buyMeACoffeeId: 'devljh',
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: '', // Add your google analytics tranking ID

  seo: {
    //Google Analytics 연동에 필요한 host정보와 sitemap 입력하세요.
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://devljh.netlify.app',
      sitemap: 'https://devljh.netlify.app/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },

  // Google Search Console 사이트 소유권 확인용 코드.
  // 구글서치콘솔을 이용하시려면 이곳에 구글에서 제공한 소유권확인용 HTML태그 입력하세요.(google-site-verification)
  gsc: 'HZflfCKdZvjC8qWB5opaiDcDmA9vTHZa-_uamDrd-Sc',
}
