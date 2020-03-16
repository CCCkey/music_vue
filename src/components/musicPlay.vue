<template>
  <div>
    <Header></Header>
    <div class="player_main">
      <!-- 播放器主体 -->
      <div class="player_blur" :style="'background-image:url(http://localhost:3000/'+music_info.music_img_url+')'"></div>
      <!-- 模糊背景 -->
      <div class="player_content">
        <div class="music_list">
          <table>
            <tr>
              <th>歌曲</th>
              <th>歌手</th>
              <th>播放</th>
              <th>操作</th>
            </tr>
            <tr v-for="item in music_list">
              <td>{{item.music_name}}</td>
              <td>{{item.singer}}</td>
              <router-link :to="'/musicPlay/' + item.id">
                <td>
                  <img src="../assets/img/48/play_white.png">
                </td>
              </router-link>
              <td><img src="../assets/img/48/dele.png" @click="del(item.id)"></td>
            </tr>
            <tr>
              <td colspan="4" align="right">
                <input type="button" value="清空列表" class="del_checked" @click="delAll()">
              </td>
            </tr>
          </table>
        </div>

        <div class="music_play">
          <div class="music_info">
            <h2>{{music_info.music_name}}</h2>
            <h3>{{music_info.singer}}</h3>
          </div>
          <div class="player_disc">
            <div :class="['player_img',isPlay ?'play':'']">
              <img width="100%" :src="'http://localhost:3000/'+music_info.music_img_url">
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 播放器控件主体 -->
    <div class="player_controls">
      <img src="../assets/img/48/play_prev.png" alt="" class="prev" @click="playPrev(music_id)">
      <audio controls="controls" controlsList="nodownload" id="audio1" ref="audio"></audio>
      <img src="../assets/img/48/play_next.png" alt="" class="next" @click="playNext(music_id)">
      <div class="comment">
        <router-link to="/comments"><img src="../assets/img/48/comment.png"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getMusicInfo();
  },
  mounted() {
    this.getMusicInfo();
  },
  watch: {
    $route: {
      handler() {
        this.music_id = this.$route.params.id;
        this.getMusicInfo();
        //深度监听，同时也可监听到param参数变化
      },
      deep: true,
    }
  },
  data() {
    return {
      music_list: this.$store.getters.getState.music_list,
      music_info: null,
      music_id: this.$route.params.id,
      isPlay: false
    }
  },
  methods: {
    del(id) {
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          this.music_list.splice(i, 1);
          this.$store.dispatch('setStateMusicList', this.music_list);
        }
      });
    },
    delAll() {
      this.music_list = null;
      this.$store.dispatch('setStateMusicList', []);
    },
    getMusicInfo() {
      this.$axios.get("/api/v1/musics/music/" + this.music_id).then((res) => {
        if (res.data.state == 200) {
          this.music_info = res.data.data[0];
          this.$store.dispatch('setStateMusicInfo', this.music_info);
          if (this.$refs.audio) {
            this.$refs.audio.src = 'http://localhost:3000/' + this.music_info.music_url
            this.$refs.audio.play();
            let _this = this;
            this.$refs.audio.addEventListener("play", function() {
              //唱片旋转动画启动
              _this.isPlay = true;
            });
            this.$refs.audio.addEventListener("pause", function() {
              //唱片旋转动画停止
              _this.isPlay = false;
            })
          }
          for (var i in this.music_list) {
            if (this.music_list[i].id == this.music_info.id) {
              return false;
            }
          }
          this.music_list.push(this.music_info);
          this.$store.dispatch('setStateMusicList', this.music_list);
        }
      })
    },
    playPrev(id) {
      var index;
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          index = i - 1
        }
      })
      if (index < 0) {
        return false
      }
      this.$router.push({ name: "musicPlay", params: { id: this.music_list[index].id } })
    },
    playNext(id) {
      var index;
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          index = i + 1
        }
      })
      if (index >= this.music_list.length) {
        return false
      }
      this.$router.push({ name: "musicPlay", params: { id: this.music_list[index].id } })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player_main {
  /* 播放器主体 */
  width: 100%;
  height: 100%;
}

.player_blur {
  /* 播放器主体模糊背景 */
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../assets/img/300/20190803_012634.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(60px);
}

.player_content {
  display: flex;
}

.music_list {
  flex: 1;
  margin: 5% auto;
  padding-left: 30px;
}

table {
  width: 100%;
  color: white;
  text-align: center;
  line-height: 50px;
}

table td>img {
  width: 24px;
  vertical-align: middle;
}

table td>img:hover {
  cursor: pointer
}

.del_checked {
  padding: 5px;
  background-color: #ccc;
  border-radius: 5px;
}

.music_play {
  flex: 1;
  text-align: center;
  height: 400px;
  margin-top: 50px;
}

.music_info {
  text-align: center;
  line-height: 40px;
}

.player_disc {
  /* 播放器唱片效果 */
  margin: 1% auto 2%;
  width: 250px;
  height: 250px;
  background: url(../assets/img/cd.png) no-repeat center;
  background-size: 100%;
  position: relative;
}

.player_img {
  /* 唱片歌曲图片 */
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.player_controls {
  background: #f1f3f4;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
}

audio {
  width: 80%;
  margin-top: 15px;
  height: 50px;
  outline: none;
}

.prev,
.next {
  width: 42px;
}

.prev {
  margin-left: 20px;
}

.comment {
  display: inline-block;
}

.comment img {
  width: 18px;
  padding: 0 0 16px 20px;
}






/* 唱片播放状态 */

.play {
  animation: disc 5s linear 0s infinite;
}






/* 播放 画片 动画 */

@keyframes disc {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
