hexo.extend.helper.register("social_links", function (themeSocials, styleType) {
  let styleTypes = [
    'text-slate-400 transform hover:scale-110 transition-all text-2xl',
    'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded hover:bg-primary hover:text-white transition-colors',
    'text-slate-400 hover:text-primary transition-colors',
  ];
  let styleType0LinkSettings = {
    github: 'hover:text-[#333] dark:hover:text-white',
    twitter: 'hover:text-[#1DA1F2]',
    email: 'hover:text-primary',
  };
  let icons = {
    github: 'fab fa-github',
    twitter: 'fab fa-x-twitter',
    email: 'fas fa-envelope',
  };

  let styles = styleTypes[styleType] ?? styleTypes[2];
  let specialSettings = styleType === 0 ? styleType0LinkSettings : {};
  let socials = [
    'github',
    'twitter',
    'email',
  ];

  let htmlString = '';
  socials.forEach(function (socialName) {
    if (themeSocials[socialName] && styles && icons[socialName]) {
      let linkStyle = styles;
      if (specialSettings[socialName] ?? '') {
        linkStyle += ' ' + specialSettings[socialName];
      }

      htmlString += '<a href="' + themeSocials[socialName] + '" class="' + linkStyle + '">';
      htmlString += '<i class="' + icons[socialName] + '"></i>';
      htmlString += '</a>'
    }
  });

  return htmlString;
});

