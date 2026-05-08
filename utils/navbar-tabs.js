const tabs = [
    {
        href: "./todo-list/index.htm",
        title: "Simple"
    },
    {
        href: "./goal-engine/index.htm",
        title: "Goals"
    },
    {
        href: "./progress-dashboard/index.htm",
        title: "Progress"
    },
    {
        href: "./note-hub/index.htm",
        title: "Note Hub"
    },
    {
        href: "./task-manager/index.htm",
        title: "Manager"
    },
    {
        href: "./project-pulse/index.htm",
        title: "Projects"
    },
    {
        href: "./workstream-board/index.htm",
        title: "WorkStream"
    },

];

export default function createTabs() {
    const mainNavbar = document.getElementById("main-navbar");
    const tabsUl = document.createElement("ul");

    tabs.forEach(tab => {
        const li = document.createElement("li");
        const navbarAtag = document.createElement("a");
        navbarAtag.innerText = tab.title;
        navbarAtag.setAttribute("href", tab.href);
        li.appendChild(navbarAtag);
        tabsUl.appendChild(li);
    });
    mainNavbar.appendChild(tabsUl);
    return mainNavbar;
};