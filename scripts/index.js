hexo.extend.helper.register("social_links", function (themeSocials, styleType) {
  let styleTypes = [
    'text-slate-400 transform hover:scale-110 transition-all text-2xl',
    'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded hover:bg-primary hover:text-white dark:hover:text-slate-700 dark:hover:bg-indigo-400 transition-colors',
    'text-slate-400 hover:text-primary hover:dark:text-indigo-400 transition-colors',
  ];
  let styleType0LinkSettings = {
    github: 'hover:text-[#333] dark:hover:text-white',
    threads: 'hover:text-black dark:hover:text-white',
    facebook: 'hover:text-[#1877F2]',
    twitter: 'hover:text-[#1DA1F2]',
    bluesky: 'hover:text-[#0281F7]',
    linkedin: 'hover:text-[#0A66C2]',
    line: 'hover:text-[#06C755]',
    duolingo: 'hover:text-[#58CC02]',
    instagram: 'hover:text-[#E4405F]',
    email: 'hover:text-primary hover:dark:text-indigo-400',
    custom_links: 'hover:text-[#333] dark:hover:text-white',
  };
  let icons = {
    github: 'fab fa-github',
    twitter: 'fab fa-x-twitter',
    threads: 'fab fa-threads',
    facebook: 'fab fa-facebook',
    bluesky: 'fab fa-bluesky',
    linkedin: 'fab fa-square-linkedin',
    line: 'fab fa-line',
    duolingo: 'fab fa-duolingo',
    instagram: 'fab fa-instagram',
    email: 'fas fa-envelope',
  };
  let defaultCustomLinkIcon = 'fas fa-link';

  let styles = styleTypes[styleType] ?? styleTypes[2];
  let specialSettings = styleType === 0 ? styleType0LinkSettings : {};
  let socials = [
    'github',
    'linkedin',
    'duolingo',
    'twitter',
    'instagram',
    'threads',
    'facebook',
    'bluesky',
    'line',
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

  // custom links
  if (themeSocials.custom_links) {
    let linkStyle = styles;
    if (styleType == 0) {
      linkStyle += ' ' + specialSettings.custom_links;
    }
    themeSocials.custom_links.forEach(function (linkConfig) {
      if (linkConfig.url) {
        let icon = linkConfig.icon ?? defaultCustomLinkIcon;

        htmlString += '<a href="' + linkConfig.url + '" class="' + linkStyle + '">';
        htmlString += '<i class="' + icon + '"></i>';
        htmlString += '</a>';
      }
    });
  }

  return htmlString;
});

