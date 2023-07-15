<template>
  <header class="header">
    <div class="container">
      <div class="row jcsb">
        <div class="logo">
          <a href="#">m</a>
        </div>
        <div class="hamburge-btn outer-shadow hover-in-shadow">
          <span></span>
        </div>
      </div>
    </div>
  </header>

  <nav class="nav-menu">
    <div class="close-nav-menu hover-in-shadow">&times;</div>
    <div class="nav-menu-inner">
      <ul>
        <li>
          <a class="link-item inner-shadow active" href="#home">Home</a>
        </li>
        <li>
          <a class="link-item outer-shadow hover-in-shadow" href="#about">About</a>
        </li>
        <li>
          <a class="link-item outer-shadow hover-in-shadow" href="#services">Services</a>
        </li>
        <li>
          <a class="link-item outer-shadow hover-in-shadow" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a class="link-item outer-shadow hover-in-shadow" href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a class="link-item outer-shadow hover-in-shadow" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <p class="copyright-text">
      &copy; 2021 TheMercy
    </p>

  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>