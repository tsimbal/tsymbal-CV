<template>
	<div class="cv-app" :class="{ 'dark-mode': darkMode }">
		<div ref="cvContent" class="cv-container">
			<!-- Header with theme toggle -->
			<header class="cv-header">
				<div class="theme-toggle" @click="darkMode = !darkMode">
					<Icon
						:icon="darkMode ? 'mdi:weather-sunny' : 'mdi:weather-night'"
						width="24" />
				</div>
				<div class="profile-section">
					<div class="avatar-placeholder">
						<picture>
							<source
								srcset="~/assets/images/avatar.jpg"
								src="~/assets/images/avatar.jpg" />
							<img alt="avatar" src="~/assets/images/avatar.jpg" />
						</picture>
					</div>
					<div>
						<h1>{{ personalInfo.name }}</h1>
						<h2>{{ personalInfo.title }}</h2>
						<div class="badges">
							<span class="badge vue">Vue Expert</span>
							<!-- <span class="badge nuxt">Nuxt Certified</span> -->
							<span class="badge frontend">Frontend Architect</span>
						</div>
					</div>
				</div>

				<div class="contact-bar">
					<a
						v-for="(item, key) in contactItems"
						:key="key"
						:href="item.link"
						target="_blank">
						<Icon :icon="item.icon" width="18" />
						<span>{{ item.value }}</span>
					</a>
				</div>
			</header>

			<!-- Skills Progress Bars -->
			<section class="cv-section">
				<h3><Icon icon="mdi:code-json" /> About me</h3>
				<p class="description-text">
					Passionate and detail-oriented Front-End Developer with 3+ years of
					experience in building responsive, high-performance web applications
					using Vue.js. Skilled in developing dynamic user interfaces,
					optimizing front-end performance, and integrating with RESTful APIs.
					Strong expertise in Vue 2/3, Pinia/Vuex, Vue Router, PWA, and modern
					JavaScript (ES6+). Committed to writing clean, maintainable code while
					following best practices in UI/UX design and web accessibility.
				</p>
			</section>

			<section class="cv-section">
				<h3><Icon icon="mdi:code-json" /> What I Bring</h3>
				<ul class="accomplishments">
					<li v-for="(item, i) in myPropose" :key="i">
						<Icon icon="mdi:check-circle" class="accomplishment-icon" />
						{{ item }}
					</li>
				</ul>
			</section>

			<section class="cv-section">
				<h3><Icon icon="mdi:code-json" /> Core Competencies</h3>
				<div class="skills-progress">
					<div v-for="skill in coreSkills" :key="skill.name" class="skill-item">
						<div class="skill-info">
							<span>{{ skill.name }}</span>
							<span>{{ skill.level }}%</span>
						</div>
						<div class="progress-bar">
							<div
								class="progress-fill"
								:style="{ width: skill.level + '%' }"></div>
						</div>
					</div>
				</div>
			</section>

			<!-- Experience Timeline -->
			<section class="cv-section">
				<h3><Icon icon="mdi:briefcase-variant" /> Professional Journey</h3>
				<div class="timeline">
					<div
						v-for="(job, index) in experience"
						:key="index"
						class="timeline-item">
						<div class="timeline-dot"></div>
						<div class="timeline-content">
							<div class="job-header">
								<h4>{{ job.position }}</h4>
								<div class="company">{{ job.company }}</div>
								<div class="period">{{ job.period }}</div>
							</div>
							<ul class="accomplishments">
								<li v-for="(item, i) in job.responsibilities" :key="i">
									<Icon icon="mdi:check-circle" class="accomplishment-icon" />
									{{ item }}
								</li>
							</ul>
							<div class="tech-stack">
								<span
									v-for="(tech, ti) in job.technologies"
									:key="ti"
									class="tech-tag">
									{{ tech }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Projects Showcase -->
			<section class="cv-section">
				<h3><Icon icon="mdi:rocket-launch" /> Vue/Nuxt Projects</h3>
				<div class="projects-grid">
					<div
						v-for="(project, index) in projects"
						:key="index"
						class="project-card">
						<div class="project-header">
							<h4>{{ project.name }}</h4>
							<div class="project-links">
								<a v-if="project.demo" :href="project.demo" target="_blank">
									<Icon icon="mdi:web" /> Live Demo
								</a>
								<a v-if="project.github" :href="project.github" target="_blank">
									<Icon icon="mdi:github" /> Code
								</a>
							</div>
						</div>
						<p class="project-description">{{ project.description }}</p>
						<div class="project-tech">
							<span v-for="(tech, ti) in project.technologies" :key="ti">
								{{ tech }}
							</span>
						</div>
					</div>
				</div>
			</section>

			<div class="action-buttons">
				<button @click="generatePDF" class="download-btn pulse">
					<Icon icon="mdi:file-pdf-box" /> Export PDF
				</button>
				<button @click="printCV" class="print-btn">
					<Icon icon="mdi:printer" /> Print CV
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const cvContent = ref(null);
const darkMode = ref(false);

const personalInfo = {
	name: 'Tsymbal Ivan',
	title: 'Vue.js/Nuxt.js Developer',
};

const contactItems = {
	email: {
		icon: 'mdi:email',
		value: 'tsimbal1999@gmail.com',
		link: 'mailto:tsimbal1999@gmail.com',
	},
	phone: {
		icon: 'mdi:phone',
		value: '+380968632608',
		link: 'tel:+380968632608',
	},
	// github: {
	// 	icon: 'mdi:github',
	// 	value: 'github.com/vue-master',
	// 	link: 'https://github.com/vue-master',
	// },
	linkedin: {
		icon: 'mdi:linkedin',
		value: 'linkedin.com',
		link: 'https://linkedin.com/in/ivan-t-62b742115',
	},
	// portfolio: {
	// 	icon: 'mdi:web',
	// 	value: 'vueportfolio.dev',
	// 	link: 'https://vueportfolio.dev',
	// },
};

const coreSkills = [
	{ name: 'Vue.js', level: 95 },
	{ name: 'Nuxt.js', level: 90 },
	{ name: 'JavaScript/TypeScript', level: 92 },
	{ name: 'Vuex/Pinia', level: 88 },
	{ name: 'Vue Router', level: 85 },
	{ name: 'UI/UX Design', level: 80 },
	{ name: 'Performance Optimization', level: 87 },
	{ name: 'HTML5/CSS3', level: 90 },
];

const myPropose = [
	'Strong problem-solving skills and a passion for creating seamless user experiences.',
	'Experience in optimizing applications for speed, scalability, and SEO.',
	'Collaboration with back-end developers and designers to deliver high-quality products.',
	'Continuous learning and adapting to new front-end technologies and trends.',
];

const experience = [
	{
		company: 'Freelance',
		position: 'Front-end Vue.js Developer',
		period: '2022 - 2025',
		technologies: [
			'Vue 3',
			'Nuxt 3',
			'TypeScript',
			'Pinia',
			'HTML5',
			'CSS3',
			'REST APIs',
		],
		responsibilities: [
			'Implemented micro-frontend architecture using Vue/Nuxt',
			'Reduced bundle size by 40% through code splitting optimization',
		],
	},
	{
		company: 'WebPortTechnology',
		position: 'Front-end Vue.js Developer',
		period: '2020 - 2022',
		technologies: [
			'Vue 2',
			'Nuxt 2',
			'Vuex',
			'HTML5',
			'CSS3',
			'REST APIs',
			'WebSocket',
		],
		responsibilities: [
			'Implemented micro-frontend architecture using Vue/Nuxt',
			'Reduced bundle size by 40% through code splitting optimization',
			'Support projects and implements new functional',
		],
	},
];

const projects = [
	{
		name: 'E-commerce Platform',
		description:
			'High-performance Nuxt.js e-commerce platform with SSR and PWA support',
		technologies: ['Nuxt 3', 'Pinia', 'Stripe API', 'Tailwind CSS'],
		github: 'https://github.com/vue-master/ecommerce-platform',
		demo: 'https://vue-store.example.com',
	},
	{
		name: 'Admin Dashboard',
		description: 'Custom Vue 3 admin dashboard with real-time analytics',
		technologies: ['Vue 3', 'D3.js', 'WebSockets', 'JWT Auth'],
		github: 'https://github.com/vue-master/admin-dashboard',
	},
];

const generatePDF = async () => {
	const html2pdf = useNuxtApp().$html2pdf;

	const opt = {
		margin: 10,
		filename: `${personalInfo.name.replace(' ', '_')}_CV.pdf`,
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: {
			scale: 2,
			useCORS: true,
			allowTaint: true,
			logging: true,
		},
		jsPDF: {
			unit: 'mm',
			format: 'a4',
			orientation: 'portrait',
			// hotfixes: ['px_scaling'],
		},
	};

	console.log(cvContent.value);

	html2pdf().set(opt).from(cvContent.value).save();
};

const printCV = () => {
	window.print();
};
</script>
