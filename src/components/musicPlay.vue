<template>
  <div>
    <Header></Header>
    <div class="player_main">
      <!-- 播放器主体 -->
      <div class="player_blur"></div>
      <!-- 模糊背景 -->
      <div class="player_content">
        <table>
          <tr>
            <th>歌曲</th>
            <th>歌手</th>
            <th>播放</th>
            <th>操作</th>
          </tr>
          <tr id="1">
            <td>昨日青空</td>
            <td>尤长靖</td>
            <td><img src="../assets/img/48/play_white.png" class="play"></td>
            <td><img src="../assets/img/48/dele.png" class="del"></td>
          </tr>
          <tr id="2">
            <td>山外小楼夜听雨</td>
            <td>任然</td>
            <td><img src="../assets/img/48/play_white.png" class="play"></td>
            <td><img src="../assets/img/48/dele.png" class="del"></td>
          </tr>
        </table>
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
      <!-- <img src="../assets/img/48/play_prev.png" alt=""> -->
      <audio id="audio1" controls="controls" controlsList="nodownload"></audio>
      <!-- <img src="../assets/img/48/play_next.png" alt="">       -->
      <div class="comment">
        <router-link to="/comments"><img src="../assets/img/48/comment.png"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  /* margin-top: 80px; */
}

.player_blur {
  /* 播放器主体模糊背景 */
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../assets/img/300/20190803_012634.png) no-repeat center;
  background-size: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  filter: blur(60px);
}

.player_content {
  display: flex;
}

table {
  flex: 1;
  color: white;
  margin: 5% auto;
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
.player_controls img {
  width: 40px;
}
audio {
  width: 80%;
  margin-left: 5%;
  margin-top: 15px;
  height: 50px;
  outline: none;
}

.comment {
  width: 10%;
  display: inline-block;
}

.comment img {
  max-width: 100%;
  padding-bottom: 16px;
}
</style>
