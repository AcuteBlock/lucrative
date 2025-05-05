
//animation script
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = [
        ".lucrative-token",
        ".hero h1",
        "nav",
        ".hero p",
        ".header-text",
        ".hero button",
        ".roadmap-item",
        ".roadmap-text p",
        ".second-paragraph",
        ".third-paragraph",
        ".forth-paragraph",
        ".fifth-paragraph",
        ".roadmap-image",
        ".tokenomics-info",
        ".tokenomics-chart",
        "#token-info",
        ".contact h2",
        ".contact p",
        ".form-content",
        "#community h2",
        "footer"
    ];

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    });

    elementsToAnimate.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) observer.observe(element);
    });


   //tokenomics chart script
const chartElement = document.getElementById("tokenomicsChart");
if (chartElement) {
    const ctx = chartElement.getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Open Market Circulation"],
            datasets: [
                {
                    label: "online tutorials subjects",
                    data: [100],
                    backgroundColor: ["#505050"], // Updated to match original grey theme
                    borderColor: ["#111111"],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#505050", // Match the pie chart segment color
                        font: {
                            family: "Michroma",
                            size: 14
                        },
                        padding: 20,
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '100% Open Market Circulation';
                        }
                    }
                }
            }
        }
    });
}



    // Copy Token Functionality
    document.getElementById("svgIcon").addEventListener("click", () => {
        const tokenText = document.getElementById("token").innerText;
        navigator.clipboard.writeText(tokenText).then(() => {
            alert("Token copied to clipboard!"); 
        }).catch(err => console.error("Failed to copy:", err));
    });
});

    // Burger Menu for Mobile
    // script.js
        const burger = document.getElementById('burger');
        const nav = document.getElementById('small-nav-links');
        const modal = document.getElementsByClassName('modal-wrapper')[0];

        burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        modal.classList.toggle('active');
        });

