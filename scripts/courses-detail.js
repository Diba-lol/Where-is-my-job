document.addEventListener("DOMContentLoaded", function () {
	// Keep all course content in one place so the detail page can be reused.
	const courses = {
		"data-science": {
			title: "Data Science",
			category: "DATA & ANALYTICS",
			subtitle: "Turn data into decisions, products, and your next opportunity.",
			image: "../assests/data-science.png",
			color: "green",
			level: "Beginner",
			duration: "16 weeks",
			description: "Build a strong foundation in data science through practical Python workflows, SQL analysis, and clear data storytelling. You will learn by solving the kinds of problems teams work on every day.",
			learnings: ["Clean, explore, and analyze real-world datasets", "Write practical Python and SQL for data work", "Create dashboards and communicate useful insights", "Prepare for technical and AI mock interviews"],
			project: "Create an end-to-end analytics portfolio project: from messy source data to a decision-ready Tableau dashboard and a concise business recommendation.",
			skills: ["Python", "SQL", "Tableau", "Pandas", "Statistics"]
		},
		"ai-ml": {
			title: "Artificial Intelligence & Machine Learning",
			category: "AI & MACHINE LEARNING",
			subtitle: "Learn to build, evaluate, and explain useful intelligent systems.",
			image: "../assests/AI.png",
			color: "pink",
			level: "Intermediate",
			duration: "20 weeks",
			description: "Move from machine learning concepts to working models with a practical curriculum covering model development, evaluation, and deployment thinking.",
			learnings: ["Build supervised and deep learning models", "Use TensorFlow and PyTorch for practical experiments", "Evaluate models and reduce bias and overfitting", "Explain your work in interviews and portfolio reviews"],
			project: "Train and deploy a prediction service with a documented experiment trail, a model evaluation report, and a simple user-facing demo.",
			skills: ["TensorFlow", "PyTorch", "Python", "Deep Learning", "Model Evaluation"]
		},
		"full-stack": {
			title: "Full Stack Web Development",
			category: "WEB DEVELOPMENT",
			subtitle: "Ship polished products from the first component to production.",
			image: "../assests/full-stack.png",
			color: "blue",
			level: "Beginner",
			duration: "24 weeks",
			description: "Learn how modern web products are planned, built, tested, and deployed. You will work across the browser, server, and data layers to become a confident product-minded developer.",
			learnings: ["Build accessible responsive interfaces with React", "Design APIs and backend services with Node", "Work with databases, authentication, and deployment", "Collaborate through Git and production-style workflows"],
			project: "Build and launch a full-stack application with a React interface, a Node API, persistent data, authentication, and a polished README.",
			skills: ["React", "Node.js", "JavaScript", "APIs", "Tailwind"]
		},
		"embedded-iot": {
			title: "Embedded Systems & IoT",
			category: "SYSTEMS & CLOUD",
			subtitle: "Connect hardware, firmware, and cloud systems with confidence.",
			image: "../assests/UI-UX.png",
			color: "orange",
			level: "Advanced",
			duration: "18 weeks",
			description: "Understand the complete embedded product loop, from microcontroller firmware and communication protocols to connected device behavior and debugging.",
			learnings: ["Write efficient C++ firmware for microcontrollers", "Use MQTT, SPI, I2C, and UART protocols", "Debug systems with practical lab techniques", "Connect device data to reliable cloud services"],
			project: "Design a connected IoT prototype that collects sensor data, communicates securely, and exposes a useful monitoring view.",
			skills: ["C++", "Microcontrollers", "IoT", "Firmware", "MQTT"]
		},
		"ui-ux": {
			title: "UI/UX Product Design",
			category: "DESIGN",
			subtitle: "Design digital products people can understand and enjoy using.",
			image: "../assests/UI-UX.png",
			color: "purple",
			level: "Beginner",
			duration: "12 weeks",
			description: "Learn a practical product design process that connects user research, interaction design, visual systems, and clear communication with engineering teams.",
			learnings: ["Plan interviews and turn research into insights", "Create flows, wireframes, and interactive prototypes", "Build a consistent design system in Figma", "Present decisions with a compelling case study"],
			project: "Take a real product brief from research to a tested high-fidelity prototype and publish the process as a portfolio case study.",
			skills: ["Figma", "UX Research", "Prototyping", "Wireframing", "Design Systems"]
		},
		"cloud-devops": {
			title: "Cloud & DevOps Engineering",
			category: "SYSTEMS & CLOUD",
			subtitle: "Build delivery systems that keep modern products moving.",
			image: "../assests/full-stack.png",
			color: "blue",
			level: "Intermediate",
			duration: "16 weeks",
			description: "Develop the practical cloud and automation skills needed to deploy reliable applications, improve developer workflows, and operate production-like systems.",
			learnings: ["Deploy applications on AWS cloud services", "Containerize systems with Docker", "Automate CI/CD and infrastructure workflows", "Monitor services and respond to common failures"],
			project: "Create a deployment pipeline for a containerized application with infrastructure notes, monitoring, and a recovery runbook.",
			skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"]
		},
		"business-analytics": {
			title: "Business Analytics",
			category: "DATA & ANALYTICS",
			subtitle: "Turn business questions into clear, decision-ready insight.",
			image: "../assests/data-science.png",
			color: "green",
			level: "Intermediate",
			duration: "14 weeks",
			description: "Learn how to frame business problems, work with operational data, and communicate findings through dashboards that help people make better decisions.",
			learnings: ["Translate business questions into measurable metrics", "Use Excel, SQL, and Power BI together", "Build dashboards for different stakeholders", "Tell a concise story with data and evidence"],
			project: "Analyze a multi-table business dataset and deliver a Power BI dashboard with an executive summary and prioritized recommendations.",
			skills: ["Power BI", "Excel", "SQL", "Data Visualization", "Metrics"]
		},
		backend: {
			title: "Backend Engineering",
			category: "WEB DEVELOPMENT",
			subtitle: "Design dependable services, APIs, and data systems.",
			image: "../assests/AI.png",
			color: "pink",
			level: "Advanced",
			duration: "20 weeks",
			description: "Build the engineering judgment behind reliable backend systems, from API design and data modeling to testing, performance, and production debugging.",
			learnings: ["Design maintainable REST APIs and services", "Choose database patterns for real product needs", "Write testable Java and Python backend code", "Prepare for backend system design interviews"],
			project: "Build a production-style service with authentication, documented APIs, a relational data model, automated tests, and performance notes.",
			skills: ["Java", "Python", "APIs", "Databases", "System Design"]
		}
	};

	// Read the selected course from the URL, with Data Science as the fallback.
	const params = new URLSearchParams(window.location.search);
	const course = courses[params.get("course")] || courses["data-science"];
	const detailCard = document.getElementById("courseDetail");

	// Fill the static page structure with the selected course's content.
	document.title = `${course.title} | Where Is My Job`;
	document.getElementById("courseCategory").textContent = course.category;
	document.getElementById("courseTitle").textContent = course.title;
	document.getElementById("courseSubtitle").textContent = course.subtitle;
	document.getElementById("courseImage").src = course.image;
	document.getElementById("courseImage").alt = `${course.title} illustration`;
	document.getElementById("courseDescription").textContent = course.description;
	document.getElementById("courseProject").textContent = course.project;
	document.getElementById("courseLevel").textContent = course.level;
	document.getElementById("courseDuration").textContent = course.duration;
	detailCard.classList.add(`detail-${course.color}`);

	// Build the learning outcomes and skill tags from the selected course data.
	document.getElementById("courseLearnings").innerHTML = course.learnings.map(function (learning) {
		return `<li>${learning}</li>`;
	}).join("");
	document.getElementById("courseSkills").innerHTML = course.skills.map(function (skill) {
		return `<span>${skill}</span>`;
	}).join("");
});
