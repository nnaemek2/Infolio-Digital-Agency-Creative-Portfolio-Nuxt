<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/light/assets/imgs/logo-light.png" alt="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu one-scroll ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <img src="/light/assets/imgs/logo-light.png" alt="" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Home"> Home </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a href="/light/home-main" class="sub-link">
                        Main Home
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-startup-onepage" class="sub-link">
                        Modern Startup
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-creative-agency" class="sub-link">
                        Creative Agency
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-modern-agency" class="sub-link">
                        Modern Agency
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-creative-portfolio" class="sub-link">
                        Creative Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-digital-agency" class="sub-link">
                        Digital Agency
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-freelancer" class="sub-link">
                        Freelancer
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-personal-vcard" class="sub-link">
                        Personal vCard
                      </a>
                    </li>
                    <li>
                      <a href="/light/home-minimal-portfolio" class="sub-link">
                        Minimal Portfolio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/light/home-asymmetric-portfolio"
                        class="sub-link"
                      >
                        Asymmetric Portfolio
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Pages"> Pages </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="About Us">
                            About Us
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/page-about" class="sub-link">
                              About Us v1
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-about2" class="sub-link">
                              About Us v2
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-about3" class="sub-link">
                              About Us v3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Services">
                            Services
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/page-services" class="sub-link">
                              Services v1
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-services2" class="sub-link">
                              Services v2
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/page-services-details"
                              class="sub-link"
                            >
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Contact">
                            Contact
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/page-contact" class="sub-link">
                              Contact v1
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-contact2" class="sub-link">
                              Contact v2
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-contact3" class="sub-link">
                              Contact v3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Team"> Team </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/page-team" class="sub-link">
                              Our Team
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-team-single" class="sub-link">
                              Team Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Others">
                            Others
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/page-FAQS" class="sub-link">
                              FAQS
                            </a>
                          </li>
                          <li>
                            <a href="/light/page-error-404" class="sub-link">
                              Error 404
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Portfolio">
                      Portfolio
                    </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Portfolio Type">
                            Portfolio Type
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a
                              href="/light/portfolio-standard"
                              class="sub-link"
                            >
                              Standerd
                            </a>
                          </li>
                          <li>
                            <a href="/light/portfolio-gallery" class="sub-link">
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a href="/light/portfolio-metro" class="sub-link">
                              Metro
                            </a>
                          </li>
                          <li>
                            <a href="/light/portfolio-masonry" class="sub-link">
                              Masonry
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/portfolio-caption-cursor"
                              class="sub-link"
                            >
                              Caption Cursor
                            </a>
                          </li>
                          <li>
                            <a href="/light/portfolio-outline" class="sub-link">
                              Outline
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/portfolio-parallax"
                              class="sub-link"
                            >
                              Parallax
                            </a>
                          </li>
                          <li>
                            <a href="/light/portfolio-sticky" class="sub-link">
                              Sticky
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Showcases">
                            Showcases
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a
                              href="/light/showcase-fullscreen"
                              class="sub-link"
                            >
                              Parallax Slider
                            </a>
                          </li>
                          <li>
                            <a href="/light/showcase-carousel" class="sub-link">
                              Showcase Carousel
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/showcase-half-slider"
                              class="sub-link"
                            >
                              Creative Slider
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/showcase-interactive-full"
                              class="sub-link"
                            >
                              Interactive Full
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/showcase-interactive-center"
                              class="sub-link"
                            >
                              Interactive Center
                            </a>
                          </li>
                          <li>
                            <a
                              href="/light/showcase-interactive-vertical"
                              class="sub-link"
                            >
                              Interactive Vertical
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Portfolio Single">
                            Portfolio Single
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/light/project1" class="sub-link">
                              project1
                            </a>
                          </li>
                          <li>
                            <a href="/light/project2" class="sub-link">
                              project2
                            </a>
                          </li>
                          <li>
                            <a href="/light/project3" class="sub-link">
                              project3
                            </a>
                          </li>
                          <li>
                            <a href="/light/project4" class="sub-link">
                              project4
                            </a>
                          </li>
                          <li>
                            <a href="/light/project5" class="sub-link">
                              project5
                            </a>
                          </li>
                          <li>
                            <a href="/light/project6" class="sub-link">
                              project6
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Blogs"> Blogs </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a class="sub-link" href="/light/blog-classic">
                        Standard
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/light/blog-list">
                        Blog List
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/light/blog-list2">
                        Blog List 2
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/light/blog-details">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <a href="/light/page-contact3" class="link">
                    <span class="fill-text" data-text="Contact Us">
                      Contact Us
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Address</h6>
              <h5>
                541 Melville Geek, <br />
                Palo Alto, CA 94301
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
              <h5>
                <a href="#0">Hello@email.com</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="#0">+1 840 841 25 69</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  >
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleSearch() {
  let form = document.querySelector('.navbar .search-form');
  let closeBtn = document.querySelector('.search-form .close-search');

  form.classList.toggle('open');
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}
</script>
