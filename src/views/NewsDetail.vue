<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white border-bottom shadow-sm mt-2">
        <li class="breadcrumb-item my-2" aria-current="page" @click="homePage()" style="cursor: pointer">
          Home
        </li>
        <li class="breadcrumb-item my-2" aria-current="page" @click="loginPage()" style="cursor: pointer">
          <span class="border py-2 px-3 bg-primary text-light rounded">Login</span>
        </li>
        <li class="breadcrumb-item my-2" aria-current="page" @click="logout()" style="cursor: pointer">
          <span class="border py-2 px-3 bg-danger text-light rounded">Logout</span>
        </li>
      </ol>
    </nav>
  </div>
  <main>
    <!-- About US Start -->
    <div class="about-area">
      <div class="container">
        <!-- Hot Aimated News Tittle-->
        <div class="row">
          <div class="col-lg-12">
            <div class="trending-tittle">
              <strong>Trending now</strong>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <!-- Trending Tittle -->
            <div class="about-right mb-90">
              <div class="about-img">
                <img :src="post.image" alt="" />
              </div>
              <div class="section-tittle mb-30 pt-30">
                <h3>{{ post.title }}</h3>
              </div>
              <div class="about-prea">
                <p class="about-pera1 mb-25">
                  {{ post.description }}
                </p>
              </div>
              <div class="social-share pt-30">
                <div class="section-tittle">
                  <h3 class="mr-20">Share:</h3>
                  <ul>
                    <li>
                      <a href="#"><img src="assets/img/news/icon-ins.png" alt="" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="assets/img/news/icon-fb.png" alt="" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="assets/img/news/icon-tw.png" alt="" /></a>
                    </li>
                    <li>
                      <a href="#"><img src="assets/img/news/icon-yo.png" alt="" /></a>
                    </li>
                  </ul>
                </div>
                <div class="section-title d-flex">
                  <h3 class="mr-20">Viewer:</h3>
                  <span class="p-0 mt-2">
                    <i class="fa-solid fa-eye mr-2"></i>{{ postViewCount }} views</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <!-- Section Tittle -->
            <div class="section-tittle mb-40">
              <h3>Follow Us</h3>
            </div>
            <!-- Flow Socail -->
            <div class="single-follow mb-45">
              <div class="single-box">
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"><img src="assets/img/news/icon-fb.png" alt="" /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"><img src="assets/img/news/icon-tw.png" alt="" /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"><img src="assets/img/news/icon-ins.png" alt="" /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div class="follow-us d-flex align-items-center">
                  <div class="follow-social">
                    <a href="#"><img src="assets/img/news/icon-yo.png" alt="" /></a>
                  </div>
                  <div class="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- New Poster -->
            <div class="news-poster d-none d-lg-block">
              <img src="assets/img/news/news_card.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About US End -->
  </main>
</template>

<script src="./../js/NewsDetail.js"></script>
