import $ from "jquery";import MobileNav from './modules/MobileNav';import RevealOnScroll from "./modules/waypoint";import StickyHeader from "./modules/stickyHeader";import Modal from "./modules/modal";window.onload = (function(){    "use strict";    const mobileMenu = new MobileNav();    new RevealOnScroll($(".features__block"), "85%");    new RevealOnScroll($(".testimonial__block"), "60%");    const stickyHeader = new StickyHeader();    const modal = new Modal();}());