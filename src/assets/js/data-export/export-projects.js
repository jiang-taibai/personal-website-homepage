import {logo, icon, projects_cover} from './cdn-resource'

export const DevelopmentBooster = {
    covers: projects_cover.DevelopmentBooster,
    title: 'Development Booster',
    content: `👾游戏有加速器，💻开发也有加速器。开发加速器 (Development Booster) 是一个主攻镜像设置的 GUI 工具，它能够帮助你快速的完成镜像设置。
项目特点：低门槛、操作直观、一站式。`,
    links: [{
        'url': 'https://github.com/jiang-taibai/development-booster',
        'type': 'GitHub',
        'icon': logo.github,
    }, {
        'url': 'https://gitee.com/jiang-taibai/development-booster',
        'type': 'Gitee',
        'icon': logo.gitee,
    }]
}

export const ImageSpotlight = {
    covers: projects_cover.ImageSpotlight,
    title: 'Image Spotlight',
    content: `ImageSpotlight（图像聚光灯）实现了新式互联网图像浏览模式，并实现两大必要子组件：编辑器与渲染器。通过 Image Spotlight，你可以在多目标图、流程图以及各种复杂结构图像之上搭建聚光灯舞台，大大提高用户浏览图片的体验
同时开放在线体验（Demo）网站，组件使用文档（Doc）。你可以将此组件融合进你的项目中，提高用户幸福度。`,
    links: [{
        'url': 'https://github.com/jiang-taibai/vue2-image-spotlight',
        'type': 'GitHub',
        'icon': logo.github,
    }, {
        'url': 'https://gitee.com/jiang-taibai/vue2-image-spotlight',
        'type': 'Gitee',
        'icon': logo.gitee,
    }, {
        'url': 'https://jiang-taibai.github.io/vue2-image-spotlight-example/',
        'type': '在线体验',
        'icon': icon.website,
    }, {
        'url': 'https://jiang-taibai.github.io/vue2-image-spotlight/',
        'type': 'Doc',
        'icon': icon.tutorial,
    }]
}

export const DocsifyMerger = {
    covers: projects_cover.DocsifyMerger,
    title: 'Docsify Merger',
    content: `Docsify Merger 是一款将多个Markdown文档合并为一个文档的工具。 能够根据 "_sidebar.md" 文件所定义的文档结构，重新合并为单一的Markdown文档。 
项目特点：维持原有的层级关系、统一标题编号、去除内链、高度自定义、较高容错率`,
    links: [{
        'url': 'https://github.com/jiang-taibai/docsify-merger',
        'type': 'GitHub',
        'icon': logo.github,
    }, {
        'url': 'https://gitee.com/jiang-taibai/docsify-merger',
        'type': 'Gitee',
        'icon': logo.gitee,
    }]
}

export const MarkdownRenumber = {
    covers: projects_cover.MarkdownRenumber,
    title: 'Markdown Renumber',
    content: `Markdown 文档标题序号一键式重排版的 WebUI 工具，高度自定义去除与生成策略。
项目特点：一键式处理、编号的去除与生成、全流程操作友好、高度自定义、安全可靠`,
    links: [{
        'url': 'https://github.com/jiang-taibai/markdown-renumber',
        'type': 'GitHub',
        'icon': logo.github,
    }, {
        'url': 'https://gitee.com/jiang-taibai/markdown-renumber',
        'type': 'Gitee',
        'icon': logo.gitee,
    }, {
        'url': 'https://jiang-taibai.github.io/markdown-renumber/',
        'type': '在线使用',
        'icon': logo.MarkdownRenumber,
    },]
}

export const ToBeContinued = {
    covers: projects_cover.ToBeContinued,
    title: 'To Be Continued',
    content: 'Everything is possible. To Be Continued...',
    links: []
}


export const projects = [DevelopmentBooster, ImageSpotlight, DocsifyMerger, MarkdownRenumber]