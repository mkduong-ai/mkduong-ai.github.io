// Teachings and Supervised Theses Listing Script
import { courses, theses } from './teachings-data.js';

// State
let currentTab = 'all'; // 'all', 'courses', 'theses'
let courseLevelFilter = 'all'; // 'all', 'Master', 'Bachelor'
let thesisDegreeFilter = 'all'; // 'all', 'Master', 'Bachelor', 'Project'
let thesisStatusFilter = 'all'; // 'all', 'Ongoing', 'Completed'
let searchQuery = '';

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('../home/footer.html');
        const html = await response.text();
        const footerEl = document.getElementById('footer-section');
        if (footerEl) {
            footerEl.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Generate Course HTML Card - Linear Chronological Item
function renderCourseCard(course) {
    const levelClass = course.level.toLowerCase().includes('master') ? 'master' : (course.level.toLowerCase().includes('bachelor') ? 'bachelor' : '');
    const semesterBadges = (course.semesters || [course.semester]).map(s => `<span class="semester-badge">${s}</span>`).join('');
    
    return `
        <div class="col s12" style="margin-bottom: 12px;">
            <div class="course-linear-item">
                <div class="course-linear-header">
                    <div class="course-linear-title-group">
                        <span class="course-level-pill ${levelClass}">${course.level}</span>
                        <h4 class="course-linear-title">${course.title}</h4>
                        <span class="course-role-badge">${course.role}</span>
                        <div class="course-institution-compact">
                            <i class="material-icons">account_balance</i>
                            <span>${course.institution}</span>
                        </div>
                    </div>
                    <div class="course-semesters-badges">
                        ${semesterBadges}
                    </div>
                </div>
                <p class="course-linear-desc">${course.description}</p>
                <div class="course-topics-compact">
                    <span class="topics-label">Topics:</span>
                    <div class="topic-chips-compact">
                        ${course.topics.map(topic => `<span class="topic-chip-compact">${topic}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Thesis HTML Card - Space Efficient Card
function renderThesisCard(item) {
    const badgeClass = item.degreeCategory === 'Master' ? 'badge-master' : (item.degreeCategory === 'Bachelor' ? 'badge-bachelor' : 'badge-project');
    const statusClass = item.status === 'Ongoing' ? 'status-ongoing' : 'status-completed';

    return `
        <div class="thesis-card">
            <div class="thesis-card-top">
                <span class="thesis-badge ${badgeClass}">${item.degree}</span>
                <span class="thesis-status-pill ${statusClass}">${item.status === 'Ongoing' ? '• Ongoing' : 'Completed'}</span>
            </div>
            <h5 class="thesis-title">${item.title}</h5>
            <div class="thesis-meta">
                <i class="material-icons" style="font-size: 0.95rem;">school</i>
                <span>${item.institution}</span>
            </div>
            <div class="thesis-tags">
                ${item.tags.map(t => `<span class="thesis-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
}

// Render Courses Section
function renderCourses() {
    const container = document.getElementById('courses-container');
    if (!container) return;

    let filtered = courses.filter(c => {
        const matchesLevel = courseLevelFilter === 'all' || c.level.toLowerCase().includes(courseLevelFilter.toLowerCase());
        const matchesSearch = !searchQuery || 
            c.title.toLowerCase().includes(searchQuery) ||
            c.semester.toLowerCase().includes(searchQuery) ||
            c.topics.some(t => t.toLowerCase().includes(searchQuery));
        return matchesLevel && matchesSearch;
    });

    const countEl = document.getElementById('courses-count');
    if (countEl) countEl.textContent = `${filtered.length} Course${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col s12 center-align" style="padding: 40px 0;">
                <i class="material-icons grey-text" style="font-size: 3rem;">search_off</i>
                <p class="grey-text">No courses found matching your criteria.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(renderCourseCard).join('');
}

// Render Theses Section
function renderTheses() {
    const container = document.getElementById('theses-container');
    if (!container) return;

    let filtered = theses.filter(t => {
        const matchesDegree = thesisDegreeFilter === 'all' || t.degreeCategory === thesisDegreeFilter;
        const matchesStatus = thesisStatusFilter === 'all' || t.status === thesisStatusFilter;
        const matchesSearch = !searchQuery ||
            t.title.toLowerCase().includes(searchQuery) ||
            t.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
            t.degree.toLowerCase().includes(searchQuery);
        return matchesDegree && matchesStatus && matchesSearch;
    });

    const countEl = document.getElementById('theses-count');
    if (countEl) countEl.textContent = `${filtered.length} Theses / Projects`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="center-align" style="padding: 40px 0;">
                <i class="material-icons grey-text" style="font-size: 3rem;">search_off</i>
                <p class="grey-text">No theses found matching your criteria.</p>
            </div>
        `;
        return;
    }

    // Separate into ongoing and completed groups if viewing all or relevant filters
    const ongoingTheses = filtered.filter(t => t.status === 'Ongoing');
    const completedMaster = filtered.filter(t => t.status === 'Completed' && t.degreeCategory === 'Master');
    const completedBachelor = filtered.filter(t => t.status === 'Completed' && t.degreeCategory === 'Bachelor');
    const completedProject = filtered.filter(t => t.status === 'Completed' && t.degreeCategory === 'Project');

    let html = '';

    if (ongoingTheses.length > 0) {
        html += `
            <div class="thesis-group-title">
                <i class="material-icons orange-text">pending_actions</i>
                <span>Ongoing Theses & Projects (${ongoingTheses.length})</span>
            </div>
            <div class="theses-grid">
                ${ongoingTheses.map(renderThesisCard).join('')}
            </div>
        `;
    }

    if (completedMaster.length > 0) {
        html += `
            <div class="thesis-group-title">
                <i class="material-icons indigo-text">workspace_premium</i>
                <span>Completed Master Theses (${completedMaster.length})</span>
            </div>
            <div class="theses-grid">
                ${completedMaster.map(renderThesisCard).join('')}
            </div>
        `;
    }

    if (completedBachelor.length > 0) {
        html += `
            <div class="thesis-group-title">
                <i class="material-icons teal-text">school</i>
                <span>Completed Bachelor Theses (${completedBachelor.length})</span>
            </div>
            <div class="theses-grid">
                ${completedBachelor.map(renderThesisCard).join('')}
            </div>
        `;
    }

    if (completedProject.length > 0) {
        html += `
            <div class="thesis-group-title">
                <i class="material-icons amber-text text-darken-3">assignment</i>
                <span>Completed Project Works (${completedProject.length})</span>
            </div>
            <div class="theses-grid">
                ${completedProject.map(renderThesisCard).join('')}
            </div>
        `;
    }

    container.innerHTML = html;
}

// Update View Based on Filters
function updateView() {
    const coursesSection = document.getElementById('courses-section-wrapper');
    const thesesSection = document.getElementById('theses-section-wrapper');

    if (currentTab === 'all') {
        if (coursesSection) coursesSection.style.display = 'block';
        if (thesesSection) thesesSection.style.display = 'block';
    } else if (currentTab === 'courses') {
        if (coursesSection) coursesSection.style.display = 'block';
        if (thesesSection) thesesSection.style.display = 'none';
    } else if (currentTab === 'theses') {
        if (coursesSection) coursesSection.style.display = 'none';
        if (thesesSection) thesesSection.style.display = 'block';
    }

    renderCourses();
    renderTheses();
}

// Initialize Page
async function init() {
    // Sidenav initialization
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Load footer
    await loadFooter();

    // Tab buttons
    const tabButtons = document.querySelectorAll('.view-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.getAttribute('data-tab');
            updateView();
        });
    });

    // Degree level filter buttons
    const degreeButtons = document.querySelectorAll('.degree-filter-btn');
    degreeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            degreeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const degree = btn.getAttribute('data-degree');
            thesisDegreeFilter = degree;
            courseLevelFilter = degree === 'Project' ? 'all' : degree;
            updateView();
        });
    });

    // Search Input
    const searchInput = document.getElementById('teachings-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            updateView();
        });
    }

    // Initial Render
    updateView();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
