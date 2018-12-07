<script>
    import emoji from 'emoji.json'
    const NUM_COOL_EMOJIS = 1382;
    export default{
        props: {
            filename: String
        },
        data(){
            return{
                emojiChar: null
            }
    },
        mounted(){
            this.setRandomEmoji();
        },
        methods:{
            setRandomEmoji(){
                const rand = Math.ceil(Math.random()* NUM_COOL_EMOJIS);
                this.emojiChar = emoji[rand].char;
            }
        },
        computed: {
            displayName() {
                return this.filename.replace(/_/g, ' ');
            }
        }
    }
</script>

<template>
  <div @click="$emit('play-sound', filename)">
  {{ displayName }}
  <br>
    <span class="emoji">{{emojiChar}}</span>
  </div>
</template>

<style scoped>
  div {
    background: white;
    color: #000;
    border-radius: 5px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;
  }
  div:hover {
    opacity: 0.8;
  }
  .emoji {
    font-size: 50px;
  }
</style>
