hexo.extend.helper.register("social_links", function (themeSocials, styleType) {
  let styleTypes = [
    {
      github: 'text-slate-400 hover:text-[#333] dark:hover:text-white transform hover:scale-110 transition-all text-2xl',
      twitter: 'text-slate-400 hover:text-[#1DA1F2] transform hover:scale-110 transition-all text-2xl',
      email: 'text-slate-400 hover:text-primary transform hover:scale-110 transition-all text-2xl',
    },
    {
      github: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded hover:bg-primary hover:text-white transition-colors',
      twitter: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded hover:bg-primary hover:text-white transition-colors',
      email: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded hover:bg-primary hover:text-white transition-colors',
    },
    {
      github: 'text-slate-400 hover:text-primary transition-colors',
      twitter: 'text-slate-400 hover:text-primary transition-colors',
      email: 'text-slate-400 hover:text-primary transition-colors',
    }
  ];
  let icons = {
    github: 'fab fa-github',
    twitter: 'fab fa-x-twitter',
    email: 'fas fa-envelope',
  };

  let styles = styleTypes[styleType] ?? styleTypes[0];
  let socials = [
    'github',
    'twitter',
    'email',
  ];

  let htmlString = '';
  socials.forEach(function (socialName) {
    if (themeSocials[socialName] && styles[socialName] && icons[socialName]) {
      htmlString += '<a href="' + themeSocials[socialName] + '" class="' + styles[socialName] + '">';
      htmlString += '<i class="' + icons[socialName] + '"></i>';
      htmlString += '</a>'
    }
  });

  return htmlString;
});

