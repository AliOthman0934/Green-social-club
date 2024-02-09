gsap.from(".logo-text", { duration: 4, y: "-200", ease: "bounce" });

gsap.from(".head1", {
    duration: 2,
    x: "-1000",
    scrollTrigger: { trigger: ".head1", toggleActions: "restart none none none" }
});

gsap.from(".head2", {
    duration: 2,
    x: "-1000",
    scrollTrigger: { trigger: ".head2", toggleActions: "restart none none none" }
});

gsap.from(".head3", {
    duration: 2,
    x: "-1000",
    scrollTrigger: { trigger: ".head3", toggleActions: "restart none none none" }
});

gsap.from(".box1-col1", {
    duration: 3,
    x: "-1000",
    scrollTrigger: {
        trigger: ".box1-col1",
        toggleActions: "restart none none none"
    }
});

gsap.from(".box3-col3", {
    duration: 4,
    x: "-1000",
    scrollTrigger: {
        trigger: ".box3-col3",
        toggleActions: "restart none none none"
    }
});

gsap.from(".box3-col4", {
    duration: 4,
    x: "1000",
    scrollTrigger: {
        trigger: ".box3-col4",
        toggleActions: "restart none none none"
    }
});

function setNewImag1() {
    document.getElementById("img1").src =
        "https://i.postimg.cc/25kW43LP/IMG-5508.jpg";
    document.getElementById("img1").style.height = "300px";
}

function setOldImag1() {
    document.getElementById("img1").src =
        "https://i.postimg.cc/KvcbNSMt/athena5.jpg";
    document.getElementById("img1").style.height = "400px";
}

function setNewImag2() {
    document.getElementById("img2").src =
        "https://i.postimg.cc/yN2R3KcR/IMG-5513.jpg";
}

function setOldImag2() {
    document.getElementById("img2").src = "https://i.postimg.cc/hvbKrNMC/2.png";
}

function setNewImag3() {
    document.getElementById("img3").src =
        "https://i.postimg.cc/Y2DH6SjT/Screenshot-2023-07-15-at-15-15-22-e1689430646731.png";
    document.getElementById("img3").style.height = "300px";
}

function setOldImag3() {
    document.getElementById("img3").src =
        "https://i.postimg.cc/hvrqxTP6/athena6.jpg";
    document.getElementById("img3").style.height = "400px";
}

function setNewImag4() {
    document.getElementById("img4").src =
        "https://stcroixvalleymag.com/wp-content/uploads/2023/07/IMG_4551.jpg";
}

function setOldImag4() {
    document.getElementById("img4").src =
        "https://i.postimg.cc/6pnX1mVX/IMG-8572.jpg";
}
