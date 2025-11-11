// 项目数据
const projects = [
    {
        id: 1,
        title: "AI 智能简历优化器",
        description: "基于 AI 技术的智能简历优化工具，使用 Python + FastAPI + React + SQLite + Ollama 构建。支持本地部署、一键启动，可根据职位描述进行针对性优化。",
        tags: ["Python", "FastAPI", "React", "TypeScript", "Ollama", "SQLite"],
        image: "💼",
        demoUrl: "https://github.com/yourusername/resume-ai-optimizer",
        codeUrl: "https://github.com/yourusername/resume-ai-optimizer",
        featured: true
    },
    {
        id: 2,
        title: "项目示例 2",
        description: "这是一个示例项目，展示您的其他作品。您可以在这里添加更多项目信息。",
        tags: ["React", "Node.js", "MongoDB"],
        image: "🚀",
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 3,
        title: "项目示例 3",
        description: "另一个示例项目，用于展示您的多样化技能和项目经验。",
        tags: ["Vue.js", "Python", "Docker"],
        image: "⚡",
        demoUrl: "#",
        codeUrl: "#"
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderProjects();
    initSmoothScroll();
});

// 导航栏功能
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // 点击菜单项后关闭移动菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// 渲染项目
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// 创建项目卡片
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const tagsHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-image">${project.image}</div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${tagsHTML}</div>
            <div class="project-links">
                <a href="${project.demoUrl}" class="project-link project-link-primary" target="_blank" rel="noopener noreferrer">
                    查看演示
                </a>
                <a href="${project.codeUrl}" class="project-link project-link-secondary" target="_blank" rel="noopener noreferrer">
                    查看代码
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有项目卡片
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
});

