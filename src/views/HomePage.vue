<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white border-bottom shadow-sm mt-2">
        <li
          class="breadcrumb-item my-2"
          aria-current="page"
          @click="homePage()"
          style="cursor: pointer"
        >
          Home
        </li>
        <li
          class="breadcrumb-item my-2"
          aria-current="page"
          @click="loginPage()"
          style="cursor: pointer"
        >
          <span class="border py-2 px-3 bg-primary text-light rounded">Login</span>
        </li>
        <li
          class="breadcrumb-item my-2"
          aria-current="page"
          @click="logout()"
          style="cursor: pointer"
        >
          <span class="border py-2 px-3 bg-danger text-light rounded">Logout</span>
        </li>
      </ol>
    </nav>
  </div>
  <!-- Whats New Start -->
  <section class="whats-news-area pt-50 pb-20">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-8">
          <form action="" method="">
            <div class="form-group d-flex justify-content-between">
              <input
                type="text"
                name="searchKey"
                placeholder="search anything..."
                class="form-control"
                v-model="searchKeywords"
                v-on:keyup.enter="search()"
              />
              <i
                class="fa-solid fa-magnifying-glass my-auto ml-3"
                @click="search()"
                style="cursor: pointer"
              ></i>
            </div>
          </form>
        </div>
        <div class="col-lg-12">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-3 col-md-3">
              <div class="section-tittle mb-30">
                <h3>Whats New</h3>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="properties__button">
                <!--Nav Button  -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="details.htmlnav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      @click="searchCategory('')"
                      >All</a
                    >
                    <a
                      class="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="details.htmlnav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      v-for="(categoryList, index) in categoryLists"
                      :key="index"
                      @click="searchCategory(categoryList.id)"
                      >{{ categoryList.title }}</a
                    >
                  </div>
                </nav>
                <!--End Nav Button  -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div v-if="tokenStatus" class="text-center my-5 fw-bold">
                <p>You don't have permission for this page.</p>
              </div>
              <!-- Nav Card -->
              <div class="tab-content" id="nav-tabContent" v-else>
                <div
                  v-if="postLists.length == 0"
                  class="text-center"
                  style="height: 300px"
                >
                  <h2 class="text-danger mt-5">There is no data!</h2>
                </div>
                <!-- card one -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  v-else
                >
                  <div class="whats-news-caption">
                    <div class="row">
                      <div
                        class="col-lg-6 col-md-6"
                        v-for="(postList, index) in postLists"
                        :key="index"
                        @click="directNews(postList.id)"
                      >
                        <div class="single-what-news mb-100">
                          <div class="what-img">
                            <img v-bind:src="postList.image" alt="" />
                          </div>
                          <div class="what-cap">
                            <span class="color1">{{
                              postList.category_title
                            }}</span>
                            <h4>
                              <a href="details.html">{{ postList.title }}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Nav Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Whats New End -->
</template>
<script src="./../js/HomePage.js"></script>