const isStatsPublic = false;
const isTimelinePublic = false;

document.addEventListener("DOMContentLoaded", function () {

    if (!isStatsPublic) {
        const statsLink = document.getElementById("stats-link");

        statsLink.removeAttribute("href");
        statsLink.textContent = "stats.txt (private)";
    }

    if (!isTimelinePublic) {
        const timelineLink = document.getElementById("timeline-link");

        timelineLink.removeAttribute("href");
        timelineLink.textContent = "timeline (private)";
    }

});