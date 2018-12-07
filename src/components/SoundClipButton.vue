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
        }
    }
</script>

<template>
  <div @click="$emit('play-sound', filename)">
  {{filename}}
  <br>
  {{emojiChar}}
  </div>
</template>