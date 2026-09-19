
    function showCompany(name) {
        var c = {
            "Google": {
                loc: "Bengaluru • 150k+ employees • 4.5 ★",
                about: "Google is a world leading technology company. We organize the world's information and make it universally accessible and useful. Founded in 1998 by Larry Page and Sergey Brin. We work on Search, Cloud, Android, YouTube, and AI.",
                letter: "G",
                color: "#4285F4",
                banner: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=1200"
            },
            "Zoho": {
                loc: "Chennai • 15k+ employees • 4.4 ★",
                about: "Zoho Corporation is a Chennai-based Indian MNC. Founded by Sridhar Vembu in 1996. We make 55+ cloud-based business applications. We are a fully private company with no external funding. Known for best work culture and no layoffs policy. Our brand colors are Red and Orange.",
                letter: "Z",
                color: "#ff4d00",
                banner: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200"
            },
            "Microsoft": {
                loc: "Bengaluru • 2 Lakh+ employees • 4.5 ★",
                about: "Microsoft Corporation is an American tech giant founded by Bill Gates. We develop Windows, Azure Cloud, Office 365, and Copilot AI. Our mission is to empower every person and every organization on the planet to achieve more.",
                letter: "M",
                color: "#00A4EF",
                banner: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"

            },
            "Amazon": {
                loc: "Hyderabad • 15 Lakh+ employees • 4.0 ★",
                about: "Amazon is the world's largest e-commerce and cloud computing company. Founded by Jeff Bezos in 1994. We work on E-commerce, AWS Cloud, Alexa AI, and Prime Video. Known for customer obsession and innovation.",
                letter: "a",
                color: "#FF9900",
                banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
            },
            "Infosys": {
                loc: "Pune • 3 Lakh+ employees • 4.2 ★ | Founded: 1981 by N.R. Narayana Murthy",
                about: "Infosys is a global leader in next-generation digital services and consulting. Headquarters in Bengaluru. We enable clients in 50+ countries to navigate their digital transformation.\n\nWe have 4 major services: Digital, Cloud, AI, and Data Analytics. We have the best training campus in Mysore - Infosys Mysore campus is world famous. We provide good learning and career growth for freshers.\n\nEmployee-friendly company with good work-life balance. We have offices in Pune, Chennai, Bangalore, and Hyderabad. Best company for freshers to start career and learn corporate culture.",
                letter: "In",
                color: "#007CC3",
                banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
            },
            "Intel": {
                loc: "Bangalore • 1 Lakh+ employees • 4.3 ★ | Founded: 1968 by Robert Noyce",
                about: "Intel Corporation is an American multinational semiconductor company and world's largest chip maker. We create world-changing technology that enriches every person on earth.\n\nWe make Processors like i3, i5, i7, i9, Graphics Cards, and AI chips. Our Bangalore center is the biggest R&D center outside USA. We work on hardware design, embedded systems, and chip manufacturing.\n\nBest company for ECE and Embedded engineers. Good salary and innovation focused. We have good lab facilities and cutting edge technology. Best for hardware lovers.",
                letter: "i",
                color: "#0068B5",
                banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
            },
            "TCS": {
                loc: "Chennai • 6 Lakh+ employees • 4.1 ★ | Founded: 1968 | Tata Group",
                about: "Tata Consultancy Services (TCS) is India's largest IT services company and part of Tata Group. Founded by J.R.D Tata, Headquarters in Mumbai. We provide IT services, consulting, and business solutions to 50+ countries with 50+ years of experience.\n\nWe are known for job security and stability - no layoffs. We work on Java, Cloud, BFSI, and Digital projects. We have offices in Chennai, Mumbai, Pune, and all major cities.\n\nBest company for long-term career growth and stability in India. Good for freshers to learn corporate culture. Tata brand value and trust is very high. Good salary hikes and onsite opportunities.",
                letter: "TCS",
                color: "#e31837",
                banner: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200"
            },
            "Wipro": {
                loc: "Pune • 2.5 Lakh+ employees • 4.0 ★ | Founded: 1945 by Azim Premji",
                about: "Wipro is a leading Indian IT services and consulting company founded by M.H. Premji and run by Azim Premji. Headquarters in Bengaluru. We focus on building innovative solutions for complex digital transformation needs.\n\nWe have services in IT, Consulting, and Business Process Services. We have strong presence in USA and Europe. We work on UI/UX, Cloud, and Digital marketing projects.\n\nBest for UI/UX Designers and freshers to start career. Good work-life balance and learning opportunities. We encourage new ideas and creativity. Wipro is known for good work culture and employee friendly policies. Good for designers to show creativity.",
                letter: "W",
                color: "#7B68EE",
                banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200"
            }
        };

        var d = c[name];
        document.getElementById("d-name").innerText = name;
        document.getElementById("d-name").style.color = d.color;
        document.getElementById("d-loc").innerText = d.loc;
        document.getElementById("d-about").innerText = d.about;
        document.getElementById("d-banner").src = d.banner;
        document.getElementById("d-logo-circle").innerText = d.letter;
        document.getElementById("d-logo-circle").style.background = d.color;
        document.getElementById("details").style.display = "block";
        document.getElementById("details").style.borderColor = d.color;
        document.getElementById("details").scrollIntoView({ behavior: "smooth" });
    }

    function hideCompany() {
        document.getElementById("details").style.display = "none";
    }