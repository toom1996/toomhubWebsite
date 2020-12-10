<template>
  <div class="col-lg-8 row m-0 p-0">
    <div class="col-sm-12">
      <div
        id="post-modal-data"
        class="iq-card iq-card-block iq-card-stretch iq-card-height"
      >
        <div class="iq-card-header d-flex justify-content-between">
          <div class="iq-header-title">
            <h4 class="card-title">Create Post</h4>
          </div>
        </div>
        <div class="iq-card-body" data-toggle="modal" data-target="#post-modal">
          <div class="d-flex align-items-center">
            <form class="post-text ml-3 w-100" action="javascript:void();">
              <textarea
                type="text"
                class="form-control rounded"
                placeholder="Write something here..."
                style="border: none"
              />
            </form>
          </div>
          <hr />
          <ul
            class="post-opt-block d-flex align-items-center list-inline m-0 p-0"
          >
            <li class="iq-bg-primary rounded p-2 pointer mr-3">
              <a href="#"></a
              ><img
                src="~/assets/images/small/07.png"
                alt="icon"
                class="img-fluid"
              />
              Photo/Video
            </li>
            <li class="iq-bg-primary rounded p-2 pointer mr-3">
              <a href="#"></a
              ><img
                src="~/assets/images/small/08.png"
                alt="icon"
                class="img-fluid"
              />
              Tag Friend
            </li>
            <li class="iq-bg-primary rounded p-2 pointer mr-3">
              <a href="#"></a
              ><img
                src="~/assets/images/small/09.png"
                alt="icon"
                class="img-fluid"
              />
              Feeling/Activity
            </li>
            <li class="iq-bg-primary rounded p-2 pointer">
              <div class="iq-card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle"
                    id="post-option"
                    data-toggle="dropdown"
                  >
                    <i class="ri-more-fill"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="post-option"
                    style=""
                  >
                    <a class="dropdown-item" href="#">Check in</a>
                    <a class="dropdown-item" href="#">Live Video</a>
                    <a class="dropdown-item" href="#">Gif</a>
                    <a class="dropdown-item" href="#">Watch Party</a>
                    <a class="dropdown-item" href="#">Play with Friend</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="modal fade"
          id="post-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="post-modalLabel"
          aria-hidden="true"
          style="display: none"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="post-modalLabel">Create Post</h5>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  <i class="ri-close-fill"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="d-flex align-items-center">
                  <div class="user-img">
                    <img
                      src="~/assets/images/user/1.jpg"
                      alt="userimg"
                      class="avatar-60 rounded-circle img-fluid"
                    />
                  </div>
                  <form
                    class="post-text ml-3 w-100"
                    action="javascript:void();"
                  >
                    <input
                      type="text"
                      class="form-control rounded"
                      placeholder="Write something here..."
                      style="border: none"
                    />
                  </form>
                </div>
                <hr />
                <ul
                  class="d-flex flex-wrap align-items-center list-inline m-0 p-0"
                >
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/07.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Photo/Video
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/08.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Tag Friend
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/09.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Feeling/Activity
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/10.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Check in
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/11.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Live Video
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/12.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Gif
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/13.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Watch Party
                    </div>
                  </li>
                  <li class="col-md-6 mb-3">
                    <div class="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#"></a
                      ><img
                        src="~/assets/images/small/14.png"
                        alt="icon"
                        class="img-fluid"
                      />
                      Play with Friends
                    </div>
                  </li>
                </ul>
                <hr />
                <div class="other-option">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div class="user-img mr-3">
                        <img
                          src="~/assets/images/user/1.jpg"
                          alt="userimg"
                          class="avatar-60 rounded-circle img-fluid"
                        />
                      </div>
                      <h6>Your Story</h6>
                    </div>
                    <div class="iq-card-post-toolbar">
                      <div class="dropdown">
                        <span
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          role="button"
                        >
                          <span class="btn btn-primary">Friend</span>
                        </span>
                        <div class="dropdown-menu m-0 p-0">
                          <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <div class="icon font-size-20">
                                <i class="ri-save-line"></i>
                              </div>
                              <div class="data ml-2">
                                <h6>Public</h6>
                                <p class="mb-0">Anyone on or off Facebook</p>
                              </div>
                            </div>
                          </a>
                          <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <div class="icon font-size-20">
                                <i class="ri-close-circle-line"></i>
                              </div>
                              <div class="data ml-2">
                                <h6>Friends</h6>
                                <p class="mb-0">Your Friend on facebook</p>
                              </div>
                            </div>
                          </a>
                          <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <div class="icon font-size-20">
                                <i class="ri-user-unfollow-line"></i>
                              </div>
                              <div class="data ml-2">
                                <h6>Friends except</h6>
                                <p class="mb-0">Don't show to some friends</p>
                              </div>
                            </div>
                          </a>
                          <a class="dropdown-item p-3" href="#">
                            <div class="d-flex align-items-top">
                              <div class="icon font-size-20">
                                <i class="ri-notification-line"></i>
                              </div>
                              <div class="data ml-2">
                                <h6>Only Me</h6>
                                <p class="mb-0">Only me</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary d-block w-100 mt-3"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-12" v-for="(item, index) in indexData" :key="index">
      <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
        <div class="iq-card-body">
          <div class="user-post-data">
            <div class="d-flex flex-wrap">
              <div class="media-support-user-img mr-3">
                <img
                  class="rounded-circle"
                  src="~/assets/images/user/01.jpg"
                  alt=""
                />
              </div>
              <div class="media-support-info">
                <h5 class="mb-0 d-inline-block">Anna Sthesia</h5>
                <h6><p class="mb-0">10分钟前</p></h6>
              </div>
              <div class="iq-card-post-toolbar">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="button"
                  >
                    <i class="ri-more-fill"></i>
                  </span>
                  <div class="dropdown-menu m-0 p-0">
                    <a class="dropdown-item p-3" href="#">
                      <div class="d-flex align-items-top">
                        <div class="icon font-size-20">
                          <i class="ri-save-line"></i>
                        </div>
                        <div class="data ml-2">
                          <h6>Save Post</h6>
                          <p class="mb-0">Add this to your saved items</p>
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item p-3" href="#">
                      <div class="d-flex align-items-top">
                        <div class="icon font-size-20">
                          <i class="ri-close-circle-line"></i>
                        </div>
                        <div class="data ml-2">
                          <h6>Hide Post</h6>
                          <p class="mb-0">See fewer posts like this.</p>
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item p-3" href="#">
                      <div class="d-flex align-items-top">
                        <div class="icon font-size-20">
                          <i class="ri-user-unfollow-line"></i>
                        </div>
                        <div class="data ml-2">
                          <h6>Unfollow User</h6>
                          <p class="mb-0">
                            Stop seeing posts but stay friends.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a class="dropdown-item p-3" href="#">
                      <div class="d-flex align-items-top">
                        <div class="icon font-size-20">
                          <i class="ri-notification-line"></i>
                        </div>
                        <div class="data ml-2">
                          <h6>Notifications</h6>
                          <p class="mb-0">
                            Turn on notifications for this post
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <p>
              {{ item.content }}
            </p>
            <div class="demo-image__preview">
  
</div>
          </div>
          <div class="user-post">
            <div class="d-flex">
              <div class="post-image">
                <!-- <img
                v-for="(item, index) in item.list"
                :key="index"
                v-bind:src="item"
                alt="post-image"
                class="img-fluid rounded w-75"
              /> -->
              
                <el-image
                  v-for="(value, index) in item.list"
                  :key="index"
                  v-bind:src="value"
                  alt="post-image"
                  class="img-fluid rounded w-75"
                  :preview-src-list="item.list"
                  lazy
                >
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
            </div>
          </div>
          <div class="comment-area mt-3">
            <div class="d-flex justify-content-between align-items-center">
              <div
                class="like-block position-relative d-flex align-items-center"
              >
                <div class="d-flex align-items-center">
                  <div class="like-data">
                    <div class="dropdown">
                      <span
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        role="button"
                      >
                        <img
                          src="~/assets/images/icon/01.png"
                          class="img-fluid"
                          alt=""
                        />
                      </span>
                      <div class="dropdown-menu">
                        <a
                          class="ml-2 mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Like"
                          ><img
                            src="~/assets/images/icon/01.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Love"
                          ><img
                            src="~/assets/images/icon/02.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Happy"
                          ><img
                            src="~/assets/images/icon/03.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="HaHa"
                          ><img
                            src="~/assets/images/icon/04.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Think"
                          ><img
                            src="~/assets/images/icon/05.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Sade"
                          ><img
                            src="~/assets/images/icon/06.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                        <a
                          class="mr-2"
                          href="#"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Lovely"
                          ><img
                            src="~/assets/images/icon/07.png"
                            class="img-fluid"
                            alt=""
                        /></a>
                      </div>
                    </div>
                  </div>
                  <div class="total-like-block ml-2 mr-3">
                    <div class="dropdown">
                      <span
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        role="button"
                      >
                        140 Likes
                      </span>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Max Emum</a>
                        <a class="dropdown-item" href="#">Bill Yerds</a>
                        <a class="dropdown-item" href="#">Hap E. Birthday</a>
                        <a class="dropdown-item" href="#">Tara Misu</a>
                        <a class="dropdown-item" href="#">Midge Itz</a>
                        <a class="dropdown-item" href="#">Sal Vidge</a>
                        <a class="dropdown-item" href="#">Other</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="total-comment-block">
                  <div class="dropdown">
                    <span
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      role="button"
                    >
                      20 Comment
                    </span>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Max Emum</a>
                      <a class="dropdown-item" href="#">Bill Yerds</a>
                      <a class="dropdown-item" href="#">Hap E. Birthday</a>
                      <a class="dropdown-item" href="#">Tara Misu</a>
                      <a class="dropdown-item" href="#">Midge Itz</a>
                      <a class="dropdown-item" href="#">Sal Vidge</a>
                      <a class="dropdown-item" href="#">Other</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="share-block d-flex align-items-center feather-icon mr-3"
              >
                <a href="javascript:void();"
                  ><i class="ri-share-line"></i>
                  <span class="ml-1">99 Share</span></a
                >
              </div>
            </div>
            <hr />
            <ul class="post-comments p-0 m-0">
              <li class="mb-2">
                <div class="d-flex flex-wrap">
                  <div class="user-img">
                    <img
                      src="~/assets/images/user/02.jpg"
                      alt="userimg"
                      class="avatar-35 rounded-circle img-fluid"
                    />
                  </div>
                  <div class="comment-data-block ml-3">
                    <h6>Monty Carlo</h6>
                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                    <div
                      class="d-flex flex-wrap align-items-center comment-activity"
                    >
                      <a href="javascript:void();">like</a>
                      <a href="javascript:void();">reply</a>
                      <a href="javascript:void();">translate</a>
                      <span> 5 min </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex flex-wrap">
                  <div class="user-img">
                    <img
                      src="~/assets/images/user/03.jpg"
                      alt="userimg"
                      class="avatar-35 rounded-circle img-fluid"
                    />
                  </div>
                  <div class="comment-data-block ml-3">
                    <h6>Paul Molive</h6>
                    <p class="mb-0">Lorem ipsum dolor sit amet</p>
                    <div
                      class="d-flex flex-wrap align-items-center comment-activity"
                    >
                      <a href="javascript:void();">like</a>
                      <a href="javascript:void();">reply</a>
                      <a href="javascript:void();">translate</a>
                      <span> 5 min </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <form
              class="comment-text d-flex align-items-center mt-3"
              action="javascript:void(0);"
            >
              <input type="text" class="form-control rounded" />
              <div class="comment-attagement d-flex">
                <a href="javascript:void();"><i class="ri-link mr-3"></i></a>
                <a href="javascript:void();"
                  ><i class="ri-user-smile-line mr-3"></i
                ></a>
                <a href="javascript:void();"
                  ><i class="ri-camera-line mr-3"></i
                ></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.getIndex();
  },
  methods: {
    //获取首页数据
    getIndex() {
      let indexData = this.$axios
        .$get("https://toomhub.23cm.cn/v1/mini/sq/index?page=1")
        .then((res) => {
          this.indexData = res.data.list;
        });
      console.log(indexData);
    },
  },
  data() {
    return {
      indexData: [],
      //https://blog.csdn.net/trumangao/article/details/108713026
    };
  },
};
</script>
