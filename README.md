# Miniton

A responsive, flat-design and lightweight [Hexo](http://hexo.io/) theme.

## Summary

- [General](#general)
- [Features](#features)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to use](#how-to-use)
- [Configuration](#configuration)
- [License](#license)

## General

- Version: 0.1
- Comaptibility: Hexo 3 or later

## Features

- Fully responsive
- Configurable navigation menu
- Local search support
- "Buy me a coffee" integration
- Disqus integration
- Google Analytics
- Font Awesome Free icons
- TailwindCSS

## Dependencies

You need to install the following packages or provide the required IDs/usernames for services such as Disqus.

### Packages

- Local search: [next-time/hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb)

### Optional features

- [Disqus](https://disqus.com/)
- [Buy me a coffee](https://buymeacoffee.com/)

### Others

- [Font Awesome Icons](https://fontawesome.com/icons)
- [TailwindCSS](https://tailwindcss.com/)

## Prerequisites

First, Installed [hexo](https://hexo.io/docs/).
Second, create a new hexo blog:

```shell
$ hexo init demo-blog
```

Then navigate into the new directory.

```shell
$ cd ./demo-blog
```

## Installation

1. Clone this theme into the `theme/` directory of your blog.

```shell
# Currently inside demo-blog/
$ git clone https://github.com/bython24680/hexo-theme-miniton.git ./theme/miniton
```

2. Update the `theme` property in `_config.yml` file.

```yml
theme: miniton
```

See [configuration](#configuration) for customization options.

## How to use

1. Create a new page or post using Hexo's command `hexo new [layout] <title>`.

```shell
# Create an "article" page
$ hexo new archive articles

# Create a post named how-to-create-a-hexo-theme with layout "post"
$ hexo new post how-to-create-a-hexo-theme
```

Supported layouts:

- about
- archive
- category
- page
- post
- tags

2. Build the blog and generate files.

```shell
$ hexo clean & hexo g
```

3. Check the blog locally.

```shell
$ hexo serve
```

4. [Deploy the blog](https://hexo.io/docs/one-command-deployment.html)

## Configuration

Add the following configurations under the `theme_config` section in your blog's `_config.yml` file.

### Navigation menu

A menu item is a key-value pair of display text and its link.

```yml
menu:
  - Home: /
  - Articles: /archives
```

### Site information

```yml
avatar: URL of author avatar
author_title: The author's title
author_bio: The author's bio
start_date: The blog's start date (used to calculate days since creation), format is Y-m-d
default_article_cover_image: Default cover image for posts
default_social_image: Default image for social sharing
```

This theme supports two types of image URLs: external links or local images.
For local images, use a relative path like `/assets/images/here-is-the-image-name.jpg`.

### Favicon

```yml
fav_icon: The common favicon displayed in the browser tab
shortcut_icon: The shortcut icon
apple_touch_icon: The apple touch icon
```

### Reading progress bar

When enabled, a thin full-width progress bar appears at the top of every pages. Enabled by default.

```yml
reading_progress_bar:
  enabled: true
  height: Height of progress bar (default is 4px)
  dard_mode_color: Color of the bar in dark mode.
  light_mode_color: Color of the bar in light mode.
```

### Hero banner (Home page)

The hero banner appears only on the homepage. Enabled by default.

```yml
hero:
  enabled: true
  title: The hero title
  subtitle: The hero subtitle
  bg_image: Background image. (Same rule as site cover image)
  bg_image_color_type: light or dark - determines text color
  btn_text: Button text
  btn_link: Button link
```

### Social links

Displayed in the sidebar under author information. A field is hidden if its value is empty.

```yml
social:
  github: URL of your GitHub profile
  twitter: URL of your X (Twitter) profile
  email: Email address (format is "mailto:your-email")
```

### Sidebar settings

Each block in the sidebar is enabled by default. Disabled blocks will not appear.

```yml
sidebar_settings:
  site_info:
    enabled: true
    title: "網站資訊"
  latest_posts:
    enabled: true
    title: "最新文章"
    post_count: 5
  recommended_posts:
    enabled: true
    title: "站長推薦"
    post_count: 3
    tag: featured
  tag_list:
    enabled: true
    title: "標籤雲"
  calendar_this_month:
    enabled: true
    title: "本月日曆"

sidebar_post_settings:
  related_posts:
    enabled: true
    title: "相關文章"
    post_count: 5
  latest_posts:
    enabled: true
    title: "最新文章"
    post_count: 5
```

### Content settings

```yml
content_settings:
  # The settings of page "/archives"
  archives:
    page_title: "歷史歸檔"
    posts_per_page: 10
  # The settings of page "/categories"
  topics:
    page_title: "所有主題"
    page_description: "探索我們涵蓋的各種主題，從前端開發到數位生活，找到你感興趣的內容。"
    no_topic_text: "目前沒有主題可供瀏覽。"
  # The settings of page "/tags"
  tags:
    page_title: "標籤雲"
    item_name: "標籤"
```

### Footer settings

The footer grid adjusts automatically based on enabled blocks, with a minimum of 3 columns.

```yml
footer:
  hot_topics:
    enabled: true
    title: "熱門主題"
    topics:
      - 前端開發
      - 設計靈感
      - 生產力工具
  recommended_links:
    enabled: true
    title: "推薦連結"
    links:
      - name: "Hexo"
        url: "https://hexo.io/"
      - name: "Miniton 主題"
        url: "https://github.com/bython24680/hexo-theme-miniton"
  description: "專注於分享網頁開發技術、設計靈感與數位生產力工具。"
  buy_coffee_link: ""
```

### Categories map

Assign a cover image and descriptoin to each category.

```yml
categories_map:
  # "default" is category name
  default:
    img: Image link (same rule as site cover image)
    desc: Description of the category
```

### Others

```yml
disqus_shortname: Your Disqus shortname
google_analytics: Your Google Analytics ID (ormat is G-XXXXXXX)
```

## License

Apache 2.0