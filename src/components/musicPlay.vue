<template>
  <div>
    <Header></Header>
    <div class="player_main">
      <!-- 播放器主体 -->
      <div class="player_blur" style=""></div>
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
              <td><img src="../assets/img/48/play_white.png" @click="play(item.id)"></td>
              <td><img src="../assets/img/48/dele.png" @click="del(item.id)"></td>
            </tr>
            <tr>
              <td colspan="4" align="right">
                <input type="button" value="清空列表" class="del_checked" @click="delAll()">
              </td>
            </tr>
          </table>
        </div>

        <div class="music_lyric">
          <div class="music_info">
            <h2 id="music_name">昨日青空</h2>
            <h3 id="music_singer">尤长靖</h3>
          </div>
          <div class="lyric">
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
            <p>昨日青空</p>
          </div>
        </div>
      </div>

    </div>
    <!-- 播放器控件主体 -->
    <div class="player_controls">
      <img src="../assets/img/48/play_prev.png" alt="" class="prev" @click="playPrev(music_id)">
      <audio controls="controls" controlsList="nodownload" ref="audio"></audio>
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
    // console.log(this.getNextId(this.music_id))
  },
  data() {
    return {
      music_list: this.$store.getters.getState.music_list,
      music_info: null,
      music_id: 1
    }
  },
  methods: {
    del(id) {
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          this.music_list.splice(i, 1)
        }
      });
    },
    delAll() {
      this.music_list = null;
    },
    play(id) {
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          this.$refs.audio.src = item.music_url;
          this.$refs.audio.play();
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
      if (index >= 0) {
        this.$refs.audio.src = this.music_list[index].music_url;
        this.$refs.audio.play();
      }
    },
    playNext(id) {
      var index;
      this.music_list.forEach((item, i) => {
        if (item.id == id) {
          index = i + 1
        }
      })
      if (index < this.music_list.length) {
        this.$refs.audio.src = this.music_list[index].music_url;
        this.$refs.audio.play();
      }
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

.music_lyric {
  flex: 1;
  text-align: center;
  height: 360px;
  overflow: hidden;
  margin-top: 50px;
}

.music_info {
  text-align: center;
  line-height: 40px;
}

.lyric {
  width: 104%;
  height: 100%;
  overflow-y: scroll;
}

.lyric p {
  line-height: 20px;
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
</style>
