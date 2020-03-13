<template>
<div>
    <Header></Header>
    <div class="main">
        <div class="music_info">
            <img class="" :src="'/api'+music_info.music_img_url">
            <div class="music_t">
                <p>{{music_info.music_name}}</p><br />
                <p>歌手：{{music_info.singer}}</p>
            </div>
        </div>
        <div class="comments">
            <div id="comments_list">
                <h2>评论：</h2>
                <ul id="list" contenteditable="false">
                    <li v-for="item in comments_list">
                        <p>{{item.user_account}}：{{item.content}}</p>
                        <p>{{item.create_time}}</p>
                    </li>
                </ul>
            </div>

            <div class="add_comment" action="#" method="get">
                <textarea v-model="content" type="text" placeholder="发表评论" required spellcheck="true" rows="3"></textarea>
                <button id="commit" type="button" @click="addComments()">确定</button>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
export default {
    created() {
        // 获取登录的token
        this.token = this.getCookie("user_token");
        this.$axios.get("/api/v1/comments/list?offset=1&limit=5").then((res) => {
            if (res.data.state == 200) {
                this.comments_list = res.data.data;
                console.log(this.comments_list)
            }
        })
    },
    data() {
        return {
            comments_list: null,
            token: null,
            content: "",
			user_id: this.$store.getters.getState.user_info.id,
			music_info:this.$store.getters.getState.music_info
        }
    },
    methods: {
        addComments() {
            this.$axios.post("/api/v1/comments/add", {
                user_id: this.user_id,
                music_id: this.music_info.id,
                content: this.content,
                token: this.token
            }).then((res) => {
                if (res.data.state == 200) {
                    alert("评论成功")
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.main {
    padding-top: 50px;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
}

.music_info img {
    max-width: 100%;
}

.music_t {
    padding: 20px 0px 0px;
}

.music_t span {
    margin-top: 50px;
}

.comments {
    position: relative;
    width: 60%;
}

#comments_list {
    position: relative;
    overflow: hidden;
}

#list {
    width: 103%;
    height: 280px;
    overflow: auto;
}

#comments_list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 1px solid #CCCCCC;
    padding-right: 40px;
}

#comments_list img {
    width: 24px;
    margin-right: 30px;
}

.add_comment textarea {
    width: 90%;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    padding: 15px;
    margin: 20px 0;
    outline: none;
}

.add_comment {
    position: relative;
    margin-bottom: 20px;
}

.add_comment button {
    padding: 10px 50px;
    outline: none;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
}
</style>
